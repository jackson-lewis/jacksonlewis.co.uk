/**
 * Site Layout defines the primary section and container to be 
 * used site-wide.
 */
import styled from "styled-components"
import { minWidth } from "./styles/MediaQueries"


/**
 * The to-go wrapper for all (well, 99%) of site section components
 */
const SiteSection = styled.section`
    margin-bottom: 100px;
    padding-left: var( --site-margin );
    padding-right: var( --site-margin );

    &:last-child {
        margin-bottom: 0;
    }

    @media ${ minWidth.medium } {
        margin-bottom: 150px;
    }
`

/**
 * The site container, commonly the only direct child to SiteSection
 */
const SiteContainer = styled.div`
    max-width: 72.5em;
    margin: auto;
`


export { SiteSection, SiteContainer }
