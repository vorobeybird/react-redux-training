import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import {UsersPage} from '../../pages'
import {UserType} from '../../types/types'

const UsersPageContainer = () => {
  const [users, setUsers] = React.useState<Array<UserType>>([])

  !users.length && fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json))

  return (
    <UsersPage
      users={users}
    />
  )
}

export default React.memo(UsersPageContainer)