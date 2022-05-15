import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Nav, MenuLink } from './style'


export default function MobileMenu({ isToggled }) {
    return (
        <Wrapper isToggled={ isToggled }>
            <Nav>
                <ul role="menu">
                    <li role="menuitem">
                        <MenuLink to="/work">Work</MenuLink>
                    </li>
                    <li role="menuitem">
                        <MenuLink to="/life">Life</MenuLink>
                    </li>
                    <li role="menuitem">
                        <MenuLink to="/contact">Contact</MenuLink>
                    </li>
                </ul>
            </Nav>
        </Wrapper>
    )
}

MobileMenu.propTypes = {
    isToggled: PropTypes.bool.isRequired
}
