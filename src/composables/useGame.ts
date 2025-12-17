import { ref, onUnmounted } from 'vue'
import { GameAPI } from '@/services/game.api'
import type { User } from '@/types'

const user = ref<User | null>(null)
let miningInterval: ReturnType<typeof setInterval> | null = null

const startMiningSimulation = () => {
  stopMiningSimulation()
  if (!user.value) return

  miningInterval = setInterval(() => {
    if (!user.value) return

    user.value.tempCoins += user.value.miningRate

    if (user.value.tempCoins >= user.value.vaultCapacity) {
      user.value.tempCoins = user.value.vaultCapacity
      stopMiningSimulation()
    }
  }, 1000)
}

const stopMiningSimulation = () => {
  if (miningInterval) clearInterval(miningInterval)
  miningInterval = null
}

export function useGame() {
  const sync = async () => {
    const response = await GameAPI.sync()
    user.value = response.data.user
    if (user.value.isMining) startMiningSimulation()
  }

  const mine = async () => {
    const response = await GameAPI.mine()
    if (response.success) {
      startMiningSimulation()
    }
    return
  }

  const collect = async () => {
    const response = await GameAPI.collect()
    user.value = response.data.user
    if (user.value.isMining) startMiningSimulation()
  }

  onUnmounted(stopMiningSimulation)

  return {
    sync,
    mine,
    collect,
    user,
  }
}
