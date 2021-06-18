/**
 * index.js
 * 
 * The 'home' page
 */

// Core
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "@components/_SEO"
import Page from "@components/Global/Page"
import StandardHero from "@components/StandardHero"
import ProjectsLoop from "@components/ProjectsLoop"
import ContentBlock from "@components/Global/ContentBlock"
import StyledLink from "@components/Link"
import { minWidth, widthBreakpoints } from "@styles/MediaQueries"
import { getBaseline } from "@styles/Functions"
import { SiteSection, SiteContainer } from "@components/Global/SiteLayout"
import { useEffect } from "react"


const PageStyle = createGlobalStyle`
    main {
        padding-top: calc( var( --header-height ) + 40px );
    }
`

const StyledGrid = styled( SiteContainer )`
    @media ${ minWidth.medium } {
        display: grid;
        grid-gap: 8vw;
        grid-template-columns: 2fr 3fr;
        align-items: flex-start;
    }
`

const StyledPageHeading = styled.header`
    margin-bottom: 100px;

    h1 {
        margin: 0 0 8px;

        color: var( --primary );
    }

    p {
        color: var( --dark-white );
        font-size: clamp( 1.1rem, 2vw, 1.3rem );
        font-weight: 600;
    }

    > *:last-child {
        margin-bottom: 0;
    }

    @media ${ minWidth.medium } {
        margin-bottom: 0;
        position: sticky;
        top: calc( var( --header-height ) + 40px );

        transition: opacity 400ms;
    }
`

const StyledProjects = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    @media ${ minWidth.medium } {
        /* Cheeky trick to match the height of the heading */
        ::before {
            content: '👌';
            display: block;

            visibility: hidden;
            opacity: 0;
            font-size: clamp( 3rem, 4vw, 4rem );
            line-height: var( --base-line-height );
        }
    }
`

const StyledProject = styled.li`
    padding: 20px;

    background-color: var( --dark-grey );
    border: 1px solid var( --outline-color );
    border-radius: var( --border-radius );
    
    :not(:last-child) {
        margin-bottom: 30px;
    }

    h2 {
        margin: 0;

        font-size: clamp( 1.5rem, 3vw, 1.75rem );
    }

    .project-tags {
        margin: 6px 0 18px;
        display: flex;

        span {
            margin: 0 6px;
            padding: 1px 6px;
            display: block;

            font-size: .75rem;
            font-weight: 600;
            background-color: #1D1D1D;
            color: var( --very-dark-white );
            border-radius: 4px;

            :first-child {
                margin-left: 0;
            }
        }
    }

    p {
        margin-bottom: ${ getBaseline( .5 ) };
    }

    @media ${ minWidth.large } {
        padding: 30px;
        padding-right: 40px;
    }
`

const PROJECTS = [
    {
        id: 'pc-ml',
        name: 'Motta Living',
        tags: [
            'wordpress',
            'woocommerce'
        ],
        description: 'Unique homeware brand Motta Living sell high-end products for all corners of your home, with a high-end ecommerce store to match.',
        link: 'https://mottaliving.co.uk',
        type: 'client'
    },
    {
        id: 'pp-ss',
        name: 'Shape Shiftr - WordPress blank theme',
        tags: [
            'wordpress',
            'gulp',
            'webpack'
        ],
        description: 'Created from scratch whilst in university, and sick of bulky frameworks, my own theme was born.',
        link: 'https://github.com/jackson-lewis/shiftr',
        type: 'personal'
    },
    {
        id: 'pp-wew',
        name: 'WordPress Enhanced Workflow',
        tags: [
            'wordpress',
            'wordpress cli',
            'bash'
        ],
        description: 'A workflow filled with commands designed to automate common everyday tasks, saving DAYS worth of man hours every year.',
        link: 'https://github.com/jackson-lewis/wordpress-enhanced-workflow',
        type: 'personal'
    }
]


export default function Projects() {

    useEffect( () => {
        const pageHeader = document.querySelector( 'main header' )
        let opacityValue = 100

        const watchScroll = () => {
            opacityValue = 100 - ( window.scrollY / 2 )

            /** Don't let the value go below 33 as we want heading to always be there.. */
            opacityValue = opacityValue >= 20 ? opacityValue : 20

            pageHeader.style.opacity = opacityValue / 100
        }

        if ( window.innerWidth >= widthBreakpoints.medium ) {
            window.addEventListener( 'scroll', watchScroll )
        }

        return () => {
            window.removeEventListener( 'scroll', watchScroll )
        }
    }, [] )

    return (
        <Page>
            <PageStyle />
            <SEO title="Projects" />
            <SiteSection>
                <StyledGrid>
                    <StyledPageHeading>
                        <h1>Projects</h1>
                        <p>From bespoke client projects to productivity-boosting personal creations, these projects showcase a range of skills.</p>
                    </StyledPageHeading>

                    <StyledProjects>
                        {
                            PROJECTS.map( project => (
                                <StyledProject key={ `project-${ project.id }` }>
                                    <h2>{ project.name }</h2>
                                    <div className="project-tags sans-font">
                                        { project.tags.map( tag => <span>{ tag }</span> ) }
                                    </div>
                                    <p className="desc">{ project.description }</p>
                                    <StyledLink
                                        to={ project.link }
                                        target="_blank"
                                        rel="noopener"
                                        type="text"
                                        color="primary"
                                        ext>
                                        { project.type === 'client' ? 'Visit site' : 'View repo' }
                                    </StyledLink>
                                </StyledProject>
                            ))
                        }
                    </StyledProjects>
                </StyledGrid>
            </SiteSection>
        </Page>
    )
}
