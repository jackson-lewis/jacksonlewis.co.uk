/**
 * Split Journey
 * 
 * Introduction section on the home page.
 */
import React from "react"
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline } from "./styles/Functions"
import { SiteSection, SiteContainer } from "./SiteLayout"
import StyledLink from "./Link"


const StyledSiteSection = styled( SiteSection )`
    margin-bottom: 100px;
    padding: 80px 0;
    padding-right: calc( var( --site-margin ) * 2 );
    position: relative;
    z-index: 40;

    background-color: var( --dark-grey );

    @media ${ minWidth.as( 667 ) } {
        padding-right: var( --site-margin );
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    @media ${ minWidth.as( 667 ) } {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
    }
`

/**
 * Displays the content of the component
 */
const TextBlock = styled.div`
    max-width: 26rem;
    
    font-size: 1.1rem;

    p {
        font-weight: 700;
        color: var( --dark-white );
    }

    :first-child {
        margin-bottom: 2rem;
        
        @media ${ minWidth.as( 667 ) } {
            margin-bottom: 0;
        }
    }

    p:last-of-type {
        margin-bottom: 0;
    }
`


const SplitJourney = () => {

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                <TextBlock>
                    <p>An ever-growing developer, dabbling at both an agency and as a freelancer. Striving to make the web a faster and more enjoyable space.</p>
                </TextBlock>
                <TextBlock>
                    <p>Don't be alarmed, but I also love not working, whether I'm cleaning my beloved car or exploring the outdoors. Either way, I'll be far from the screen.</p>
                </TextBlock>
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

export default SplitJourney
