/**
 * Master Hero
 */
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled, { css, keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { SiteContainer } from '@components/Global/SiteLayout'
import useViewportWidth from "../../utils/useViewportWidth"
import { useParallax } from "../../effects/parallax"
import { minWidth } from '../styles/MediaQueries'
import { getBaseline } from '../styles/Functions'


const heroHeight = css`
    min-height: calc( 300px + ${ getBaseline( 2 ) } + var( --header-height ) );
    height: 80vh;
    max-height: 600px;

    @media ${ minWidth.large } {
        max-height: 660px;
    }
`

const StyledHeroHolder = styled.div`
    width: 100%;
    ${ heroHeight }
    position: relative;
`

const StyledHero = styled.div`
    width: 100%;
    ${ heroHeight }
    margin-bottom: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
`

const StyledImg = styled( Img )`
    width: 100%;
    height: 100%;
`


const motion = keyframes`
    0% {
        transform: translateY(-50%) rotate(0deg);
    }

    20% {
        transform: translateY(-50%) rotate(160deg);
    }

    80% {
        transform: translateY(-50%) rotate(200deg);
    }

    100% {
        transform: translateY(-50%) rotate(360deg);
    }
`

const StyledHeroEffects = styled.div`
    width: 100%;
    height: 100%;
    padding: var( --header-height ) var( --site-margin ) 100px;
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    align-items: flex-end;

    background-image: linear-gradient( 270deg, rgba( 15, 0, 0, .75 ), rgba( 15, 0, 0, 0 ) );
    background-size: 100% 100%;
    background-position: center;
    

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: -12.5%;
        width: 125%;
        padding-top: 125%;

        background-image:   radial-gradient( ellipse at center right, rgba( 244, 28, 81, .8 ), rgba( 244, 28, 81, 0 ) ),
                            radial-gradient( ellipse at center left, rgba( 44, 133, 255, .8 ), rgba( 44, 133, 255, 0 ) );
        background-size: 100% 100%, 100% 100%;
        background-position:  0% 0%, 100% 100%;

        transform: translateY(-50%) rotate(0deg);

        animation: 20s ${ motion } linear;
        animation-iteration-count: infinite;
        animation-delay: 3s;
    }

    @media ${ minWidth.medium } {
        padding-bottom: 140px;
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    margin-bottom: 0;
`

const StyledContent = styled.div`
    max-width: 800px;
    
    color: var( --white );

    will-change: transform;
    transition: 50ms;

    @media ${ minWidth.as( 667 ) } {
        max-width: 55%;
        margin-left: auto;
        margin-bottom: 0;
    }

    @media ${ minWidth.medium } {
        max-width: 50%;
    }

    span {
        font-family: var( --sans-font );
        font-size: 1.5rem;
        font-weight: 300;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var( --pure-white );
    }

    h1 {
        margin-top: ${ getBaseline( .25 ) };

        color: rgba( 235, 235, 235, .8 );
        font-size: clamp( 1.875rem, 4vw, 3rem );
        line-height: 1.4;

        + p {
            font-size: 1.1rem;
        }
    }
`


export default function MasterHero({ children }) {
    const { isMobile } = useViewportWidth()

    const heroContentRef = useRef()
    const heroImageRef = useRef()

    useParallax( heroContentRef, -0.5, true )
    useParallax( heroImageRef, -0.25 )

    const query = useStaticQuery(
        graphql`
          query {
            mobile: file(relativePath: { eq: "mam_tor-walking-mobile.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 414, quality: 90, grayscale: true) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            large: file(relativePath: { eq: "mam_tor-walking.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 2880, quality: 90, grayscale: true) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
    )

    return (
        <StyledHeroHolder>
            <StyledHero>
                <div ref={ heroImageRef }>
                    { isMobile ? (
                        <StyledImg
                            fluid={ query.mobile.childImageSharp.fluid }
                            loading="eager"
                            className="mobile-variant"
                        />
                    ) : (
                        <StyledImg
                            fluid={ query.large.childImageSharp.fluid }
                            loading="eager"
                            className="large-variant"
                        />
                    ) }
                </div>
                <StyledHeroEffects>
                    <StyledSiteContainer>
                        <StyledContent ref={ heroContentRef }>
                            { children }
                        </StyledContent>
                    </StyledSiteContainer>
                </StyledHeroEffects>
            </StyledHero>
        </StyledHeroHolder>
    )
}
