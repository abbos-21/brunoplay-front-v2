<script setup lang="ts">
import { inject } from 'vue'
import {
  CoinImage,
  WithdrawImage,
  WealthImage,
  WorkImage,
  FoodImage,
  ImmuneImage,
} from '@/assets/images'

const navHeight = inject('navHeight')
</script>

<template>
  <div
    class="bg-teal-snow w-full h-full bg-cover bg-center bg-no-repeat p-2 relative flex flex-col"
    :style="{ paddingBottom: `${navHeight}px` }"
  >
    <div class="flex justify-between items-start">
      <RouterLink
        to="/withdrawal"
        class="flex gap-2 items-center rounded-full bg-sky-400 px-2 py-1 border-4 border-sky-200"
      >
        <img :src="CoinImage" class="w-5 h-5" alt="coin-image" />
        <div class="text-center">
          <p class="font-bold text-sm">34923.123</p>
          <p class="text-[10px] font-bold text-gray-500">= 0.4 TON</p>
        </div>
        <img :src="WithdrawImage" class="w-5 h-5" alt="withdraw-image" />
      </RouterLink>

      <div class="text-center rounded-full bg-sky-400 px-2 py-1 border-4 border-sky-200">
        <p class="text-sm font-bold">Your level: 1</p>
      </div>
    </div>

    <div class="my-4 flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
      <div class="rounded-xl bg-[rgba(161,213,209,0.5)] p-4 flex flex-col gap-2 items-center">
        <div class="flex gap-2 items-start">
          <div class="w-12">
            <img :src="WealthImage" class="w-full" alt="wealth-image" />
          </div>

          <div class="flex flex-col gap-1 items-start flex-1">
            <div class="flex justify-between items-center w-full">
              <h1 class="uppercase text-white font-bold">wealth</h1>

              <div class="bg-white font-bold text-sm rounded-md px-1 py-px">
                Lvl. <span class="text-green-500">0</span> / <span class="text-orange-500">13</span>
              </div>
            </div>

            <div class="bg-white font-medium text-[10px] rounded-md px-1 py-px">
              Capacity: 60 -> 80
            </div>

            <p class="text-white font-medium text-xs">
              Increase coin storage to accumulate more before collecting.
            </p>
          </div>
        </div>

        <button type="button" class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px">
          <img :src="CoinImage" class="w-6" alt="coin-image" />
          <span class="font-bold text-sm">9000</span>
        </button>
      </div>

      <div class="rounded-xl bg-[rgba(161,213,209,0.5)] p-4 flex flex-col gap-2 items-center">
        <div class="flex gap-2 items-start">
          <div class="w-12">
            <img :src="WorkImage" class="w-full" alt="work-image" />
          </div>

          <div class="flex flex-col gap-1 items-start flex-1">
            <div class="flex justify-between items-center w-full">
              <h1 class="uppercase text-white font-bold">wealth</h1>

              <div class="bg-white font-bold text-sm rounded-md px-1 py-px">
                Lvl. <span class="text-green-500">0</span> / <span class="text-orange-500">13</span>
              </div>
            </div>

            <div class="bg-white font-medium text-[10px] rounded-md px-1 py-px">
              Capacity: 60 -> 80
            </div>

            <p class="text-white font-medium text-xs">
              Increase coin storage to accumulate more before collecting.
            </p>
          </div>
        </div>

        <button type="button" class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px">
          <img :src="CoinImage" class="w-6" alt="coin-image" />
          <span class="font-bold text-sm">9000</span>
        </button>
      </div>

      <div class="rounded-xl bg-[rgba(161,213,209,0.5)] p-4 flex flex-col gap-2 items-center">
        <div class="flex gap-2 items-start">
          <div class="w-12">
            <img :src="FoodImage" class="w-full" alt="food-image" />
          </div>

          <div class="flex flex-col gap-1 items-start flex-1">
            <div class="flex justify-between items-center w-full">
              <h1 class="uppercase text-white font-bold">wealth</h1>

              <div class="bg-white font-bold text-sm rounded-md px-1 py-px">
                Lvl. <span class="text-green-500">0</span> / <span class="text-orange-500">13</span>
              </div>
            </div>

            <div class="bg-white font-medium text-[10px] rounded-md px-1 py-px">
              Capacity: 60 -> 80
            </div>

            <p class="text-white font-medium text-xs">
              Increase coin storage to accumulate more before collecting.
            </p>
          </div>
        </div>

        <button type="button" class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px">
          <img :src="CoinImage" class="w-6" alt="coin-image" />
          <span class="font-bold text-sm">9000</span>
        </button>
      </div>

      <div class="rounded-xl bg-[rgba(161,213,209,0.5)] p-4 flex flex-col gap-2 items-center">
        <div class="flex gap-2 items-start">
          <div class="w-12">
            <img :src="ImmuneImage" class="w-full" alt="immune-image" />
          </div>

          <div class="flex flex-col gap-1 items-start flex-1">
            <div class="flex justify-between items-center w-full">
              <h1 class="uppercase text-white font-bold">wealth</h1>

              <div class="bg-white font-bold text-sm rounded-md px-1 py-px">
                Lvl. <span class="text-green-500">0</span> / <span class="text-orange-500">13</span>
              </div>
            </div>

            <div class="bg-white font-medium text-[10px] rounded-md px-1 py-px">
              Capacity: 60 -> 80
            </div>

            <p class="text-white font-medium text-xs">
              Increase coin storage to accumulate more before collecting.
            </p>
          </div>
        </div>

        <button type="button" class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px">
          <img :src="CoinImage" class="w-6" alt="coin-image" />
          <span class="font-bold text-sm">9000</span>
        </button>
      </div>
    </div>
  </div>
</template>
