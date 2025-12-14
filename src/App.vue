<script setup lang="ts">
import { RouterView } from 'vue-router'
import {
  MenuItemFriendsImage,
  MenuItemHomeImage,
  MenuItemShopImage,
  MenuItemTasksImage,
} from './assets/images'
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="h-full w-full max-w-md relative">
      <RouterView />

      <nav class="grid grid-cols-4 px-2 absolute bottom-2 inset-x-0 text-red-500">
        <RouterLink to="/" class="cursor-pointer">
          <img :src="MenuItemHomeImage" alt="menu-item-home-image" />
        </RouterLink>

        <RouterLink to="/" class="cursor-pointer">
          <img :src="MenuItemShopImage" alt="menu-item-shop-image" />
        </RouterLink>

        <RouterLink to="/" class="cursor-pointer">
          <img :src="MenuItemTasksImage" alt="menu-item-tasks-image" />
        </RouterLink>

        <RouterLink to="/" class="cursor-pointer">
          <img :src="MenuItemFriendsImage" alt="menu-item-friends-image" />
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
