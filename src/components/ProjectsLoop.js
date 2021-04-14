/**
 * Master Hero
 */
import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { SiteSection, SiteContainer } from "./Global/SiteLayout"
import StyledLink from "./Link"
import { minWidth } from "./styles/MediaQueries"


const StyledSiteSection = styled( SiteSection )`
    position: relative;

    ::before,
    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX( -50% );
    }

    ::before {
        width: 16rem;
        height: 1px;
        bottom: -5rem;
        z-index: 5;

        background: linear-gradient( 90deg, var( --black ), var( --outline-color ), var( --black ) );
    }

    ::after {
        width: 7px;
        height: 7px;
        bottom: calc( -5rem + -3.5px );
        z-index: 10;

        border-radius: 9px;
        border: 1px solid var( --primary );
        background-color: var( --black );
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    max-width: 45.625rem;
`

const StyledProject = styled.div`
    margin-bottom: 50px;

    border-radius: var( --border-radius );
    border: 1px solid var( --line-color );

    :hover {
        background-color: lighten( #0f0f0f, 2% );
    }

    a {
        text-decoration: none;
    }

    h3 {
        margin-bottom: get_baseline( .25 );
    }

    @media ${ minWidth.medium } {
        display: grid;
        grid-gap: 0 2rem;
        grid-template-columns: repeat( 5, 1fr );
    }
`

const StyledProjectThumbnail = styled( Image )`
    margin-bottom: get_baseline( .5 );

    border-radius: var( --border-radius );
    opacity: .5;

    @media ${ minWidth.medium } {
        margin-bottom: 0;
        grid-column: 1 / 3;
    }
`

const StyledProjectDetails = styled.div`
    padding: 10px var( --site-margin ) 0;

    @media ${ minWidth.medium } {
        grid-column: 3 / 6;
    }
`

const StyledProjectActions = styled.div`
    margin-top: get_baseline( .5 );

    a {
        margin-right: 1rem;
    }
`

const StyledProjectTags = styled.div`
    margin-top: 5px;
    margin-bottom: 12px;
`

const StyledProjectTag = styled.span`
    margin: 0 8px 8px 0;
    padding: .25rem .5rem .25rem;
    display: inline-block;

    background-color: rgba( 110, 100, 100, .2 );
    color: var( --grey );
    border-radius: var( --border-radius );
    font-family: var( --sans-font );
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`


const ProjectsLoop = ({ projects }) => { 

    /**
     * Component of a single project in the loop
     */
    const Project = ({ projectData }) => {
        const { frontmatter } = projectData

        return (
            <StyledProject>
                <StyledProjectThumbnail
                    fluid={ frontmatter.featuredImage.childImageSharp.fluid }
                />
                <StyledProjectDetails>
                    <h3>{ frontmatter.title }</h3>
                    <StyledProjectTags>
                        { frontmatter.tags.split( `, ` ).map( ( tag, index ) => <StyledProjectTag key={ index }>{ tag }</StyledProjectTag> ) }
                    </StyledProjectTags>
                    <div>{ frontmatter.desc }</div>
                    <StyledProjectActions>
                        <StyledLink to={ frontmatter.slug } color="primary" noArrow>Case study</StyledLink>
                        <StyledLink to={ frontmatter.url } type="text" ext>{ frontmatter.type === `site` ? `Visit site` : `View on github` }</StyledLink>
                    </StyledProjectActions>
                </StyledProjectDetails>
            </StyledProject>
        )
    }

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                { projects.map( ( project, index ) => <Project key={ index } projectData={ project.node } /> ) }
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

export default ProjectsLoop
