export function useBackgroundMusic(src: string) {
  const audio = new Audio(src)
  audio.loop = true
  audio.volume = 0.3

  const play = () => audio.play()
  const pause = () => audio.pause()

  return { play, pause, audio }
}
