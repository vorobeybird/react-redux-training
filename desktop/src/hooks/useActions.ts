import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { usersActions } from '../store/users/users.slice'
import { userActions } from '../store/user/user.slice'

const actions = {
  ...usersActions,
  ...userActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
