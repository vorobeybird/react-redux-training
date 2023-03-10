import React from 'react'
import {Link} from "react-router-dom";
import './styles.scss'

type UserType = {
  id: number
  name: string
  email: string
  phone: string
  website: string
  city: string
  street: string
  zipcode: string
}

const User = (props: UserType) => {
  const {
    id,
    name,
    email,
    phone,
    website,
    city,
    street,
    zipcode
  } = props

  const phoneRestrict = phone.length > 15 ? `${phone.slice(0, 15)}...` : phone

  return (
    <Link to={`/users/${id}`} key={id} className="df-center">
      <tr className="tableRow__container">
        <td className="df-align-center">
          <div className="tableRow__ava-container">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="user ava"
              className="center-img"
            />
          </div>
          <div className="tableRow__user-info">
            <p>{name}</p>
            <span>{email}</span>
          </div>
        </td>
        <td>{phoneRestrict}</td>
        <td>{website}</td>
        <td>{city}</td>
        <td>{street}</td>
        <td>{zipcode}</td>
      </tr>
    </Link>
  )
}

export default React.memo(User)