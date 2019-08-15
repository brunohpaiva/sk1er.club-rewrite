import axios, { AxiosRequestConfig } from "axios"
import { Player } from "./models/Player"

const BASE = "https://api.sk1er.club"

async function get<R = any>(
  url: string,
  config?: AxiosRequestConfig
): Promise<R> {
  const response = await axios.get<R>(url, config)
  return response.data
}

export interface GetPlayerResponse {
  success: boolean
  cause?: string
  player?: Player
  cache?: number
  cached?: boolean
}

export const getPlayer = async (player: string): Promise<GetPlayerResponse> => {
  const response = await get<GetPlayerResponse>(`${BASE}/player/${player}`)

  if (!response.success) {
    throw new Error(`API Error: ${response.cause}`)
  } else if (!response.player) {
    throw new Error(`Empty player object`)
  }

  return response
}
