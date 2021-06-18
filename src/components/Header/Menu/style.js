import { Link } from 'gatsby'
import styled from 'styled-components'


export const MenuLink = styled( Link )`
    padding: 6px;
    display: inline-block;

    line-height: 1;
    text-decoration: none;
    color: inherit;
    border-radius: 4px;

    transition: 150ms;
`

export const Nav = styled.nav`
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
            
            a {
                :hover {
                    background-color: rgba( 250, 250, 250, .1 );
                    backdrop-filter: blur( 2px ) saturate( 90% );
                }
            }
        }
    }
`