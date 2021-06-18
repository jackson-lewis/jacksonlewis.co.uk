import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


const StyledMenuLink = styled( Link )`
    padding: 6px;
    display: inline-block;

    line-height: 1;
    text-decoration: none;
    color: inherit;
    border-radius: 4px;

    transition: 150ms;
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
                    background-color: rgba( 250, 250, 250, .1 );
                    backdrop-filter: blur( 2px ) saturate( 90% );
                }
            }
        }
    }
`

export default function MainMenu() {
    return (
        <StyledNav>
            <ul role="menu">
                <li role="none"><StyledMenuLink to="/projects" role="menuitem">Projects</StyledMenuLink></li>
                <li role="none"><StyledMenuLink to="/life" role="menuitem">Life</StyledMenuLink></li>
                <li role="none"><StyledMenuLink to="/contact" role="menuitem">Contact</StyledMenuLink></li>
            </ul>
        </StyledNav>
    )
}
