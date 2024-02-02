import { type InjectionKey, ref, computed, inject, reactive } from 'vue'
import { get, useStorage } from '@vueuse/core'

export const sessionSymbol: InjectionKey<sessionData> = Symbol()
export interface sessionData {
  token: string
  user: string
  isLoggedIn: boolean
  userRole: Array<any>
  cartItems: Object
}
export function initSession(){
  const token = useStorage('token', '')
  const user = useStorage('user', '')
  const isLoggedIn = computed(() => token.value !== '')
  const userRole = useStorage('user_role', [])
  const cartItems = useStorage('pre_cart', [])


  return reactive({
    token,
    user,
    isLoggedIn,
    userRole,
    cartItems,
  })
}

export default function useSession() {
  const userSession = inject(sessionSymbol)
  if (!userSession) {
    throw new Error('Session not injected')
  }
  return userSession
}