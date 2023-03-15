import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { UserType } from '../types/types'

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  refetchOnFocus: false,
  endpoints: (build) => ({
    getUser: build.query<UserType, string>({
      query: (id: string) => ({
        url: 'users',
        params: {
          id,
        },
      }),
      transformResponse: (response: Array<UserType>) => response[0],
    }),
  }),
})

// lazy - it means that we can make a request when we want (for example if we wanna get user
// but only when click to user from the user's list)
export const { useLazyGetUserQuery, useGetUserQuery } = userApi
