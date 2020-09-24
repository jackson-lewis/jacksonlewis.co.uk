/**
 * Master Hero
 */
import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { minWidth } from './styles/MediaQueries'
import { getBaseline } from './styles/Functions'


const StyledHero = styled( BackgroundImage )`
    width: 100%;
    min-height: calc( 300px + ${ getBaseline( 2 ) } + var( --header-height ) );
    height: 80vh;
    max-height: 1000px;
    margin-bottom: 0;
    padding: var( --header-height ) var( --site-margin ) 100px;
    position: relative;
    z-index: 20;
    display: grid;
    align-items: flex-end;

    @media ${ minWidth.medium } {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 10vw;
        align-items: center;
    }
`

const StyledContent = styled.div`
    max-width: 360px;
    
    color: var( --white );

    @media ${ minWidth.medium } {
        grid-column: 2;
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

        font-size: clamp( 2rem, 5vw, 5.625rem );
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
            file(relativePath: { eq: "JACKSON.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `
    )

    const backgroundStack = [
        `linear-gradient( 0deg, rgba(17, 2, 7, 1), rgba(17, 2, 7, 0) )`,
        `radial-gradient( ellipse at top left, #DE0DF4, transparent )`,
        `radial-gradient( ellipse at bottom right, #f41c51, transparent )`,
        `linear-gradient( 90deg, rgba(17, 2, 7, 0), rgba(17, 2, 7, 1) )`,
        query.file.childImageSharp.fluid
    ]

    return (
        <StyledHero
            Tag="div"
            fluid={ backgroundStack }
            style={{
                backgroundPosition: `left bottom, center, center, right 100%, center 2%`,
                backgroundSize: `100% 80%, cover, cover, 67% 100%, cover`
            }}
            className="layout--2_col"
        >
            <StyledContent>
                { children }
            </StyledContent>
        </StyledHero>
    )
}

export default MasterHero
