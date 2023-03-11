import { ActionsUserType } from './actions'
import { UserType } from '../../types/types'
import UserConstants from './constants.types'

type UserStateType = {
  user: UserType
}

const initialState = {
  user: {
    id: 0,
    name: '',
    email: '',
    phone: '',
    userName: '',
    website: '',
    address: {
      city: '',
      geo: {
        lat: '',
        lng: '',
      },
      street: '',
      suite: '',
      zipcode: '',
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
  },
}

const userReducer = (state: UserStateType = initialState, action: ActionsUserType) => {
  switch (action.type) {
    case UserConstants.Get_User:
      return {
        ...state,
        user: { ...action.payload.user },
      }

    case UserConstants.Clear_User_State:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default userReducer
