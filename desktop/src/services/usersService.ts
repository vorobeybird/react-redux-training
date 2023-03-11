import { $host } from './apiService'
import { UserType } from '../types/types'
import { generateQueryString } from '../utils/generateQueryString'

export const getUsers = async () => {
  const { data } = await $host.get<Array<UserType>>('users')

  return data
}

export const getUser = async (id: string) => {
  const { data } = await $host.get<Array<UserType>>(`users/${generateQueryString({ id })}`)

  return data
}
