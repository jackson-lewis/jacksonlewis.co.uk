/**
 * Site header
 */
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { SiteContainer } from '@components/Global/SiteLayout'
import { minWidth } from '@styles/MediaQueries'
import StyledLogo, { LogoGlobalStyle } from './Logo'
import MobileMenuToggle from './MobileMenuToggle'
import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'


/**
 * The wrapper contains both the site header and the mobile menu
 */
const StyledHeaderWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 100;

    transition: 300ms;

    &.pre-set-reveal {
        display: none;
        position: fixed;
        top: 0;
        transform: translateY( -100% );
    }

    &.set-reveal {
        height: var( --header-height );
        display: block;

        background-color: rgba( 30, 30, 30, .8 );
        backdrop-filter: blur( 4px ) saturate( 90% );

        a[aria-label="Home"] {
            color: var( --primary ) !important;
        }
    }

    &.hey-hey {
        transform: translateY( 0 );
    }
`

const StyledHeader = styled.header`
    width: 100vw;
    height: var( --header-height );
    padding: 6px var( --site-margin );
    z-index: 10;

    color: var( --white );

    a {
        color: inherit;
        text-decoration: none;
    }
`

const StyledSiteContainer = styled( SiteContainer )`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${ minWidth.as( 500 ) } {
        height: 48px;
    }
`


const Header = () => {
    const [ isToggled, updateToggleState ] = useState( false )
    const [ isMobile, setMobileState ] = useState( true )

    const headerRef = useRef()

    useEffect( () => {
        /**
         * Handle scroll watching of header display
         */
        const siteHeaderWrapper = headerRef.current.parentElement

        let minScroll = 120
        // Increase the min scroll value for homepage
        if ( window.location.pathname === '/' ) {
            minScroll = window.innerHeight / 1.5
        }

        let prevScroll = 0
        const watchScroll = () => {
            const scroll = window.scrollY

            if ( scroll > minScroll ) {
                siteHeaderWrapper.classList.add( 'pre-set-reveal' )

                setTimeout( () => {
                    siteHeaderWrapper.classList.add( `set-reveal` )
                }, 50 )

                if ( scroll < prevScroll ) {
                    
                    if ( prevScroll > scroll + 60 ) {
                        siteHeaderWrapper.classList.add( 'hey-hey' )
                    } else {
                        return
                    }
                } else {
                    siteHeaderWrapper.classList.remove( 'hey-hey' )
                }
            } else if ( scroll > prevScroll || scroll <= 0 ) {
                siteHeaderWrapper.classList.remove( 'pre-set-reveal', 'set-reveal', 'hey-hey' )
            }

            prevScroll = scroll
        }
        window.addEventListener( 'scroll', watchScroll )

        /**
         * Handle menu version to display
         */
        const checkWindowWidth = () => {
            setMobileState( window.innerWidth < 500 )
        }

        checkWindowWidth()
        window.addEventListener( 'resize', checkWindowWidth )

        return () => {
            window.removeEventListener( 'scroll', watchScroll )
            window.removeEventListener( 'resize', checkWindowWidth )
        }
    }, [] )

    return (
        <StyledHeaderWrapper isToggled={ isToggled }>
            <LogoGlobalStyle />
            <StyledHeader className="site-header" ref={ headerRef }>
                <StyledSiteContainer>
                    <StyledLogo to="/" aria-label="Home">
                        Jackson
                    </StyledLogo>
                    { isMobile
                        ? <MobileMenuToggle isToggled={ isToggled } updateToggleState={ updateToggleState } />
                        : <MainMenu />
                    }
                </StyledSiteContainer>
            </StyledHeader>
            { isMobile ? <MobileMenu isToggled={ isToggled } /> : null }
        </StyledHeaderWrapper>
    )
}


export default Header
