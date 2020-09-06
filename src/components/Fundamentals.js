/**
 * Split Journey
 * 
 * Introduction section on the home page.
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SiteSection, SiteContainer } from "./SiteLayout"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline } from "./styles/Functions"
import StyledLink from "./Link"


const StyledSiteSection = styled( SiteSection )`
    position: relative;
    
    text-align: center;

    ::before,
    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX( -50% );
    }

    ::before {
        width: 16rem;
        height: 1px;
        top: -5rem;
        z-index: 5;

        background: linear-gradient( 90deg, var( --black ), var( --outline-color ), var( --black ) );
    }

    ::after {
        width: 9px;
        height: 9px;
        top: calc( -5rem + -4.5px );
        z-index: 10;

        border-radius: 10px;
        border: 1px solid var( --primary );
        background-color: var( --black );
    }

    @media ${ minWidth.medium } {
        ::before,
        ::after {
            display: none;
        }
    }
`

const StyledBlockBefore = styled.div`
    margin-bottom: ${ getBaseline( 2 ) };

    h2 {
        margin-bottom: ${ getBaseline( .5 ) };
    }

    @media ${ minWidth.medium } {
        margin-bottom: ${ getBaseline( 4 ) };
        position: relative;

        ::after {
            content: '';
            display: block;
            position: absolute;

            width: 1px;
            height: ${ getBaseline( 2 ) };
            bottom: -${ getBaseline() };
            left: calc( 50% - 0.5px );
            transform: translateY( 100% );

            background: var( --line-color );
        }
    }
`

const StyledBlockAfter = styled.div`
    margin-top: ${ getBaseline( 2 ) };
`

const StyledColumns = styled.div`
    padding: 0 2rem;

    @media ${ minWidth.medium } {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        grid-gap: 5vw;
    }
`

const StyledColumn = styled.div`
    max-width: 18.125rem;
    margin: auto;

    :nth-child(-n+2) {
        margin-bottom: ${ getBaseline( 1.5 ) };
    }

    h3 {
        margin-bottom: ${ getBaseline( .5 ) };

        background: linear-gradient( 45deg, #0ae4d9, #54d30a );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        ::selection {
            background: var( --white );
            color: var( --black );
        }
    }

    :nth-child(2) {
        h3 {
            background-image: linear-gradient( 45deg, #f12f0d, #e6d00d );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        justify-self: center;
    }

    :nth-child(3) {
        h3 {
            background: linear-gradient( 90deg, #3bc8ff, #ff00bf );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        justify-self: flex-end;
    }

    @media ${ minWidth.medium } {
        margin: 0;
        
        :nth-child(-n+2) {
            margin-bottom: 0;
        }
    }
`

const Fundamentals = () => {

    /**
     * Displays the content of the component
     */
    const Column = ({ heading, content }) => (
        <StyledColumn>
            <h3>{ heading }</h3>
            <p>{ content }</p>
        </StyledColumn>
    )

    Column.propTypes = {
        heading: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }

    return (
        <StyledSiteSection>
            <SiteContainer>
                <StyledBlockBefore>
                    <h2>What I care about</h2>
                    <p>It’s what I live and breathe.</p>
                </StyledBlockBefore>
                <StyledColumns>
                    <Column heading="Experience" content="Nothing is more valuable than understanding what people want, but giving it to them is even better." />
                    <Column heading="Performance" content="People are impatient. Knowing performance is a thing on the page as well as load." />
                    <Column heading="Simplicity" content="Following principles like DRY and KISS, keeps a codebase tidy and free of crap which is key to a projects success." />
                </StyledColumns>
                <StyledBlockAfter>
                    <StyledLink to="/core-values">My core values</StyledLink>
                </StyledBlockAfter>
            </SiteContainer>
        </StyledSiteSection>
    )
}

export default Fundamentals
