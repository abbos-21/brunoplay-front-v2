<script setup lang="ts">
import { ref } from 'vue'
import { ChevronIcon } from '@/assets/icons'
import { CoinImage, TaskImage } from '@/assets/images'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="my-4 flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
    <div class="bg-[rgba(179,223,220,0.75)] rounded-xl p-2 text-neutral-600">
      <button type="button" class="w-full flex justify-between items-center" @click="toggle">
        <div class="flex gap-2 items-center">
          <img :src="TaskImage" class="w-12" alt="task-image" />
          <h1 class="font-bold text-start">Join the BrunoPlay channel</h1>
        </div>

        <div class="flex gap-4 items-center px-2 shrink-0">
          <div class="flex gap-1 items-center rounded-full bg-[#FFAC33] px-2 py-px text-black">
            <img :src="CoinImage" class="w-6" alt="coin-image" />
            <span class="font-bold text-sm">50</span>
          </div>

          <ChevronIcon
            class="w-4 transition-transform duration-200"
            :class="isOpen ? 'rotate-180' : ''"
          />
        </div>
      </button>

      <div
        class="overflow-hidden transition-all duration-300"
        :style="{
          maxHeight: isOpen ? '200px' : '0',
          opacity: isOpen ? '1' : '0',
        }"
      >
        <div class="pt-2">
          <div class="w-full h-px bg-black"></div>
          <div class="mt-2 text-sm">
            <p class="font-medium">
              You just need to <span class="text-black">subscribe</span> to the
              <span class="text-black">BrunoPlay</span> channel
            </p>

            <div class="mt-2 text-base flex justify-between items-center">
              <button
                type="button"
                class="w-[49%] rounded-full bg-sky-500 px-8 py-1 text-white font-bold"
              >
                Complete
              </button>

              <button
                type="button"
                class="w-[49%] rounded-full bg-white px-8 py-1 text-black font-bold"
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
