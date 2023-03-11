import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import { UsersPage } from '../../pages'
import { useAppSelector } from '../../store/store'
import useFetching from '../../hooks/useFetching'
import { useActions } from '../../hooks/useActions'

const UsersPageContainer = () => {
  const action = useActions()
  const [fetchUsers, isLoading, error] = useFetching(() => action.getUsersTC(), () => { console.log('Callback COMPLETED') })
  const users = useAppSelector((state) => state.users.users)

  React.useEffect(() => {
    fetchUsers()

    return () => {
      action.clearUsersStateAC()
    }
  }, [])

  return (
    <UsersPage
      users={users}
    />
  )
}

export default React.memo(UsersPageContainer)
