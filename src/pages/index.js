/**
 * index.js
 * 
 * The 'home' page
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "@components/Seo"
import Page from "@components/Page"
import MasterHero from "@components/MasterHero"
import SplitJourney from "@components/SplitJourney"
import Fundamentals from "@components/Fundamentals"
import FlagshipProjects from "@components/FlagshipProjects"
import ContentBlock from "@components/ContentBlock"
import StyledLink from "@components/Link"


const Index = ({ data }) => {
    const projects = data.allMdx.edges

    return (
        <Page>
            <SEO
                title="Home"
            />
            <MasterHero>
                <span>Jackson Lewis</span>
                <h1>Frontend Developer</h1>
                <p>Advancing the web in the week, embracing the outdoors at the weekend.</p>
            </MasterHero>
            <SplitJourney />
            <Fundamentals />
            <FlagshipProjects projects={ projects } />
            <ContentBlock align="center">
                <h2>An itch for design</h2>
                <p>I've loved design for as long as I first set eyes on a piece of code. It has only been in recent years I wanted to push my expertise in frontend development, all while keeping a firm grasp on implementing the best UI and UX.</p>
                <StyledLink to="/design" color="primary">Design & me</StyledLink>
            </ContentBlock>
        </Page>
    )
}

Index.propTypes = {
    data: PropTypes.objectOf( PropTypes.object ).isRequired
}

export default Index


export const query = graphql`
    query {
        allMdx( filter: {
            frontmatter: {
                slug: {
                    in: [ "/projects/shiftr", "/projects/mottaliving" ]
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
                                fluid( maxWidth: 1440 ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        tags
                    }
                }
            }
        }
    }
`
