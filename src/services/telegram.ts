import WebApp from '@twa-dev/sdk'

export const telegram = {
  initData: WebApp.initData,
  initDataUnsafe: WebApp.initDataUnsafe,
  user: WebApp.initDataUnsafe.user,
  platform: WebApp.platform,
}
