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
    min-height: calc( 300px + ${ getBaseline( 4 ) } + var( --header-height ) );
    height: 90vh;
    max-height: 1000px;
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    position: relative;
    z-index: 20;
`

const StyledGrid = styled.div`
    width: 100%;
    height: 100%;
    padding: var( --header-height ) calc( var( --site-margin ) * 2 );
    display: grid;
    align-items: flex-end;

    @media ${ minWidth.medium } {
        align-items: center;
    }
`

const StyledContent = styled.div`
    max-width: 30rem;
    
    color: var( --white );

    @media ${ minWidth.medium } {
        grid-column: 2;
    }

    span {
        font-family: var( --sans-font );
        font-size: 1.25rem;
        font-weight: 300;
        letter-spacing: 4px;
        text-transform: uppercase;
    }

    h1 {
        margin-top: ${ getBaseline( .25 ) };
        margin-bottom: ${ getBaseline( .5 ) };

        font-size: clamp( 3.75rem, 6vw, 5.625rem );

        & + p {
            max-width: 75%;
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
        >
            <StyledGrid className="layout--2_col">
                <StyledContent>
                    { children }
                </StyledContent>
            </StyledGrid>
        </StyledHero>
    )
}

export default MasterHero
