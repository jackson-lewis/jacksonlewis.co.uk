/**
 * Content Block
 * 
 * Basic block for adding standard content
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { SiteSection, SiteContainer } from "./SiteLayout"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline } from "./styles/Functions"


const StyledSiteSection = styled( SiteSection )`
    h2 {
        margin-bottom: ${ getBaseline( .5 ) };
    }

    h3 {
        margin-bottom: ${ getBaseline( .25 ) };
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    @media ${ minWidth.medium } {
        display: grid;
        grid-template-columns: 1fr minmax( 0, 37.5rem ) 1fr;

        & > * {
            grid-column: 2;
        }

        & > pre {
            grid-column: 2 / 4;
        }
    }
`


const DefaultPageContent = ({ body }) => {

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                <MDXRenderer>{ body }</MDXRenderer>
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

DefaultPageContent.propTypes = {
    body: PropTypes.isRequired
}

export default DefaultPageContent
