import React, { useState, useEffect, useRef } from 'react'
import StyledLogo, { LogoGlobalStyle } from './Logo'
import MobileMenuToggle from './MobileMenuToggle'
import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'
import { Wrapper, StyledHeader, Container } from './style'


/**
 * The site header.
 */
export default function Header() {
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
                    siteHeaderWrapper.classList.add( 'set-reveal' )
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
        <Wrapper isToggled={ isToggled }>
            <LogoGlobalStyle />
            <StyledHeader className="site-header" ref={ headerRef }>
                <Container>
                    <StyledLogo to="/" aria-label="Home">
                        Jackson
                    </StyledLogo>
                    { isMobile
                        ? <MobileMenuToggle isToggled={ isToggled } updateToggleState={ updateToggleState } />
                        : <MainMenu />
                    }
                </Container>
            </StyledHeader>
            { isMobile ? <MobileMenu isToggled={ isToggled } /> : null }
        </Wrapper>
    )
}
