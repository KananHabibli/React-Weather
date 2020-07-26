import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.div`
    background-color: #14bdee;
    text-align:center;
    text-transform: uppercase;
    font-size: 20px;
    padding: 20px;

    a{
        color: #fff;
        text-decoration: none;
        // height: inherit;
        padding: inherit;
    }

    a:hover{
        background-color: #fff;
        color:  #14bdee;
    }

`

const Navigation = props => {
    console.log('lmao')
    return (
        <Nav>
            <NavLink exact to="/">
                Home
            </NavLink>
        </Nav>
    )
}

export default Navigation
