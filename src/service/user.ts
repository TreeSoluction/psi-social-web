import type { ILoginResult } from '@/interfaces/ILoginResult'
import { API_URL } from '../enviroments/enviroment'
import { GetCookie, SaveUserData } from './cookie'

export const register = async (formData: any) => {
  try {
    console.log(
      JSON.stringify({
        user: {
          name: formData.value.name,
          email: formData.value.email,
          password: formData.value.password,
        },
      })
    )

    const response = await fetch(API_URL + '/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: formData.value }),
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

export const login = async (formData: any) => {
  try {
    console.log(
      JSON.stringify({
        email: formData.value.email,
        password: formData.value.password,
      })
    )

    const response = await fetch(API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.value.email,
        password: formData.value.password,
      }),
    })

    if (response.status != 200) {
      throw new Error('Failed to submit form data')
    }

    const data = (await response.json()) as ILoginResult
    SaveUserData(data)
    return data
  } catch (error) {
    return undefined
  }
}

export const getUserData = async () => {
  try {
    const userCookie = GetCookie('userdata')
    const bearerToken = GetCookie('token')
    if (userCookie === undefined) throw new Error('User are not logged')
    if (bearerToken === undefined) throw new Error('User are not logged')
    const userData = JSON.parse(userCookie) as ILoginResult

    const response = await fetch(API_URL + '/user/' + userData.id, {
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
