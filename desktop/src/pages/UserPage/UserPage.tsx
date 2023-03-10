import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

// COMPONENTS, RESOURCES, CONSTANTS
import { UserType } from '../../types/types'

const UserPage = () => {
  // work with params
  const { id } = useParams()
  // work with navigation
  const navigate = useNavigate()
  // work with location
  const location = useLocation()

  const [user, setUser] = React.useState<UserType>()

  !user && fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response) => response.json())
    .then((json) => { setUser(json[0]) })

  const goToHomePage = () => () => {
    navigate('/')
  }

  return (
    <div>
      <p className="margin-right-10">
        Name:
        {user?.name}
      </p>
      <p>
        City:
        {user?.address.city}
      </p>
      <button type="button" onClick={goToHomePage()}>HomePage</button>
    </div>
  )
}

export default React.memo(UserPage)
