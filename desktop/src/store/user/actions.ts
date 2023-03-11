import { Dispatch } from 'redux'
import { UserType } from '../../types/types'
import { AppThunkType } from '../store'
import UserConstants from './constants.types'

// AC
const setUserAC = (user: UserType) => ({
  type: UserConstants.Get_User,
  payload: {
    user,
  },
})

export const clearUserStateAC = () => ({
  type: UserConstants.Clear_User_State,
})

// TYPES
type GetUserACType = ReturnType<typeof setUserAC>
type ClearUserACType = ReturnType<typeof clearUserStateAC>

export type ActionsUserType = GetUserACType & ClearUserACType

// TC
export const getUserTC = (id: string): AppThunkType => async (dispatch: Dispatch<ActionsUserType>) => {
  fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setUserAC(json[0]))
    })
}
