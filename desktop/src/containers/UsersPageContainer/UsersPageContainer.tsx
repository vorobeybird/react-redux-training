import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import { UsersPage } from '../../pages'
import { clearUsersStateAC, getUsersTC } from '../../store/users/actions'
import { useAppDispatch, useAppSelector } from '../../store/store'

const UsersPageContainer = () => {
  const dispatch = useAppDispatch()

  const users = useAppSelector((state) => state.users.users)

  React.useEffect(() => {
    dispatch(getUsersTC())

    return () => {
      dispatch(clearUsersStateAC())
    }
  }, [])

  return (
    <UsersPage
      users={users}
    />
  )
}

export default React.memo(UsersPageContainer)
