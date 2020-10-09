import React from 'react'
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
        display: flex;

        li {
            text-transform: uppercase;
            letter-spacing: .1rem;

            :not(:last-child) {
                margin-right: 24px;
            }
            
            ${ StyledMenuLink } {
                :hover {
                    text-decoration: underline;
                }
            }
        }
    }
`

const MainMenu = () => {
    return (
        <StyledNav>
            <ul role="menu">
                <li role="menuitem"><StyledMenuLink to="/projects">Projects</StyledMenuLink></li>
                <li role="menuitem"><StyledMenuLink to="/life">Life</StyledMenuLink></li>
                <li role="menuitem"><StyledMenuLink to="/contact">Contact</StyledMenuLink></li>
            </ul>
        </StyledNav>
    )
}

export default MainMenu
