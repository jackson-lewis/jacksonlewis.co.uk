/**
 * Site Layout defines the primary section and container to be 
 * used site-wide.
 */
import styled from "styled-components"


/**
 * The to-go wrapper for all (well, 99%) of site section components
 */
const SiteSection = styled.section`
    margin-bottom: 10rem;
    padding-left: 1rem;
    padding-right: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`

/**
 * The site container, commonly the only direct child to SiteSection
 */
const SiteContainer = styled.div`
    max-width: 72.5rem;
    margin: auto;
`


export { SiteSection, SiteContainer }
