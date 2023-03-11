import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import usersReducer from './users/reducer'
import { ActionsUsersType } from './users/actions'
import userReducer from './user/reducer'
import { ActionsUserType } from './user/actions'

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
})

type AppStateType = ReturnType<typeof rootReducer>
export type GetAppStateType = () => AppStateType;
type AppActionsType = ActionsUsersType & ActionsUserType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
  AppStateType,
  unknown,
  AppActionsType>

export const reduxStore = configureStore({
  reducer: rootReducer,
})

type RootState = ReturnType<typeof reduxStore.getState>
type AppDispatch = typeof reduxStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
