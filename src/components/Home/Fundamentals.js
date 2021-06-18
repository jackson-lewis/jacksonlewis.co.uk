/**
 * Split Journey
 * 
 * Introduction section on the home page.
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SiteSection, SiteContainer } from "../Global/SiteLayout"
import { minWidth } from "../styles/MediaQueries"
import { getBaseline } from "../styles/Functions"


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

    @media ${ minWidth.as( 667 ) } {
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
            background: linear-gradient( 45deg, #54d30a, #0ae4d9 );
            
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

    @media ${ minWidth.as( 667 ) } {
        margin: 0;
        
        :nth-child(-n+2) {
            margin-bottom: 0;
        }
    }
`

/**
 * Displays the content of the component
 */
function Column({ heading, content }) {

    return (
        <StyledColumn>
            <h3>{ heading }</h3>
            <p>{ content }</p>
        </StyledColumn>
    )
}

Column.propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}


export default function Fundamentals() {

    return (
        <StyledSiteSection>
            <SiteContainer>
                <StyledBlockBefore>
                    <h2>A developer of many tales</h2>
                </StyledBlockBefore>
                <StyledColumns>
                    <Column heading="Performance" content="My bread and butter, creating solutions to every possible performance issue, includes leading the rollout of company-wide standards." />
                    <Column heading="Experience" content="User Experience has always been at the forefront of many decisions, and now I'm starting to think about Developer Experience too." />
                    <Column heading="Design" content="From a young age, I've had an eye for things that look nice, so I like to think I know what I'm doing when it comes to the aesthetics." />
                </StyledColumns>
            </SiteContainer>
        </StyledSiteSection>
    )
}
