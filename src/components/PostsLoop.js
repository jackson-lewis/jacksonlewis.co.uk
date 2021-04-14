/**
 * Master Hero
 */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { SiteSection, SiteContainer } from "@components/Global/SiteLayout"
import StyledLink from "@components/Link"
import { minWidth } from "@styles/MediaQueries"


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

const StyledPost = styled.div`
    margin-bottom: 2rem;

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

const StyledPostThumbnail = styled( Image )`
    margin-bottom: get_baseline( .5 );

    border-radius: var( --border-radius );
    opacity: .5;

    @media ${ minWidth.medium } {
        margin-bottom: 0;
        grid-column: 1 / 3;
    }
`

const StyledPostDetails = styled.div`
    padding: 10px var( --site-margin ) 0;

    @media ${ minWidth.medium } {
        grid-column: 3 / 6;
    }
`

const StyledPostActions = styled.div`
    margin-top: 20px;

    a {
        margin-right: 1rem;
    }
`


const PostsLoop = ({ posts }) => {

    /**
     * Component of a single project in the loop
     */
    const Post = ({ postData }) => {
        const { frontmatter } = postData

        return (
            <StyledPost>
                <StyledPostThumbnail
                    fluid={ frontmatter.featuredImage.childImageSharp.fluid }
                />
                <StyledPostDetails>
                    <h3>{ frontmatter.title }</h3>
                    <StyledPostActions>
                        <StyledLink to={ frontmatter.slug } color="primary">Read post</StyledLink>
                    </StyledPostActions>
                </StyledPostDetails>
            </StyledPost>
        )
    }

    Post.propTypes = {
        postData: PropTypes.object.isRequired
    }

    return (
        <StyledSiteSection>
            <StyledSiteContainer>
                { posts.map( post => <Post key={ post.node.frontmatter.title } postData={ post.node } /> ) }
            </StyledSiteContainer>
        </StyledSiteSection>
    )
}

PostsLoop.propTypes = {
    posts: PropTypes.arrayOf( PropTypes.object ).isRequired
}

export default PostsLoop
