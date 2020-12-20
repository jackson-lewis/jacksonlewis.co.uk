/**
 * index.js
 * 
 * The 'home' page
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SEO from "@components/_SEO"
import Page from "@components/Page"
import MasterHero from "@components/MasterHero"
import SplitJourney from "@components/SplitJourney"
import Fundamentals from "@components/Fundamentals"
import FlagshipProjects from "@components/FlagshipProjects"
import ContentBlock from "@components/ContentBlock"
import StyledLink from "@components/Link"
import { minWidth } from "@components/styles/MediaQueries"


const StyledPageContentsWrapper = styled.div`
    width: 100%;
    position: relative;
    z-index: 50;

    background: var( --body-color );

    ::before {
        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: 110px;
        transform: translateY( -55px ) skew( 0deg, -4deg );

        background-color: var( --dark-grey );
    }
`

const Index = ({ data }) => {
    const projects = data.allMdx.edges

    return (
        <Page>
            <SEO
                title="Home"
            />
            <MasterHero>
                <h1>A frontend developer with a love for web performance and embracing the outdoors.</h1>
            </MasterHero>
            <StyledPageContentsWrapper>
                <SplitJourney />
                <Fundamentals />
                <FlagshipProjects projects={ projects } />
                <ContentBlock align="center">
                    <h2>An itch for design</h2>
                    <p>I've loved design for as long as I first set eyes on a piece of code. It has only been in recent years I wanted to push my expertise in frontend development, all while keeping a firm grasp on implementing the best UI and UX.</p>
                </ContentBlock>
            </StyledPageContentsWrapper>
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
