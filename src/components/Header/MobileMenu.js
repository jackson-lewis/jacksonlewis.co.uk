import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
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
const mobileMenuAppear = keyframes`
    from {
        opacity: 0;
        transform: scale( 0.5 ) translateY( -16px );
    }

    to {
        opacity: 1;
        transform: scale( 1 ) translateY( 0 );
    }
`

const mobileMenuActive = css`
    display: block;
    transform-origin: 100% 0%;
    animation-name: ${ mobileMenuAppear };
`

const StyledMobileMenuWrapper = styled.div`
    margin: var( --site-gutter ) var( --site-gutter ) 0;
    padding: 30px var( --site-margin );
    display: none;
    z-index: 20;

    background-color: var( --black );
    border: 1px solid var( --outline-color );
    border-radius: var( --border-radius );

    animation-duration: 300ms;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.24, 0.71, 0.51, 0.99);

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
