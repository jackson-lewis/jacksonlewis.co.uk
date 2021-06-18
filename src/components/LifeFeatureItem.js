/**
 * Master Hero
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { minWidth } from './styles/MediaQueries'
import { getBaseline } from './styles/Functions'


const StyledItem = styled.div`
    margin-bottom: ${ getBaseline( 3 ) };

    @media ${ minWidth.medium } {
        
        :last-child {

            .image {
                grid-column: 2;
                grid-row: 1;
            }

            .content {
                grid-column: 1;
                grid-row: 1;
            }
        }
    }
`

const StyledImage = styled( Image )`
    margin-bottom: ${ getBaseline() };

    border-radius: var( --border-radius );

    @media ${ minWidth.medium } {
        margin-bottom: 0;
    }
`


export default function LifeFeatureItem({ children }) {

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

    return (
        <StyledItem className="layout--2_col">
            <StyledImage
                fluid={ query.file.childImageSharp.fluid }
                className="image"
            />
            <div className="content">
                { children }
            </div>
        </StyledItem>
    )
}

LifeFeatureItem.propTypes = {
    children: PropTypes.node.isRequired
}
