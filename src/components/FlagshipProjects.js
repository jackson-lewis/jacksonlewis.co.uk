/**
 * Flagship Projects
 * 
 * Showcase the top two projects at any given time
 */
import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { SiteSection } from "./SiteLayout"
import StyledLink from "./Link"
import { minWidth } from "./styles/MediaQueries"
import { getBaseline } from "./styles/Functions"


const StyledSiteSection = styled( SiteSection )`
    padding: 0;
    display: grid;
    grid-gap: 30px 0;
    grid-template-columns: var( --site-margin ) 1fr 1fr var( --site-margin );
`

const StyledBlockBefore = styled.div`
    grid-column: 2 / 4;
    grid-row: 1;

    h2 {
        margin-bottom: ${ getBaseline( .5 ) };
    }

    @media ${ minWidth.medium } {
        margin-right: 60px;
        grid-column: 2 / 3;

        h2 {
            font-size: 2.4rem;
        }
    }
`
const StyledBlockAfter = styled.div`
    margin-right: 60px;
    grid-column: 2 / 4;
    grid-row: 4;
    justify-self: flex-end;

    h2 {
        margin-bottom: ${ getBaseline( .5 ) };
    }

    @media ${ minWidth.medium } {
        padding-bottom: 60px;
        grid-column: 3 / 4;
        grid-row: 3;
        justify-self: flex-start;
    }
`

const StyledProject = styled( BackgroundImage )`
    padding-top: 56%;
    position: relative;

    box-shadow: -.5rem -.5rem 2rem rgba( var( --grey ), .1 );
    border-radius: var( --border-radius );
    overflow: hidden;

    transition: background-position 300ms !important;

    ::before,
    ::after {
        transition: 300ms ease-in-out;
    }

    :hover {
        background-position: bottom right;
    }

    @media ${ minWidth.medium } {
        padding-top: 0;
    }

    :nth-child(2) {
        grid-column: 2 / 5;
        grid-row: 2;

        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;

        @include x( m ) {
            grid-column: 3 / 5;
            grid-row: 1 / 3;
        }
    }

    :nth-child(3) {
        margin-right: 60px;
        grid-column: 1 / 4;
        grid-row: 3;

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: none;
        box-shadow: .5rem .5rem 2rem rgba( var( --grey ), .1 );

        background-image: radial-gradient( ellipse at top right, #078a74, transparent ),
                          radial-gradient( ellipse at bottom left, #834907, transparent );
        
        @media ${ minWidth.medium } {
            grid-column: 1 / 3;
            grid-row: 2 / 4;
        }
    }
`

const StyledProjectContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;

    @media ${ minWidth.medium } {
        padding: 2rem 3rem;
    }
`

const StyledProjectTags = styled.div`
    margin-top: .5rem;
    margin-bottom: -.5rem;
`

const StyledProjectTag = styled.span`
    margin: 0 .5rem .5rem 0;
    padding: .25rem .5rem .25rem;
    display: inline-block;

    background-color: rgba( 90, 80, 80, .05 );
    backdrop-filter: blur( 2px ) saturate( 90% );
    color: var( --white );
    border-radius: var( --border-radius );
    font-family: var( --sans-font );
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`


const FlagshipProjects = ({ projects }) => {

    const Project = ({ data }) => {
        const { frontmatter } = data

        const backgroundStack = [
            `radial-gradient( ellipse at top left, #DE0DF4, transparent )`,
            `radial-gradient( ellipse at bottom right, #f41c51, transparent )`,
            frontmatter.featuredImage.childImageSharp.fluid
        ]

        return (
            <StyledProject
                fluid={ backgroundStack }
                style={{
                    backgroundSize: `200%, 200%, cover`
                }}
            >
                <Link to={ frontmatter.slug }>
                    <StyledProjectContainer>
                        <h3>{ frontmatter.title }</h3>
                        <StyledProjectTags>
                            { frontmatter.tags.split( `, ` ).map( tag => <StyledProjectTag key={ tag }>{ tag }</StyledProjectTag> ) }
                        </StyledProjectTags>
                    </StyledProjectContainer>
                </Link>
            </StyledProject>
        )
    }

    Project.propTypes = {
        data: PropTypes.objectOf( PropTypes.object ).isRequired
    }

    return (
        <StyledSiteSection>
            <StyledBlockBefore>
                <h2>Flagship Projects</h2>
                <p>Strong passion for creating rich experiences on the web.</p>
            </StyledBlockBefore>
            <Project data={ projects[0].node } />
            <Project data={ projects[1].node } />
            <StyledBlockAfter>
                <StyledLink to="/projects" type="text">View projects</StyledLink>
            </StyledBlockAfter>
        </StyledSiteSection>
    )
}

FlagshipProjects.propTypes = {
    projects: PropTypes.arrayOf( PropTypes.object ).isRequired
}


export default FlagshipProjects
