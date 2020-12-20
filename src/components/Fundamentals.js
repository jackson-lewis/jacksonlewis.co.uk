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


const StyledSiteSection = styled( SiteSection )`
    position: relative;
`

const StyledBlockBefore = styled.div`
    margin-bottom: 50px;

    h2 {
        margin-bottom: ${ getBaseline( .5 ) };
    }
`

const StyledColumns = styled.div`
    padding-right: 2rem;

    @media ${ minWidth.medium } {
        display: grid;
        grid-template-columns: repeat( 3, 1fr );
        grid-gap: 5vw;
    }
`

const StyledColumn = styled.div`
    max-width: 18.125rem;

    :nth-child(-n+2) {
        margin-bottom: ${ getBaseline( 1.5 ) };
    }

    h3 {
        margin-bottom: ${ getBaseline( .25 ) };

        font-size: clamp( 1.4rem, 2vw, 1.8rem );
        background-image: linear-gradient( 45deg, #f12f0d, #e6d00d );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        ::selection {
            background: var( --white );
            color: var( --black );
        }
    }

    p {
        font-weight: 700;
        color: var( --dark-white );
    }

    :nth-child(2) {
        h3 {
            background: linear-gradient( 45deg, #0ae4d9, #54d30a );
            
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
                    <h2>What matters most</h2>
                </StyledBlockBefore>
                <StyledColumns>
                    <Column heading="Performance" content="My bread and butter, finding solutions to even the toughest performance bottlenecks." />
                    <Column heading="Experience" content="Design and User Experience have always mattered to me, and truly rewarding when perfected." />
                    <Column heading="Simple" content="Being an OCD freak has its perks as a dev, one being keeping on top of clean code practises religiously." />
                </StyledColumns>
            </SiteContainer>
        </StyledSiteSection>
    )
}

export default Fundamentals
