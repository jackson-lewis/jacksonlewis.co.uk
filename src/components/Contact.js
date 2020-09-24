/**
 * Contact page content
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SiteContainer } from "./SiteLayout"
import StyledLink from "./Link"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline, pseudoRequired } from "./styles/Functions"


const StyledWrapper = styled.div`
    width: 100vw;
    min-height: calc( 100vh - 151px );
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
    
    :not(:last-child) {
        position: relative;

        ::after {
            ${ pseudoRequired() }
            width: 100%;
            height: 1px;
            bottom: -${ getBaseline( 1.5 ) };
            right: 0;
    
            background-color: var( --white );
            opacity: 0.7;
        }
    }

    :last-child {
        margin-bottom: 0;
    }

    h1 {
        margin-bottom: ${ getBaseline( .25 ) };
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
        padding: 10px 0;
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
`


const ContactContent = () => {

    /**
     * The opening content to a column, excluding the lead column
     */
    const ColumnCaption = ({ children }) => <StyledColumnCaption>{ children }</StyledColumnCaption>

    ColumnCaption.propTypes = {
        children: PropTypes.node.isRequired
    }

    /**
     * A page column
     */
    const PageColumn = ({ children }) => (
        <StyledPageColumn>
            { children }
        </StyledPageColumn>
    )

    PageColumn.propTypes = {
        children: PropTypes.node.isRequired
    }

    return (
        <StyledWrapper>
            <StyledSiteContainer>
                <PageColumn>
                    <h1>Contact</h1>
                    <ColumnCaption>I will not bite, probably...</ColumnCaption>
                </PageColumn>
                <PageColumn>
                    <ColumnCaption>You can find me at all these places on the web.</ColumnCaption>
                    <StyledLink to="https://github.com/jackson-lewis" type="text" ext>GitHub</StyledLink>
                    <br />
                    <StyledLink to="https://www.linkedin.com/in/jacksonrlewis/" type="text" ext>LinkedIn</StyledLink>
                    <br />
                    <StyledLink to="https://twitter.com/jacksonrlewis" type="text" ext>Twitter</StyledLink>
                </PageColumn>
                <PageColumn>
                    <ColumnCaption>Have a project? Let’s see if we can work together on it.</ColumnCaption>
                    <StyledLink to="mailto:hello@jacksonlewis.co.uk" ext>hello@jacksonlewis.co.uk</StyledLink>
                </PageColumn>
            </StyledSiteContainer>
        </StyledWrapper>
    )
}

export default ContactContent
