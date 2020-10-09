/**
 * Footer
 */
import React from "react"
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"
import { SiteContainer } from "./SiteLayout"


const StyledSiteContainer = styled( SiteContainer )`
    padding-top: 30px;
    border-top: 1px solid var( --outline-color );
`

const StyledFooter = styled.footer`
    width: 100vw;
    padding-top: 100px;
    padding-left: var( --site-margin );
    padding-right: var( --site-margin );
    padding-bottom: 30px;
    position: relative;    
    z-index: 50;

    color: var( --very-dark-white );
    background-color: var( --body-color );

    ::before {
        content: '';
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200%;
        z-index: -1;

        background-image: linear-gradient( 180deg, var( --black ), transparent ),
                        radial-gradient( ellipse at bottom left, var( --secondary ), transparent ),
                        radial-gradient( ellipse at bottom right, var( --primary ), transparent );
    }

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

const StyledSocials = styled.p`
    a {
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`

const Footer = () => (
    <StyledFooter>
        <StyledSiteContainer>
            <StyledSocials>
                <a href="https://github.com/jackson-lewis">GitHub</a>
                &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                <a href="https://twitter.com/jacksonrlewis">Twitter</a>
                &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/jacksonrlewis/">LinkedIn</a>
            </StyledSocials>
            <p>
Built with
                { ' ' }
                <a href="https://www.gatsbyjs.org/">Gatsby</a>
, hosted on
                { ' ' }
                <a href="https://www.netlify.com/">Netlify</a>
            </p>
        </StyledSiteContainer>
    </StyledFooter>
)

export default Footer
