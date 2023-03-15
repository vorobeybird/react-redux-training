import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersReducer } from './users/users.slice'
import { userReducer } from './user/user.slice'
import { usersApi } from '../services/users.api'
import { userApi } from '../services/user.api'

export const reduxStore = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(usersApi.middleware)
    .concat(userApi.middleware),
})

setupListeners(reduxStore.dispatch)

type RootState = ReturnType<typeof reduxStore.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
