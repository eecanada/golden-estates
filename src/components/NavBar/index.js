import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavBar = () =>{
    return(
        <div className='Nav'>
            <div className="Nav-Header">
                <div className="Nav-Left">
                    <NavLink to={ROUTES.HOME}>Golden Estates</NavLink>
                </div>
                <div className='Nav-Center'>

                </div>
                <div className='Nav-Right'>
                    <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                    <NavLink to={ROUTES.SIGN_UP}>Signup</NavLink>
                    <NavLink to={ROUTES.LISTINGS}>Listings</NavLink> 
                    <NavLink to={ROUTES.SEARCH}>Search Homes</NavLink> 
                    <NavLink to={ROUTES.EDIT}>Edit User</NavLink> 
                </div>
            </div>
        </div>
    )
}

export default NavBar