<script setup lang="ts">
import { HistoryIcon } from '@/assets/icons'
import { CloseImage, CoinImage } from '@/assets/images'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="bg-cyan-snow w-full h-full bg-cover bg-center bg-no-repeat p-2 relative flex flex-col gap-4 text-white scrollbar-hide overflow-y-scroll"
  >
    <div class="flex justify-between items-center py-4">
      <h1 class="text-2xl font-bold">Withdrawal</h1>
      <RouterLink to="/">
        <img :src="CloseImage" class="w-20" alt="close-image" />
      </RouterLink>
    </div>

    <div
      class="border border-white bg-[rgba(0,123,113,0.5)] py-4 px-8 rounded-xl flex justify-between items-center"
    >
      <img :src="CoinImage" class="w-20" alt="coin-image" />

      <div class="text-xl font-bold text-center">
        <h1>Your coin balance:</h1>
        <p class="text-2xl tracking-wider">150123124.12</p>
      </div>
    </div>

    <h1 class="text-center font-bold">Coin rate: 22000 coins = 1 TON</h1>

    <div class="border border-white bg-[rgba(0,123,113,0.5)] p-4 rounded-xl flex flex-col gap-4">
      <div class="w-full flex justify-between items-center text-sm font-semibold">
        <label for="coins">Enter the amount of coins:</label>
        <input
          type="number"
          id="coins"
          class="border-b border-white max-w-1/3"
          placeholder="0.00"
        />
      </div>

      <div class="w-full flex justify-between items-center text-sm font-semibold">
        <label for="address">Enter the TON address:</label>
        <input
          type="text"
          id="address"
          class="border-b border-white max-w-1/3"
          placeholder="UQA..."
        />
      </div>
    </div>

    <div class="flex-1 flex flex-col justify-end items-center text-xs font-semibold gap-2 py-4">
      <div class="flex justify-center gap-4">
        <p>Blockchain fee: 0.005 TON</p>
        <p>You will receive: 0.1 TON</p>
      </div>

      <button type="submit" class="text-xl text-black bg-white rounded-xl px-25 py-2">
        Withdraw
      </button>

      <RouterLink to="/" class="flex items-center gap-1">
        <HistoryIcon class="w-5" />
        <span> Transaction History </span>
      </RouterLink>
    </div>
  </div>
</template>
