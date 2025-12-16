import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-level-1': "bg-[url('/src/assets/backgrounds/level-1.png')]",
    'bg-level-2': "bg-[url('/src/assets/backgrounds/level-2.png')]",
    'bg-teal-snow': "bg-[url('/src/assets/backgrounds/teal-snow.png')]",
    'bg-cyan-snow': "bg-[url('/src/assets/backgrounds/cyan-snow.png')]",
    'bg-leaderboard': "bg-[url('/src/assets/backgrounds/leaderboard.png')]",
    'bg-menu-item':
      "bg-[url('/src/assets/images/menu-item-background.png')] bg-contain bg-center bg-no-repeat",
    'bg-balance':
      "bg-[url('/src/assets/images/balance-background.png')] bg-contain bg-center bg-no-repeat",
    'bg-level': "bg-[url('/src/assets/images/level-background.png')]",
    'bg-language': "bg-[url('/src/assets/images/language-background.png')]",
    'bg-music': "bg-[url('/src/assets/images/music-background.png')]",
  },
})
