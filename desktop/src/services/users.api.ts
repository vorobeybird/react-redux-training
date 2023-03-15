import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { UserType } from '../types/types'

export const usersApi = createApi({
  // field name in the store (redux devTools)
  reducerPath: 'users/api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  // send a request if we focus again on the page
  refetchOnFocus: false,
  endpoints: (build) => ({
    // TS Takes two parameters: first is response and second is type of params for request
    // query - GET
    // mutation - POST, PUT, DELETE, PATCH
    getUsers: build.query<Array<UserType>, string>({
      query: () => ({
        // here we can set many fields for response like url, params,
        url: 'users',
      }),
      // We can modify response
      transformResponse: (response: Array<UserType>) => response.slice(0, 5),
    }),
    // how to process a POST request
    createUser: build.mutation<any, void>({
      query: (body) => ({
        url: 'somePOSTrequest',
        method: 'POST',
        body,
      }),
    }),
  }),
})

// lazy - it means that we can make a request when we want (for example if we wanna get user
// but only when click to user from the user's list)
export const { useLazyGetUsersQuery, useCreateUserMutation } = usersApi
