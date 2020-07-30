import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav } from '../../assets/style/style'

const Navigation = props => {
    return (
        <Nav>
            <NavLink exact to="/">
                Home
            </NavLink>
        </Nav>
    )
}

export default Navigation
