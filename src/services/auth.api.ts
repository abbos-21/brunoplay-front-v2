import http from './http'

export interface AuthResponse {
  token: string
}

export const AuthAPI = {
  async loginWithTelegram(initData: string): Promise<AuthResponse> {
    return http.post('/auth', { initData })
  },
}
