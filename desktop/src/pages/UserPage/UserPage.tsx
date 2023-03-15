import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// COMPONENTS, RESOURCES, CONSTANTS
import './styles.scss'
import { useAppSelector } from '../../store/storeToolkit'
import { useGetUserQuery } from '../../services/user.api'
import { useActions } from '../../hooks/useActions'

const UserPage = () => {
  const { setUser, cleaUser } = useActions()
  // work with params
  const { id } = useParams()
  // work with navigation
  const navigate = useNavigate()

  const user = useAppSelector((state) => state.user.user)
  const {
    isLoading, data: userData, isError, error,
  } = useGetUserQuery(id ?? '', {
    skip: id === '2',
  })

  React.useEffect(() => {
    userData && setUser(userData)

    return () => {
      cleaUser()
    }
  }, [userData])

  const goToHomePage = () => () => navigate('/')

  return (
    <div className="user__container df-column-center">
      {
        isError
          ? (
            <div>
              Error:
              {JSON.stringify(error)}
            </div>
          )
          : (
            <>
              <div className="user__ava-container margin-btm-15">
                {
                isLoading
                  ? <p>Loading...</p>
                  : (
                    <img
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="user ava"
                      className="center-img"
                    />
                  )
              }
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
            </>
          )
      }
    </div>
  )
}

export default React.memo(UserPage)
