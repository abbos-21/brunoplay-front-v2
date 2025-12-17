<script setup lang="ts">
import { ref, watch, provide, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  MenuItemFriendsImage,
  MenuItemHomeImage,
  MenuItemShopImage,
  MenuItemTasksImage,
} from './assets/images'
// import { BackgroundAudio } from './assets/audios'
// import { useBackgroundMusic } from './composables/useBackgroundMusic'
import { telegram } from './services/telegram'
import { AuthAPI } from './services/auth.api'

const route = useRoute()

const navIsVisible = ref(true)

watch(
  () => route.name,
  (name) => {
    navIsVisible.value = !(name === 'Leaderboard' || name === 'Withdrawal')
  },
  { immediate: true },
)

const navElement = ref<HTMLElement | null>(null)
const navHeight = ref(0)

provide('navHeight', navHeight)

let observer: ResizeObserver | null = null

watch(
  navElement,
  (el) => {
    observer?.disconnect()
    observer = null

    if (!el) {
      navHeight.value = 0
      return
    }

    observer = new ResizeObserver(([entry]) => {
      if (!entry) return
      navHeight.value = entry.contentRect.height
    })

    observer.observe(el)
  },
  { flush: 'post' },
)

async function authenticate() {
  telegram.init()

  if (!telegram.isTelegram()) {
    console.error('Not running inside Telegram')
    return
  }

  const initData = telegram.initData

  if (!initData) {
    console.error('Telegram initData not found')
    return
  }

  const { token } = await AuthAPI.loginWithTelegram(initData)

  localStorage.setItem('token', token)
}

onBeforeUnmount(() => {
  observer?.disconnect()
})

onMounted(async () => {
  const token = localStorage.getItem('token')

  if (token) {
    return
  }

  await authenticate()
})
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="h-full w-full max-w-md relative">
      <RouterView />
      <!-- :style="{ height: `calc(100% - ${navHeight}px)` }" -->

      <nav
        ref="navElement"
        v-if="navIsVisible"
        class="grid grid-cols-4 px-2 absolute bottom-2 inset-x-0 text-red-500"
      >
        <RouterLink to="/" class="cursor-pointer">
          <img :src="MenuItemHomeImage" alt="menu-item-home-image" />
        </RouterLink>

        <RouterLink to="/shop" class="cursor-pointer">
          <img :src="MenuItemShopImage" alt="menu-item-shop-image" />
        </RouterLink>

        <RouterLink to="/tasks" class="cursor-pointer">
          <img :src="MenuItemTasksImage" alt="menu-item-tasks-image" />
        </RouterLink>

        <RouterLink to="/friends" class="cursor-pointer">
          <img :src="MenuItemFriendsImage" alt="menu-item-friends-image" />
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
