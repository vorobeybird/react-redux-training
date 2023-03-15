import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types/types'

type UsersStateType = {
  users: Array<UserType>
}

const initialState: UsersStateType = {
  users: [{
    id: 1,
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<Array<UserType>>) {
      state.users.push(...action.payload)
    },
    cleatUsers(state) {
      state.users = initialState.users
    },
  },
})

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer
