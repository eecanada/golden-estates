import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'



const NavBar = () => {
  return (
    <div>
      <NavLink to={ROUTES.HOME}> home</NavLink>
      <NavLink to={ROUTES.LOGIN}> login </NavLink>
      <NavLink to={ROUTES.SIGN_UP}> signup </NavLink>
      <NavLink to={ROUTES.LISTING}> LISTING </NavLink>
    </div>
  )
}

export default NavBar