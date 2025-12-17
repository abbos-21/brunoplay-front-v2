import type { ApiResponse, User } from '@/types'
import http from './http'

export interface GameSyncResponse {
  user: User
}

export interface GameMineResponse {
  user: User
}

export interface GameCollectResponse {
  user: User
  coinsCollected: number
}

export const GameAPI = {
  async sync(): Promise<ApiResponse<GameSyncResponse>> {
    return http.post('/game/sync')
  },
  async mine(): Promise<ApiResponse<GameMineResponse>> {
    return http.post('/game/start-mining')
  },
  async collect(): Promise<ApiResponse<GameCollectResponse>> {
    return http.post('/game/start-mining')
  },
}
