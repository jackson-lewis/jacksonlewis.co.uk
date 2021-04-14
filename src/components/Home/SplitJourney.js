/**
 * Split Journey
 * 
 * Introduction section on the home page.
 */
import React from "react"
import styled from "styled-components"
import { Link } from 'gatsby'
import { minWidth } from "../styles/MediaQueries"
import { getBaseline } from "../styles/Functions"
import { colors } from '../styles/Variables'
import { SiteSection, SiteContainer } from "../Global/SiteLayout"


const StyledSiteSection = styled( SiteSection )`
    margin-bottom: 100px;
    padding-top: 80px;
    padding-bottom: 80px;
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
    }
`

/**
 * Displays the content of the component
 */
const TextBlock = styled.div`
    max-width: 26em;
    
    font-size: 1.25rem;

    p {
        font-weight: 600;
        color: var( --dark-white );
    }

    :first-child {
        margin-bottom: 80px;
        
        @media ${ minWidth.as( 667 ) } {
            margin-bottom: 0;
        }
    }

    p:last-child {
        margin-bottom: 0;
    }

    @media ${ minWidth.as( 667 ) } {
        padding-right: 30px;
    }
`

const arrow = color => encodeURIComponent( `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M9.31 6.71a.996.996 0 000 1.41L13.19 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z' fill='${ color }'/></svg>` )

const StyledLink = styled( Link )`
    padding: 8px 0;
    padding-right: 36px;
    position: relative;
    display: inline-block;

    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 1rem;
    color: ${ ({ color }) => colors[`${ color }Light`] };

    ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 5px;
        width: 30px;
        height: 100%;
        transform: translateX( 0 );

        background-image: url( "data:image/svg+xml,${ props => arrow( colors[ props.color ] ) }" );
        background-repeat: no-repeat;
        background-position: 50% 52%;
        background-size: 100% auto;

        transition: transform 150ms ease-out;
    }

    transition: color 150ms;

    :hover {
        color: ${ ({ color }) => colors[ color ] };

        ::after {
            transform: translateX( 4px );
        }
    }
`


const SplitJourney = () => {

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                <TextBlock>
                    <p>An ever-growing developer, dabbling at both an agency and as a freelancer. Striving to make the web a faster and more enjoyable place.</p>
                    <StyledLink to="/projects" color="secondary">Projects</StyledLink>
                </TextBlock>
                <TextBlock>
                    <p>Don't be alarmed, but I also love not working, whether I'm cleaning my beloved car or exploring the outdoors. Either way, I'll be far from the screen.</p>
                    <StyledLink to="/life" color="primary">Life</StyledLink>
                </TextBlock>
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

export default SplitJourney
