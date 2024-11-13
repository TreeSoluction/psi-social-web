import type { ILoginResult } from '@/interfaces/ILoginResult'
import Cookies from 'js-cookie'

export function SaveCookieData(data: any, name: string) {
  Cookies.set(name, data)
}

export function SaveUserData(data: ILoginResult) {
  Cookies.set('token', data.token)
  Cookies.set('userdata', JSON.stringify({ name: data.name, id: data.id }))
}

export function GetCookie(name: string): string | undefined {
  return Cookies.get(name)
}
