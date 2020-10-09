/**
 * index.js
 * 
 * The 'home' page
 */

// Core
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "@components/_SEO"
import Page from "@components/Page"
import StandardHero from "@components/StandardHero"
import ProjectsLoop from "@components/ProjectsLoop"
import ContentBlock from "@components/ContentBlock"
import StyledLink from "@components/Link"
import { minWidth, widthBreakpoints } from "@styles/MediaQueries"
import { getBaseline } from "@styles/Functions"
import { SiteSection, SiteContainer } from "@components/SiteLayout"
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
        font-weight: 700;
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
    
    :not(:last-child) {
        margin-bottom: 50px;
        padding-bottom: 50px;

        border-bottom: 1px solid #575757;
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
            padding: 2px 8px;
            display: block;

            font-size: .8rem;
            background-color: #1D1D1D;
            color: #D3C8C8;
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
        padding-right: 40px;
    }
`


const Projects = () => {

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
                        <p>Browse the finest collection of my latest work, ranging from agency work to those evening personal projects…</p>
                    </StyledPageHeading>

                    <StyledProjects>
                        <StyledProject>
                            <h2>Motta Living</h2>
                            <div className="project-tags sans-font">
                                <span>wordpress</span>
                                <span>woocommerce</span>
                            </div>
                            <p className="desc">Unique homeware brand Motta Living sell all your homeware needs from lighting to garden, with a highly bespoke ecommerce store to match.</p>
                            <StyledLink to="https://mottaliving.co.uk" type="text" color="primary" ext>
                                View site
                            </StyledLink>
                        </StyledProject>
                        <StyledProject>
                            <h2>Shape Shiftr - WordPress blank theme</h2>
                            <div className="project-tags sans-font">
                                <span>wordpress</span>
                                <span>gulp</span>
                                <span>webpack</span>
                            </div>
                            <p className="desc">Created from scratch whilst in university, and sick of bulky frameworks, my own theme was born.</p>
                            <StyledLink to="https://mottaliving.co.uk" type="text" color="primary" ext>
                                View repo
                            </StyledLink>
                        </StyledProject>
                        <StyledProject>
                            <h2>Kayospruce</h2>
                            <div className="project-tags sans-font">
                                <span>magento 2</span>
                                <span>next.js</span>
                                <span>apollo</span>
                            </div>
                            <p className="desc">Ecommerce sailing provider Kayospruce get a truely modern take on the ecommerce world with a React powered Magento 2 store.</p>
                            <StyledLink to="https://mottaliving.co.uk" type="text" color="primary" ext>
                                View site
                            </StyledLink>
                        </StyledProject>
                    </StyledProjects>
                </StyledGrid>
            </SiteSection>
        </Page>
    )
}

export default Projects
