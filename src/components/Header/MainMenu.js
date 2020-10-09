import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { minWidth } from '@styles/MediaQueries'
import { colors } from '@components/styles/Variables'


const StyledMenuLink = styled( Link )`
    padding: 6px;
    display: inline-block;

    line-height: 1;
    text-decoration: none;
    color: inherit;
    border-radius: 4px;

    transition: 300ms;
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
                margin-right: 18px;
            }
            
            ${ StyledMenuLink } {
                :hover {
                    background-color: rgba( 250, 250, 250, .2 );
                    backdrop-filter: blur( 2px ) saturate( 90% );
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
