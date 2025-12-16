<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  WithdrawImage,
  CoinImage,
  UnitedKingdomFlagImage,
  MusicImage,
  CollectButtonImage,
  SpinImage,
  IceImage,
  PodiumImage,
} from '@/assets/images'
import EnergyLevel from '@/components/EnergyLevel.vue'
import HealthLevel from '@/components/HealthLevel.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <div class="bg-level-2 w-full h-full bg-cover bg-center bg-no-repeat p-2 relative">
    <div class="flex justify-between items-start">
      <div class="flex flex-col gap-2 items-start">
        <RouterLink
          to="/"
          class="flex gap-2 items-center rounded-full bg-sky-400 px-2 py-1 border-4 border-sky-200"
        >
          <img :src="CoinImage" class="w-5 h-5" alt="coin-image" />
          <div class="text-center">
            <p class="font-bold text-sm">34923.123</p>
            <p class="text-[10px] font-bold text-gray-500">= 0.4 TON</p>
          </div>
          <img :src="WithdrawImage" class="w-5 h-5" alt="withdraw-image" />
        </RouterLink>

        <RouterLink to="/" class="flex flex-col items-center gap-1">
          <img :src="PodiumImage" class="w-8" alt="podium-image" />

          <span class="bg-[#00C5A6] text-white text-[10px] font-bold px-1 py-px rounded-md"
            >29d 10h 54m 53s</span
          >
        </RouterLink>
      </div>

      <div class="flex flex-col gap-2 items-end">
        <div class="text-center rounded-full bg-sky-400 px-2 py-1 border-4 border-sky-200">
          <p class="text-sm font-bold">Your level: 1</p>
        </div>

        <div
          class="w-10 h-10 flex justify-center items-center rounded-full bg-sky-400 border-4 border-sky-200"
        >
          <img :src="UnitedKingdomFlagImage" class="w-5 h-5" alt="united-kingdom-flag-image" />
        </div>

        <button type="button" class="w-8 h-8 relative music-button music-disabled">
          <img :src="MusicImage" class="w-full h-full" alt="united-kingdom-flag-image" />

          <div class="absolute inset-0 flex items-center justify-center">
            <div class="diagonal-line"></div>
          </div>
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center mt-4">
      <ProgressBar :current-value="75" :max-value="100" class="w-40" />
    </div>

    <div
      class="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center w-full px-2"
    >
      <HealthLevel :current-value="75" :max-value="100" />
      <EnergyLevel :current-value="75" :max-value="100" />
    </div>

    <div class="absolute inset-x-0 mx-auto bottom-25 flex justify-between items-start px-2">
      <button type="button">
        <img :src="IceImage" class="w-8" alt="ice-image" />
      </button>
      <button type="button" class="collect-button">
        <img :src="CollectButtonImage" class="w-full" alt="collect-button-image" />
      </button>
      <button type="button">
        <img :src="SpinImage" class="w-8" alt="spin-image" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.music-button {
  transition: opacity 0.2s ease;
}
.music-disabled {
  opacity: 0.7;
}
.diagonal-line {
  width: 45px;
  height: 1.5px;
  background-color: #ff0000;
  transform: rotate(45deg);
}

.collect-button {
  width: 160px;
}

@media screen and (max-width: 425px) {
  .collect-button {
    width: 160px;
  }
}

@media screen and (max-width: 375px) {
  .collect-button {
    width: 144px;
  }
}

@media screen and (max-width: 320px) {
  .collect-button {
    width: 128px;
  }
}
</style>
