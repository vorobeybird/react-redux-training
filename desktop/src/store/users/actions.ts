import { Dispatch } from 'redux'
import UsersConstants from './constants.types'
import { UserType } from '../../types/types'
import { AppThunkType, GetAppStateType } from '../store'

// AC
const setUsersAC = (users: Array<UserType>) => ({
  type: UsersConstants.Get_Users,
  payload: {
    users,
  },
})

export const clearUsersStateAC = () => ({
  type: UsersConstants.Clear_Users_State,
})

// TYPES
export type GetUsersACType = ReturnType<typeof setUsersAC>
export type clearUsersStateACType = ReturnType<typeof clearUsersStateAC>

export type ActionsUsersType = GetUsersACType & clearUsersStateACType

// TC
export const getUsersTC = (): AppThunkType => async (dispatch: Dispatch<ActionsUsersType>, getStore: GetAppStateType) => {
  const store = getStore().users.users[0].name
  // console.log('user name from store:', store)

  await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      dispatch(setUsersAC(json))
    })
}
