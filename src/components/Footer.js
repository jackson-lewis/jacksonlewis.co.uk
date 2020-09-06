/**
 * Footer
 */
import React from "react"
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"
import { SiteContainer } from "./SiteLayout"


const StyledFooter = styled.footer`
    width: 100vw;
    margin-top: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    position: relative;    

    ::before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 300%;
        z-index: -1;

        background-image: linear-gradient( 180deg, var( --black ), transparent ),
                        radial-gradient( ellipse at bottom left, rgba( var( --secondary ), .3 ), transparent ),
                        radial-gradient( ellipse at bottom right, rgba( var( --primary ), .3 ), transparent );
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
