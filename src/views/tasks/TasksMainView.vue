<script setup lang="ts">
import { ChevronIcon } from '@/assets/icons'
import { CoinImage, TaskImage } from '@/assets/images'
</script>

<template>
  <div class="my-4 flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
    <div
      class="bg-[rgba(179,223,220,0.75)] rounded-xl flex justify-between items-center p-2 text-neutral-600"
    >
      <div class="flex gap-2 items-center">
        <img :src="TaskImage" class="w-12" alt="task-image" />
        <h1 class="font-bold">Join the BrunoPlay channel</h1>
      </div>

      <div class="flex gap-4 items-center px-2 shrink-0">
        <div class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px text-black">
          <img :src="CoinImage" class="w-6" alt="coin-image" />
          <span class="font-bold text-sm">50</span>
        </div>

        <button type="button">
          <ChevronIcon class="w-4" />
        </button>
      </div>
    </div>
  </div>
</template>
