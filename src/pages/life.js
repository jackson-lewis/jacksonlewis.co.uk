/**
 * All about my life when I'm not working...
 */
import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from "styled-components"
import SEO from "@components/_SEO"
import Page from "@components/Global/Page"
import { SiteSection, SiteContainer } from "@components/Global/SiteLayout"
import LifeHero from "@components/life/Hero"
import { minWidth } from "@components/styles/MediaQueries"
import Car from "@components/life/Car"
import { Container, StyledFooter } from "@components/Footer/styles"



const LifeGlobalStyle = createGlobalStyle`
    ${ StyledFooter } {
        padding-top: 0;

        background-color: rgba( 10, 10, 10, .90 );
        backdrop-filter: blur( 6px ) saturate( 90% );

        ${ Container } {
            border-top: none;
        }
    }
`

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
    margin: 8.74887vw 0 0;
    padding-top: 8.74887vw;
    padding-bottom: 60px;
    position: relative;
    z-index: 50;

    background-color: var( --body-color );

    ::before {
        --height: 8.74887vw; // 5deg

        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: var( --height );
        transform: translateY( calc( var( --height ) * -1 ) );

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 100 25'%3E%3Cpolygon points='0,25 100,25 100,0' fill='%23130207' /%3E%3C/svg%3E") no-repeat center;
        background-size: 100% 100%;
    }

    ::after {
        --height: 8.74887vw; // 5deg

        content: '';
        display: block;
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 100%;
        height: var( --height );
        transform: rotate(180deg) translateY( calc( var( --height ) * -1 ) );

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 100 25'%3E%3Cpolygon points='0,25 100,25 100,0' fill='%23130207' /%3E%3C/svg%3E") no-repeat center;
        background-size: 100% 100%;
    }

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
 * Page
 */
export default function Life() {

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
            <StyledParallexCarSection id="car-yobbo" ref={ innerRef }>
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


    return (
        <Page>
            <SEO title="Life" />
            <Helmet>
                <body className="page-life" />
            </Helmet>
            <LifeGlobalStyle />
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

            <Car image={ query.car.childImageSharp.fluid }>
                <h2>Car <del>yobbo</del> enthusiast</h2>
                <p>Currently the proud keeper of a 2016 A3 Saloon. I’ve always been intrigued by these machines with 4 wheels, from creating my own Disney PIXAR Cars museum as a youngster, to getting behind the wheel at 17.</p>
                <p>It was with the second car, my 206, that I developed the obsession with taking things apart and putting them back together again, a very therapeutic - and useful - process.</p>
            </Car>
        </Page>
    )
}