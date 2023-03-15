import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import { UsersPage } from '../../pages'
import { useAppSelector } from '../../store/storeToolkit'
import { useLazyGetUsersQuery } from '../../services/users.api'
import { useActions } from '../../hooks/useActions'

const UsersPageContainer = () => {
  const { setUsers, cleatUsers } = useActions()

  const [fetchUsers, { isLoading: areUsersLoading, data: usersResponse }] = useLazyGetUsersQuery()
  const users = useAppSelector((state) => state.users.users)

  React.useEffect(() => {
    fetchUsers('')

    return () => {
      cleatUsers()
    }
  }, [])

  React.useEffect(() => {
    usersResponse && setUsers(usersResponse)
  }, [usersResponse])

  return (
    <div>
      {
        areUsersLoading
          ? <h1>Loading...</h1>
          : (
            <UsersPage
              users={users}
            />
          )
      }
    </div>
  )
}

export default React.memo(UsersPageContainer)
