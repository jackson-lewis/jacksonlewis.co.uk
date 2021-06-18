import React from 'react'
import { Nav, MenuLink } from './style'


export default function Menu() {
    return (
        <Nav>
            <ul role="menu">
                <li role="none">
                    <MenuLink to="/projects" role="menuitem">Projects</MenuLink>
                </li>
                <li role="none">
                    <MenuLink to="/life" role="menuitem">Life</MenuLink>
                </li>
                <li role="none">
                    <MenuLink to="/contact" role="menuitem">Contact</MenuLink>
                </li>
            </ul>
        </Nav>
    )
}
