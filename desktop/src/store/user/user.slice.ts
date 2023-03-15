import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../types/types'

type UserStateType = {
  user: UserType
}

const initialState: UserStateType = {
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
    cleaUser(state) {
      state.user = initialState.user
    },
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
