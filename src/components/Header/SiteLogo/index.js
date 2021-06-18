import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'


const SiteLogo = styled( Link )`
    font-family: var( --sans-font );
    font-weight: 200;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
`

export const LogoGlobalStyle = createGlobalStyle`
    body:not(.home):not(.page-life) {
        ${ SiteLogo } {
            transition: color 150ms;

            :hover {
                color: var( --primary );
            }
        }
    }
`

export default SiteLogo
