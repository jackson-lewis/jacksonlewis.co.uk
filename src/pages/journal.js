/**
 * The archive of blog posts
 */
import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import SEO from "@components/_SEO"
import Page from "@components/Global/Page"
import StandardHero from "@components/StandardHero"
import PostsLoop from "@components/PostsLoop"
import ContentBlock from "@components/Global/ContentBlock"


const Journal = ({ data }) => {
    const posts = data.allMdx.edges
    
    return (
        <Page>
            <SEO title="Journal" />
            <StandardHero>
                <h1>Journal</h1>
                <p>Just some of my writing</p>
            </StandardHero>
            <PostsLoop posts={ posts } />
            <ContentBlock align="center">
                <h2>Still intrigued?</h2>
                <p>You'll find more on <a href="https://twitter.com/jacksonrlewis">Twitter</a> where I've ❤️'ed tonnes of tech tweets and the lot!</p>
            </ContentBlock>
        </Page>
    )
}

Journal.propTypes = {
    data: PropTypes.objectOf( PropTypes.object ).isRequired
}


export default Journal

export const query = graphql`
    query {
        allMdx( filter: {
            frontmatter: {
                slug: {
                    regex: "/^/posts/"
                }
            }
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                        date
                        featuredImage {
                            childImageSharp {
                                fluid( maxWidth: 700 ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
