import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'


const StyledLogo = styled( Link )`
    font-family: var( --sans-font );
    font-weight: 200;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
`

export const LogoGlobalStyle = createGlobalStyle`
    body:not(.home):not(.page-life) {
        ${ StyledLogo } {
            transition: color 150ms;

            :hover {
                color: var( --primary );
            }
        }
    }
`

export default StyledLogo
