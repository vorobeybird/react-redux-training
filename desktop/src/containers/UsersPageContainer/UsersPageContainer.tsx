import React from 'react'

//COMPONENTS, RESOURCES, CONSTANTS
import { UsersPage } from '../../pages'
import { UserType } from '../../types/types'
import WrapperHoc from '../../components/WrapperHoc'

const UsersPageContainer = () => {
  const [users, setUsers] = React.useState<Array<UserType>>([])

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json))

  return (
    <WrapperHoc>
      <UsersPage
        users={users}
      />
    </WrapperHoc>
  )
}

export default UsersPageContainer
