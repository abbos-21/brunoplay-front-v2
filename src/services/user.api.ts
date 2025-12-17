import type { ApiResponse, User } from '@/types'
import http from './http'

export interface UserResponse {
  user: User
}

export const UserAPI = {
  async getCurrentUser(): Promise<ApiResponse<UserResponse>> {
    return http.post('/user/me')
  },
}
