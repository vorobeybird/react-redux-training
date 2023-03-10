import React from 'react'
import { Routes, Route } from 'react-router-dom'

// COMPONENTS, RESOURCES, CONSTANTS
import { ALL_ROUTES } from './common'

const Routing = () => {
  const isAuth = false

  const allLegalRoutes = ALL_ROUTES.filter((rt) => rt.isAuth === isAuth)

  return (
    <Routes>
      {allLegalRoutes.map((rt) => (
        <Route key={rt.id} path={rt.path} element={<rt.component />} />
      ))}
    </Routes>
  )
}

export default Routing
