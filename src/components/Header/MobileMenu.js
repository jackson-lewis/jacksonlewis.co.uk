import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { minWidth } from '@styles/MediaQueries'


const StyledMenuLink = styled( Link )`
    padding: 6px 0;
    display: inline-block;

    text-decoration: none;
    color: inherit;
`

const StyledNav = styled.nav`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        @media ${ minWidth.medium } {
            grid-column: 2;
        }

        li {

            :not(:last-child) {
                margin-bottom: 8px;
            }
            
            ${ StyledMenuLink } {
                :hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

/**
 * Styling applied when the mobile menu is active
 */
const mobileMenuActive = css`
    display: block;
`

const StyledMobileMenuWrapper = styled.div`
    width: 100%;
    padding: 30px var( --site-margin );
    display: none;
    z-index: 20;

    ${ ({ isToggled }) => isToggled ? mobileMenuActive : null }
`

const MobileMenu = ({ isToggled }) => {
    return (
        <StyledMobileMenuWrapper isToggled={ isToggled }>
            <StyledNav>
                <ul role="menu">
                    <li role="menuitem"><StyledMenuLink to="/projects">Projects</StyledMenuLink></li>
                    <li role="menuitem"><StyledMenuLink to="/life">Life</StyledMenuLink></li>
                    <li role="menuitem"><StyledMenuLink to="/contact">Contact</StyledMenuLink></li>
                </ul>
            </StyledNav>
        </StyledMobileMenuWrapper>
    )
}

MobileMenu.propTypes = {
    isToggled: PropTypes.bool.isRequired
}


export default MobileMenu
