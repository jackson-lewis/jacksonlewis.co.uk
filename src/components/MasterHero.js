/**
 * Master Hero
 */
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import { SiteContainer } from '@components/SiteLayout'
import { minWidth } from './styles/MediaQueries'
import { getBaseline } from './styles/Functions'


const StyledHeroHolder = styled.div`
    width: 100%;
    min-height: calc( 300px + ${ getBaseline( 2 ) } + var( --header-height ) );
    height: 80vh;
    max-height: 700px;
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

    background-image: radial-gradient( ellipse at top right, rgba( 222, 13, 244, .95 ), transparent ), radial-gradient( ellipse at bottom left, rgba( 244, 28, 81, .85 ), transparent );
    background-size: 200% 200%;
    background-position: 25% 25%, 75% 75%;
`

const StyledSiteContainer = styled( SiteContainer )`
    margin-bottom: 0;
`

const StyledContent = styled.div`
    max-width: 800px;
    
    color: var( --white );
    text-align: right;

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

    const query = useStaticQuery(
        graphql`
          query {
            file(relativePath: { eq: "mam-tor.jpeg" }) {
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
                        <StyledContent>
                            { children }
                        </StyledContent>
                    </StyledSiteContainer>
                </StyledHeroEffects>
            </StyledHero>
        </StyledHeroHolder>
    )
}

export default MasterHero
