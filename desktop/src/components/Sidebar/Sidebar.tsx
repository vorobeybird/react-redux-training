import React from 'react'
import { NavLink } from 'react-router-dom'

// COMPONENTS, RESOURCES, CONSTANTS
import { ASIDE_ROUTES } from '../../routers/navigation'
import './styles.scss'

const Sidebar = () => (
  <nav className="df-column-center navigation__container">
    {ASIDE_ROUTES.map((el) => (
      el.permission.concat('').includes('ALL')
        ? (
          <NavLink key={el.id} to={el.url} className="navigation__element">
            {el.title}
          </NavLink>
        )
        : ''
    ))}
  </nav>
)

export default Sidebar
