/**
 * Contact page content
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SiteContainer } from "./Global/SiteLayout"
import StyledLink from "./Link"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline } from "./styles/Functions"


const StyledWrapper = styled.div`
    width: 100vw;
    min-height: calc( 100vh - 192px );
    padding: calc( var( --header-height ) + 2rem ) var( --site-margin ) 0;
    display: grid;
    align-items: center;
`

const StyledSiteContainer = styled( SiteContainer )`
    @media ${ minWidth.medium } {
        display: grid;
        grid-gap: ${ getBaseline( 3 ) } calc( var( --site-margin ) * 2 );
        grid-template: 'heading heading' auto 'col_2 col_3' auto / 1fr 1fr;
        align-items: flex-start;
    }

    @media ${ minWidth.large } {
        grid-gap: 0 calc( var( --site-margin ) * 4 );
        grid-template: 'heading col_2 col_3' auto / 1fr 1fr 1fr;
    }
`

const StyledPageColumn = styled.div`
    margin-bottom: ${ getBaseline( 3 ) };

    :first-child {
        p {
            font-weight: 700;
            font-size: 1.5rem;
            color: var( --dark-white );
        }
    }

    :not(:first-child) {
        ::before {
            content: '🤪';
            display: block;

            visibility: hidden;
            font-size: clamp( 3rem, 4vw, 4rem );
            line-height: 1.5;
        }
    }

    :last-child {
        margin-bottom: 0;
    }

    h1 {
        color: var( --primary );
    }

    a {
        width: auto;
        margin-bottom: 8px;
        display: inline-block;

        :last-child {
            margin-bottom: 0;
        }
    }   

    @media ${ minWidth.medium } {
        margin-bottom: 0;

        :nth-child(1) { grid-area: heading; }
        :nth-child(2) { grid-area: col_2; }
        :nth-child(3) { grid-area: col_3; }

        :nth-child(2) {
            ::after {
                display: none;
            }
        }
    }

    @media ${ minWidth.large } {
        align-self: stretch;

        :nth-child(2) {
            ::after {
                display: block;
            }
        }

        :not(:last-child) {
            ::after {
                display: block;
                width: 1px;
                height: 100%;
                right: calc( var( --site-margin ) * -2 );
                bottom: 0;
            }
        }
    }
`

const StyledColumnCaption = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`


/**
 * A page column
 */
function PageColumn({ children }) {
    return (
        <StyledPageColumn>
            { children }
        </StyledPageColumn>
    )
}

PageColumn.propTypes = {
    children: PropTypes.node.isRequired
}


export default function ContactContent() {

    return (
        <StyledWrapper>
            <StyledSiteContainer>
                <PageColumn>
                    <h1>Contact</h1>
                    <p>Whether you have a question or have a project that we could work together on, let’s get in touch!</p>
                </PageColumn>
                <PageColumn>
                    <StyledColumnCaption>Send me an email:</StyledColumnCaption>
                    <StyledLink to="mailto:hello@jacksonlewis.co.uk" type="text" ext>hello@jacksonlewis.co.uk</StyledLink>
                </PageColumn>
                <PageColumn>
                    <StyledColumnCaption>You’ll also find me on various platforms, take your pick!</StyledColumnCaption>
                    <StyledLink to="https://twitter.com/jacksonrlewis" type="text" ext>Twitter</StyledLink>
                    <br />
                    <StyledLink to="https://instagram.com/jacksonrlewis_" type="text" ext>Instagram</StyledLink>
                    <br />
                    <StyledLink to="https://www.linkedin.com/in/jacksonrlewis/" type="text" ext>LinkedIn</StyledLink>
                    <br />
                    <StyledLink to="https://github.com/jackson-lewis" type="text" ext>GitHub</StyledLink>
                </PageColumn>
            </StyledSiteContainer>
        </StyledWrapper>
    )
}
