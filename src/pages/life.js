/**
 * All about my life when I'm not working...
 */
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"
import SEO from "@components/_SEO"
import Page from "@components/Page"
import { SiteSection, SiteContainer } from "@components/SiteLayout"
import LifeHero from "@components/life/Hero"
import { minWidth } from "@components/styles/MediaQueries"


/**
 * 
 * Image & Text blocks
 * 
 */
const StyledImageTextBlockImage = styled( Img )`
    margin-bottom: 30px;
    overflow: hidden;

    border-radius: 4px;

    @media ${ minWidth.medium } {
        margin-bottom: 0;
    }
`

const StyledImageTextBlockText = styled.div`
    h2, h3 {
        color: var( --white );
    }
    
    p {
        font-weight: 700;
        font-size: 1.1rem;
    }
`

const StyledImageTextBlock = styled( SiteContainer )`
`

const AlternatingSection = styled( SiteSection )`
    width: 100%;
    margin: 0;
    padding-top: 60px;
    padding-bottom: 60px;
    position: relative;
    z-index: 50;

    background-color: var( --body-color );

    @media ${ minWidth.medium } {
        margin-bottom: 0;
    }

    @media ${ minWidth.large } {
        padding-top: 120px;
        padding-bottom: 120px;
    }

    ${ StyledImageTextBlock } {

        :first-child {
            margin-bottom: 60px;
        }

        @media ${ minWidth.medium } {
            display: grid;
            grid-gap: 16px;
            grid-template-rows: auto;
            grid-template-columns: repeat( 12, 1fr );
            align-items: flex-start;

            :first-child {
                margin-bottom: 90px;

                ${ StyledImageTextBlockImage } {
                    margin-right: 2vw;
                    grid-column: 1 / 6;
                    grid-row: 1;
                }

                ${ StyledImageTextBlockText } {
                    grid-column: 6 / 13;
                    grid-row: 1;
                }
            }

            :last-child {

                ${ StyledImageTextBlockImage } {
                    grid-column: 7 / 13;
                    grid-row: 1;
                }

                ${ StyledImageTextBlockText } {
                    margin-right: 2vw;
                    grid-column: 2 / 7;
                    grid-row: 1;
                }
            }

            ${ StyledImageTextBlockImage } {
                top: calc( var( --header-height ) + 20px );
            }
        }
    }
`




/**
 * 
 * Parallax section
 * 
 */
const StyledParallexCarSection = styled.section`
    width: 100%;
    min-height: 100vh;
    //min-height: -webkit-fill-available;
    padding: 60px var( --site-margin );
    position: relative;
    z-index: 20;

    @media ${ minWidth.large } {
        display: grid;
        align-items: center;
    }
`


const StyledParallexCarImage = styled( Img )`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
`


const StyledParallexCarText = styled.div`
    max-width: 580px;
    margin-left: auto;
    padding: 30px 15px;

    border-radius: 8px;
    background-color: rgba( 0, 0, 0, .6 );
    backdrop-filter: blur( 6px );
    position: relative;
    z-index: 20;

    h2, h3 {
        color: var( --white );
    }

    @media ${ minWidth.medium } {
        width: 60%;
        padding: 50px 30px;
    }
`


/**
 * Page
 */
const Life = () => {

    const query = useStaticQuery(
        graphql`
          query {
            hero: file(relativePath: { eq: "mam-tor-pana.jpeg" }) {
              childImageSharp {
                fluid( quality: 90 ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            },
            outdoorsy: file(relativePath: { eq: "cornfield.jpg" }) {
              childImageSharp {
                fluid( quality: 90, maxWidth: 1920, grayscale: true ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            },
            active: file(relativePath: { eq: "clee-hill.jpg" }) {
              childImageSharp {
                fluid( quality: 90, maxWidth: 1920, grayscale: true ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            },
            car: file(relativePath: { eq: "audi-a3.jpg" }) {
              childImageSharp {
                fluid( quality: 90, maxWidth: 1920 ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
    )


    const ImageTextBlock = ({ children, image }) => {
    
        return (
            <StyledImageTextBlock>
                <StyledImageTextBlockImage fluid={ image } style={{ position: 'sticky' }} />
                <StyledImageTextBlockText>
                    { children }
                </StyledImageTextBlockText>
            </StyledImageTextBlock>
        )
    }


    const ParallexCarSection = ({ innerRef, children, image }) => {
        
        return (
            <StyledParallexCarSection ref={ innerRef }>
                <StyledParallexCarImage
                    fluid={ image }
                    style={{ position: 'absolute' }}
                />
                <StyledParallexCarText>
                    { children }
                </StyledParallexCarText>
            </StyledParallexCarSection>
        )
    }


    const images = [
        {
            img: query.hero.childImageSharp.fluid,
            tag: 'Mam Tor, Peak District'
        }
    ]


    const carRef = useRef()

    
    function ParallaxCar() {

        let carSectionPos = carRef.current.getBoundingClientRect()

        function getScrollPosition( e ) {
            carSectionPos = carRef.current.getBoundingClientRect()

            console.log( carSectionPos )

            if ( carSectionPos.top <= 0 ) {
                carRef.current.classList.add( 'fixed' )
            } else {
                carRef.current.classList.remove( 'fixed' )
            }
        }

        window.addEventListener( 'scroll', getScrollPosition )
        
        return () => {
            window.removeEventListener( 'scroll', getScrollPosition )
        }
    }

    useEffect( ParallaxCar, [] )


    return (
        <Page>
            <SEO title="Life" />
            <LifeHero images={ images }>
                <h1>Life</h1>
                <p>As much as I love what I do, you can’t beat disconnecting by getting outside, from giving it the beans down country roads to exploring woodlands, riversides and hills on those Sunday walks…</p>
            </LifeHero>

            <AlternatingSection>
                <ImageTextBlock image={ query.outdoorsy.childImageSharp.fluid }>
                    <h2>Outdoorsy</h2>
                    <p>With so much time during the week spent at the screen, it’s super valuable to me to get far away from it all and disconnect at the weekend, and what better way than getting out in the open!</p>
                    <p>I try to visit as many new places as possible.</p>
                    <p>With so much time during the week spent at the screen, it’s super valuable to me to get far away from it all and disconnect at the weekend, and what better way than getting out in the open!</p>
                    <p>I try to visit as many new places as possible.</p>
                </ImageTextBlock>
                <ImageTextBlock image={ query.active.childImageSharp.fluid }>
                    <h2>Keeping active</h2>
                    <p>With so much time during the week spent at the screen, it’s super valuable to me to get far away from it all and disconnect at the weekend, and what better way than getting out in the open!</p>
                    <p>I try to visit as many new places as possible.</p>
                    <p>With so much time during the week spent at the screen, it’s super valuable to me to get far away from it all and disconnect at the weekend, and what better way than getting out in the open!</p>
                    <p>I try to visit as many new places as possible.</p>
                </ImageTextBlock>
            </AlternatingSection>

            <ParallexCarSection innerRef={ carRef } image={ query.car.childImageSharp.fluid }>
                <h2>Car <strike>yobbo</strike> enthusiast </h2>
                <p>Currently the proud keeper of a 2016 A3 Saloon. I’ve always been intrigued by these machines with 4 wheels, from creating my own Disney PIXAR Cars museum as a youngster, to getting behind the wheel at 17.</p>
                <p>It was with the second car, my 206, that I developed the obsession with taking things apart and putting them back together again, a very therapeutic - and useful - process.</p>
                <h3>Something else carsy</h3>
                <p>Currently the proud keeper of a 2016 A3 Saloon. I’ve always been intrigued by these machines with 4 wheels, from creating my own Disney PIXAR Cars museum as a youngster, to getting behind the wheel at 17.</p>
            </ParallexCarSection>
        </Page>
    )
}

export default Life
