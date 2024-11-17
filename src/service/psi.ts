import type { ILoginResult } from '@/interfaces/ILoginResult'
import { API_URL } from '../enviroments/enviroment'
import { GetCookie, SaveUserData } from './cookie'
import type { IUserData } from '@/interfaces/IUserData'

export const psiRegister = async (formData: any) => {
  try {
    const token = GetCookie('token')

    if (!token) {
      throw new Error('dont have token')
    }

    const userData = GetCookie('userdata')

    if (!userData) {
      throw new Error('dont have userdata')
    }

    const response = await fetch(API_URL + '/psi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        psi: {
          crp: formData.value.crp,
          cnpj: formData.value.cnpj,
          image: formData.value.image,
          user_id: (JSON.parse(userData) as IUserData).id,
        },
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form data')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error submitting form data:', error)
    throw error
  }
}
export const verifyHavePsi = async () => {
  try {
    const userCookie = GetCookie('userdata')
    const bearerToken = GetCookie('token')
    if (userCookie === undefined) throw new Error('User are not logged')
    if (bearerToken === undefined) throw new Error('User are not logged')
    const userData = JSON.parse(userCookie) as ILoginResult

    const response = await fetch(API_URL + '/psi/have/' + userData.id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      },
    })

    if (response.status != 200) {
      throw new Error('Request error')
    }

    const data = await response.json()
    return data
  } catch (error) {
    return undefined
  }
}
