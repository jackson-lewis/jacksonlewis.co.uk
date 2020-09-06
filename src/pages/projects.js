/**
 * index.js
 * 
 * The 'home' page
 */

// Core
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "@components/SEO"
import Page from "@components/Page"
import StandardHero from "@components/StandardHero"
import ProjectsLoop from "@components/ProjectsLoop"
import ContentBlock from "@components/ContentBlock"
import StyledLink from "@components/Link"


const Projects = ({ data }) => {
    const projects = data.allMdx.edges
    
    return (
        <Page>
            <SEO title="Projects" />
            <StandardHero>
                <h1>Projects</h1>
                <p>A collection of my top work to date.</p>
            </StandardHero>
            <ProjectsLoop projects={ projects } />
            <ContentBlock align="center">
                <h2>For the developers</h2>
                <p>Head over to GitHub to check out more of my work, including any side projects.</p>
                <StyledLink to="https://github.com/jackson-lewis" color="primary" ext>GitHub profile</StyledLink>
            </ContentBlock>
        </Page>
    )
}

Projects.propTypes = {
    data: PropTypes.objectOf( PropTypes.object ).isRequired
}

export default Projects


export const query = graphql`
    query {
        allMdx( filter: {
            frontmatter: {
                slug: {
                    regex: "/^/projects/"
                }
            }
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        featuredImage {
                            childImageSharp {
                                fluid( maxWidth: 700 ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        type
                        tags
                        url
                    }
                }
            }
        }
    }
`
