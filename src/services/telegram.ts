import WebApp from '@twa-dev/sdk'

class TelegramService {
  private initialized = false

  init() {
    if (this.initialized) return

    WebApp.ready()
    if (WebApp.platform !== 'tdesktop') {
      WebApp.expand()
    }

    this.initialized = true
  }

  close() {
    WebApp.close()
  }

  get initData() {
    return WebApp.initData
  }

  get initDataUnsafe() {
    return WebApp.initDataUnsafe
  }

  get user() {
    return WebApp.initDataUnsafe?.user ?? null
  }

  get platform() {
    return WebApp.platform
  }

  isTelegram() {
    return Boolean(WebApp.initData)
  }
}

export const telegram = new TelegramService()
