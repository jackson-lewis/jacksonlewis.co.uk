/**
 * Footer
 */
import React from "react"
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"
import { SiteContainer } from "./SiteLayout"


const StyledFooter = styled.footer`
    width: 100vw;
    margin-top: 100px;
    padding-left: var( --site-margin );
    padding-right: var( --site-margin );
    padding-bottom: 20px;
    position: relative;    

    color: var( --very-dark-white );

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

    @media ${ minWidth.medium } {
        & > div {
            display: flex;
            justify-content: space-between;
        }

        p {
            margin-bottom: 0;
        }
    }
`

const Footer = () => (
    <StyledFooter>
        <SiteContainer>
            <p>
                <a href="https://github.com/jackson-lewis">GitHub</a>
                { ' ' }
&mdash;
                <a href="https://twitter.com/jacksonrlewis">Twitter</a>
                { ' ' }
&mdash;
                { ' ' }
                <a href="https://www.linkedin.com/in/jacksonrlewis/">LinkedIn</a>
            </p>
            <p>
Built with
                { ' ' }
                <a href="https://www.gatsbyjs.org/">Gatsby</a>
, hosted on
                { ' ' }
                <a href="https://www.netlify.com/">Netlify</a>
.
            </p>
        </SiteContainer>
    </StyledFooter>
)

export default Footer
