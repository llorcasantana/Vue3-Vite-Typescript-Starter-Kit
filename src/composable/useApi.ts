import { type InjectionKey, inject } from 'vue'
import axios, { type AxiosInstance } from 'axios'

export const apiSymbol: InjectionKey<AxiosInstance> = Symbol()

export function initApi(session: any){
  const api = axios.create({
    baseURL: <string>import.meta.env.VITE_API_URL,
  })
  api.interceptors.request.use((config) => {
    if (session.token) {
      config.headers.Authorization = `Bearer ${session.token}`
    }

    return config
  })

  return api
}
export default function useApi() {
  const api = inject(apiSymbol)
  if (!api) {
    throw new Error('Api is not injected')
  }
  return api
}