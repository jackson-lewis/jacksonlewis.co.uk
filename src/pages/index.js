/**
 * index.js
 * 
 * The 'home' page
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import SEO from "@components/_SEO"
import Page from "@components/Global/Page"
import MasterHero from "@components/Home/MasterHero"
import SplitJourney from "@components/Home/SplitJourney"
import Fundamentals from "@components/Home/Fundamentals"
import FlagshipProjects from "@components/Home/FlagshipProjects"
import ContentBlock from "@components/Global/ContentBlock"
import StyledLink from "@components/Link"
import { minWidth } from "@components/styles/MediaQueries"


const StyledPageContentsWrapper = styled.div`
    width: 100%;
    position: relative;
    z-index: 50;

    background: var( --body-color );

    ::before {
        --height: 8.74887vw; // 5deg

        content: '';
        display: block;
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: var( --height );
        transform: translateY( calc( var( --height ) * -1 ) );

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 100 25'%3E%3Cpolygon points='0,25 100,25 100,0' fill='%23191113' /%3E%3C/svg%3E") no-repeat center;
        background-size: 100% 100%;
    }
`

export default function Index({ data }) {
    const projects = data.allMdx.edges

    return (
        <Page>
            <SEO
                title="Jackson Lewis - A frontend developer"
                description="Hey, I'm Jackson Lewis! A frontend developer with expertise in web performance, also a lover of a good walk."

            />
            <Helmet>
                <body className="home" />
            </Helmet>
            <MasterHero>
                <h1>A frontend developer with a love for web performance and embracing the outdoors.</h1>
            </MasterHero>
            <StyledPageContentsWrapper>
                <SplitJourney />
                <Fundamentals />
                <FlagshipProjects projects={ projects } />
                <ContentBlock align="center">
                    <h2>More coming soon...</h2>
                    <p>This site is currently under a soft launch, so a few features are yet to be added, including project case studies and a blog.</p>
                </ContentBlock>
            </StyledPageContentsWrapper>
        </Page>
    )
}

Index.propTypes = {
    data: PropTypes.objectOf( PropTypes.object ).isRequired
}


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
