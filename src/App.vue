<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, provide } from 'vue'
import { RouterView } from 'vue-router'
import {
  MenuItemFriendsImage,
  MenuItemHomeImage,
  MenuItemShopImage,
  MenuItemTasksImage,
} from './assets/images'

const navElement = ref<HTMLElement | null>(null)
const navHeight = ref(0)

provide('navHeight', navHeight)

let observer: ResizeObserver | null = null

onMounted(() => {
  if (!navElement.value) return

  observer = new ResizeObserver((entries) => {
    const entry = entries[0]
    if (!entry) return

    navHeight.value = entry.contentRect.height
  })

  observer.observe(navElement.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="h-full w-full max-w-md relative">
      <RouterView />
      <!-- :style="{ height: `calc(100% - ${navHeight}px)` }" -->

      <nav ref="navElement" class="grid grid-cols-4 px-2 absolute bottom-2 inset-x-0 text-red-500">
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
