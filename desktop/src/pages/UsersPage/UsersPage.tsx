import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import {Link} from 'react-router-dom'
import {UserType} from '../../types/types'

type UsersPageType = {
  users: Array<UserType>
}

const UsersPage = (props: UsersPageType) => {
  const {
    users,
  } = props

  return (
    <ul>
      {
        users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="df-center">
            <p className="margin-right-15">
              <span className="margin-right-5">Name:</span>
              {user.name}
            </p>
            <p>
              <span className="margin-right-5">Email:</span>
              {user.email}
            </p>
          </Link>
        ))
      }
    </ul>
  )
}

export default React.memo(UsersPage)
