import styled from 'styled-components'
import { minWidth } from '@styles/MediaQueries'
import { SiteContainer } from '@components/Global/SiteLayout'


export const Socials = styled.p`
    font-size: 1rem;
    
    a {
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`


export const Container = styled( SiteContainer )`
    padding-top: 30px;
    border-top: 1px solid var( --outline-color );
`


export const StyledFooter = styled.footer`
    width: 100vw;
    padding-top: 100px;
    padding-left: var( --site-margin );
    padding-right: var( --site-margin );
    padding-bottom: 30px;
    position: relative;    
    z-index: 50;

    color: var( --very-dark-white );
    background-color: var( --body-color );

    a {
        color: inherit;
    }

    @media ${ minWidth.as( 667 ) } {
        & > div {
            display: flex;
            justify-content: space-between;
        }

        p {
            margin-bottom: 0;
        }
    }
`
