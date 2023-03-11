import { ActionsUsersType } from './actions'
import UsersConstants from './constants.types'
import { UserType } from '../../types/types'

type UsersStateType = {
  users: Array<UserType>
}

const initialState: UsersStateType = {
  users: [{
    id: 22,
    name: 'Ivan St',
    email: 'wegggg@gmail.com',
    phone: '233-2323-4444',
    userName: 'Steeee',
    website: 'github',
    address: {
      city: 'Wroclaw',
      geo: {
        lat: '',
        lng: '',
      },
      street: 'Prost',
      suite: '',
      zipcode: '233-222',
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: 'Self',
    },
  }],
}

const usersReducer = (state: UsersStateType = initialState, action: ActionsUsersType) => {
  switch (action.type) {
    case UsersConstants.Get_Users:
      return {
        ...state,
        users: [
          ...state.users,
          ...action.payload.users,
        ],
      }

    case UsersConstants.Clear_Users_State:
      return {
        ...initialState,
      }
    default:
      return state
  }
}

export default usersReducer
