<script setup lang="ts">
import { CoinImage } from '@/assets/images'
// import PageLoader from '@/components/PageLoader.vue'
import { inject } from 'vue'

const navHeight = inject('navHeight')

const referralLink = 'https://t.me/brunoplay/12345'

function copyLink(e: Event) {
  e.preventDefault()
  navigator.clipboard.writeText(referralLink)
}
</script>

<template>
  <!-- <PageLoader /> -->
  <div
    class="bg-teal-snow w-full h-full bg-cover bg-center bg-no-repeat p-2 relative flex flex-col"
    :style="{ paddingBottom: `${navHeight}px` }"
  >
    <div class="flex flex-col gap-4 text-white">
      <h1 class="uppercase text-center text-lg font-bold">invite and earn!</h1>

      <div class="flex flex-col gap-1 items-start font-semibold">
        <h2 class="text-xs">Your referral link:</h2>
        <form class="w-full flex gap-2" @submit.prevent="copyLink">
          <input
            type="text"
            disabled
            v-model="referralLink"
            class="bg-transparent border border-white px-2 py-1 flex-1 text-xs rounded-md"
          />
          <button
            type="submit"
            class="bg-transparent text-sm px-4 py-2 border border-white rounded-md"
          >
            <span>Copy</span>
          </button>
        </form>
      </div>

      <div class="border border-white rounded-md flex flex-col gap-2 p-2">
        <h1 class="text-center font-bold text-sm">Earnings from referrals: 12345 coins</h1>

        <div class="h-px w-full bg-white"></div>

        <div class="flex items-start justify-between gap-2 font-semibold text-xs">
          <div class="flex flex-col gap-1">
            <h2 class="text-sm">Your referrals’ upgrades</h2>
            <p class="ps-1">Level 1 upgrades: 123</p>
            <p class="ps-1">Level 2 upgrades: 12</p>
          </div>

          <div>
            <h2 class="text-sm">Total referrals: 200</h2>
          </div>
        </div>
      </div>

      <div class="border border-white rounded-md flex flex-col gap-2 p-2">
        <h1 class="text-sm font-bold">Referral-level rewards</h1>

        <div class="flex justify-between items-center text-xs font-semibold px-1">
          <h2>Level 2</h2>

          <div class="flex gap-1 items-center">
            <p>200</p>
            <img :src="CoinImage" class="w-4" alt="coin-image" />
          </div>
        </div>

        <div class="flex justify-between items-center text-xs font-semibold px-1">
          <h2>Level 2</h2>

          <div class="flex gap-1 items-center">
            <p>200</p>
            <img :src="CoinImage" class="w-4" alt="coin-image" />
          </div>
        </div>

        <div class="flex justify-between items-center text-xs font-semibold px-1">
          <h2>Level 2</h2>

          <div class="flex gap-1 items-center">
            <p>200</p>
            <img :src="CoinImage" class="w-4" alt="coin-image" />
          </div>
        </div>

        <div class="flex justify-between items-center text-xs font-semibold px-1">
          <h2>Level 2</h2>

          <div class="flex gap-1 items-center">
            <p>200</p>
            <img :src="CoinImage" class="w-4" alt="coin-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
