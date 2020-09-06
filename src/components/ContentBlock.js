/**
 * Content Block
 * 
 * Basic block for adding standard content
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getBaseline } from "./styles/Functions"
import { SiteSection, SiteContainer } from "./SiteLayout"


const StyledSiteSection = styled( SiteSection )`
    h2 {
        margin-bottom: ${ getBaseline() };
    }

    h3 {
        margin-bottom: ${ getBaseline( .5 ) };
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    max-width: 37.5rem;

    text-align: center;
`


const ContentBlock = ({ children }) => {

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                { children }
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

ContentBlock.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContentBlock
