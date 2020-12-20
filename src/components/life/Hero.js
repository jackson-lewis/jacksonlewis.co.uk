/**
 * All about my life when I'm not working...
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from "styled-components"
import SEO from "@components/_SEO"
import Page from "@components/Page"
import { SiteSection, SiteContainer } from "@components/SiteLayout"
import { minWidth } from "@components/styles/MediaQueries"


const StyledLifeHero = styled.div`
    width: 100%;
    min-height: 80vh;
    //min-height: -webkit-fill-available;
    padding: var( --header-height ) 20px 40px;
    display: grid;
    align-items: flex-end;
    position: relative;
    overflow: hidden;

    background-color: var( --dark-grey );

    @media ${ minWidth.large } {
        min-height: 100vh;
        //min-height: -webkit-fill-available;
        padding-bottom: 80px;
    }
`


const StyledHeroContent = styled.div`
    max-width: 730px;
    margin: 0 auto;
    position: relative;
    z-index: 20;

    text-align: center;

    h1 {
        color: var( --white );
    }

    p {
        font-weight: 700;
        font-size: 1.1rem;
    }

    @media ${ minWidth.large } {
        h1 {
            font-size:  4.735rem;
        }
        p {
            font-size: 1.5rem;
            line-height: 1.6;
        }
    }
`

const StyledAnimatedSlides = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
`


const AnimatedSlides = ({ children }) => {

    return (
        <StyledAnimatedSlides>
            { children }
        </StyledAnimatedSlides>
    )
}

const slideAnimation = keyframes`
    0% {
        transform: translate3d( 0, 0, 0 ) scale( 1 );
    }

    50% {
        transform: translate3d( -25%, 0, 0 ) scale( 1.4 );
    }

    100% {
        transform: translate3d( 0, 0, 0 ) scale( 1 );
    }
`

const StyledSlideImage = styled( Img )`
    min-width: 150%;
    height: 100%;
    top: 0;
    left: 0;

    /* animation: ${ slideAnimation } 60s infinite; */
`

const StyledAnimatedSlide = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
`

const StyledLocationTag = styled.span`
    padding: 2px 10px;
    padding-left: 28px;
    display: block;
    position: absolute;
    bottom: 20px;
    left: var( --site-gutter );

    text-transform: uppercase;
    font-size: .875rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: var( --black );
    border-radius: 4px;
    background-color: rgba( 255, 239, 239, .5 );
    backdrop-filter: blur( 4px );
    box-shadow: 0 0 8px rgba( 30, 30, 30, .2 );

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 14px;
        height: 14px;
        top: calc( 50% - 7px );
        left: 8px;

        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'%3E%3Cpath d='M8.566,2A3.75,3.75,0,0,0,5,5.915c0,2.332,2.252,5.549,3.179,6.774a.478.478,0,0,0,.779,0c.922-1.225,3.174-4.441,3.174-6.774A3.75,3.75,0,0,0,8.566,2Zm0,5.314a1.341,1.341,0,0,1-1.273-1.4,1.341,1.341,0,0,1,1.273-1.4,1.341,1.341,0,0,1,1.273,1.4A1.341,1.341,0,0,1,8.566,7.314Z' transform='translate(-1.564 -0.626)' fill='%23130207'/%3E%3C/svg%3E");
    }

`

const AnimatedSlide = ({ image, locationTag }) => {

    return (
        <StyledAnimatedSlide>
            <StyledSlideImage fluid={ image } style={{ position: 'absolute' }} />
            <StyledLocationTag>
                { locationTag }
            </StyledLocationTag>
        </StyledAnimatedSlide>
    )
}


const LifeHero = ({ children, images }) => { 

    return (
        <StyledLifeHero>
            <AnimatedSlides>
                { images.map( ( image, i ) => <AnimatedSlide key={ `slide-${ i }` } image={ image.img } locationTag={ image.tag } /> ) }
            </AnimatedSlides>
            <StyledHeroContent>
                { children }
            </StyledHeroContent>
        </StyledLifeHero>
    )
}

LifeHero.defaultProps = {
    images: PropTypes.arrayOf( PropTypes.object )
}

export default LifeHero
