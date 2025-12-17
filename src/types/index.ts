export interface ApiResponse<T> {
  success: boolean
  message: boolean
  data: T
}

export interface User {
  id: number
  telegramId: string
  username?: string | null
  firstName?: string | null
  lastName?: string | null
  languageCode?: string | null
  isBot: boolean
  createdAt: string
  updatedAt: string
  totalCoins: number
  coins: number
  level: number
  miningRate: number
  referredById: number | null
  referredBy?: User | null
  referrals?: User[]
  rewardedLevels: string
  referralEarnings: number
  lastMiningTick: string | null
  isMining: boolean
  tempCoins: number
  vaultCapacity: number
  currentHealth: number
  maxHealth: number
  currentEnergy: number
  maxEnergy: number
  healthPerSecond: number
  energyPerSecond: number
  vaultLevel: number
  miningRateLevel: number
  energyLevel: number
  healthLevel: number
  lastWheelSpin: string | null
  // withdrawals: Withdrawal[]
}
