import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

// COMPONENTS, RESOURCES, CONSTANTS
import { useAppDispatch, useAppSelector } from '../../store/store'
import { clearUserStateAC, getUserTC } from '../../store/user/actions'
import './styles.scss'

const UserPage = () => {
  // work with params
  const { id } = useParams()
  // work with navigation
  const navigate = useNavigate()
  // work with location
  const location = useLocation()

  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.user.user)

  React.useEffect(() => {
    id && dispatch(getUserTC(id))

    return () => {
      dispatch(clearUserStateAC())
    }
  }, [])

  const goToHomePage = () => () => navigate('/')

  return (
    <div className="user__container df-column-center">
      <div className="user__ava-container margin-btm-15">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="user ava"
          className="center-img"
        />
      </div>
      <p className="margin-right-10 margin-btm-15">
        <span className="margin-right-10">Name:</span>
        {user?.name}
      </p>
      <p className="margin-btm-30">
        <span className="margin-right-10">City:</span>
        {user?.address?.city}
      </p>
      <button
        className="user_btn"
        type="button"
        onClick={goToHomePage()}
      >
        Home page
      </button>
    </div>
  )
}

export default React.memo(UserPage)
