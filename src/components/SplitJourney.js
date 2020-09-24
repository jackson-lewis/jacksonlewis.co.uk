/**
 * Split Journey
 * 
 * Introduction section on the home page.
 */
import React from "react"
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"
import { SiteSection, SiteContainer } from "./SiteLayout"
import StyledLink from "./Link"


const StyledSiteSection = styled( SiteSection )`
    padding-right: calc( var( --site-margin ) * 2 );
    position: relative;
    z-index: 40;

    @media ${ minWidth.medium } {
        padding-right: var( --site-margin );
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    @media ${ minWidth.medium } {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 10vw;
    }
`

/**
 * Displays the content of the component
 */
const TextBlock = styled.div`
    max-width: 27.5rem;
    
    font-size: 1.1rem;

    :first-child {
        margin-bottom: 2rem;
        
        @media ${ minWidth.medium } {
            margin-bottom: 0;
            justify-self: flex-end;
            position: relative;

            text-align: right;

            &::after {
                content: '';
                display: block;
                position: absolute;

                width: 1px;
                height: calc( 100% + 13rem );
                top: -5rem;
                right: -5vw;

                background: linear-gradient( 180deg, transparent, var( --outline-color ) 33% );
            }
        }
    }
`


const SplitJourney = () => {

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                <TextBlock>
                    <p>An ever-growing developer, dabbling at both an agency and as a freelancer. Striving to make the web a faster and more enjoyable space.</p>
                    <StyledLink to="/projects" type="text">Projects</StyledLink>
                </TextBlock>
                <TextBlock>
                    <p>Don't be alarmed, but I also love not working, weather I'm cleaning my beloved car or exploring the outdoors. Either way, I'll be far away from the screen.</p>
                    <StyledLink to="/life" type="text">Life</StyledLink>
                </TextBlock>
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

export default SplitJourney
