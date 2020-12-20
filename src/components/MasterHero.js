/**
 * Master Hero
 */
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { SiteContainer } from '@components/SiteLayout'
import { minWidth } from './styles/MediaQueries'
import { getBaseline } from './styles/Functions'


const StyledHeroHolder = styled.div`
    width: 100%;
    min-height: calc( 300px + ${ getBaseline( 2 ) } + var( --header-height ) );
    height: 80vh;
    max-height: 1000px;
    position: relative;
`

const StyledHero = styled.div`
    width: 100%;
    min-height: calc( 300px + ${ getBaseline( 2 ) } + var( --header-height ) );
    height: 80vh;
    max-height: 1000px;
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

const StyledHeroEffects = styled.div`
    width: 100%;
    height: 100%;
    padding: var( --header-height ) var( --site-margin ) 100px;
    position: absolute;
    left: 0;
    top: 0;
    display: grid;
    align-items: flex-end;

    background-image:   radial-gradient( ellipse at bottom right, rgba( 244, 28, 81, 1 ), rgba( 244, 28, 81, 0 ) ),
                        radial-gradient( ellipse at top left, rgba( 44, 133, 255, .9 ), rgba( 44, 133, 255, 0 ) ),
                        linear-gradient( 270deg, rgba( 15, 0, 0, .75 ), rgba( 15, 0, 0, 0 ) );
    background-size: 200% 200%, 200% 200%, 100% 100%;
    background-position: 75% 75%, 25% 25%, center;

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
    text-align: right;

    transition: 50ms;

    @media ${ minWidth.medium } {
        max-width: 50%;
        margin-left: auto;
        margin-bottom: 0;

        text-align: left;
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
        font-size: clamp( 1.6rem, 5vw, 3rem );
        line-height: 1.4;

        + p {
            font-size: 1.1rem;
        }
    }
`


const MasterHero = ({ children }) => {

    const heroContentRef = useRef()

    useEffect( () => {
        const parallaxHero = () => {

            const heroContent = heroContentRef.current

            const position = window.scrollY * -0.5
            const opacity = 1 - ( window.scrollY / 400 )

            heroContent.style.transform = `translateY(${ position }px)`
            heroContent.style.opacity = opacity
        }
        window.addEventListener( 'scroll', parallaxHero )

        return () => window.removeEventListener( 'scroll', parallaxHero )
    }, [] )

    const query = useStaticQuery(
        graphql`
          query {
            file(relativePath: { eq: "mam_tor-walking.jpeg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920, grayscale: true) {
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
                <StyledImg
                    fluid={ query.file.childImageSharp.fluid }
                />
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

export default MasterHero
