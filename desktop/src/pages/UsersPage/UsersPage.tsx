import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import { Link } from 'react-router-dom'
import { UserType } from '../../types/types'
import './styles.scss'
import User from '../../components/User/User'

type UsersPageType = {
  users: Array<UserType>
}

const UsersPage = (props: UsersPageType) => {
  const {
    users,
  } = props

  return (
    <table className="table__container">
      <thead className="table__head-container">
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Website</th>
          <th>City</th>
          <th>Street</th>
          <th>Zipcode</th>
        </tr>
      </thead>
      <tbody className="df table__body-container">
        {
        users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id} className="df-center">
            <User
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={user.website}
              city={user.address.city}
              street={user.address.street}
              zipcode={user.address.zipcode}
            />
          </Link>
        ))
      }
      </tbody>
    </table>
  )
}

export default React.memo(UsersPage)
