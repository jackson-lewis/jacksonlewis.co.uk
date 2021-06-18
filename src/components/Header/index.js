import React, { useState, useEffect, useRef } from 'react'
import SiteLogo, { LogoGlobalStyle } from './SiteLogo'
import MobileMenuToggle from './MobileMenuToggle'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import { Wrapper, StyledHeader, Container } from './style'


/**
 * The site header.
 */
export default function Header() {
    const [ isToggled, updateToggleState ] = useState( false )
    const [ isMobile, setMobileState ] = useState( true )

    const headerRef = useRef()

    /**
     * Controls header visibility state
     */
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
        function watchScroll() {
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
        function checkWindowWidth() {
            setMobileState( window.innerWidth < 500 )
        }

        checkWindowWidth()
        window.addEventListener( 'resize', checkWindowWidth )

        return () => {
            window.removeEventListener( 'scroll', watchScroll )
            window.removeEventListener( 'resize', checkWindowWidth )
        }
    }, [] )

    /**
     * Controls mobile menu auto close on scroll
     */
    useEffect( () => {
        let startY = 0

        function reset() {
            window.removeEventListener( 'scroll', watchScroll )
            startY = 0
        }

        function watchScroll() {
            const scroll = window.scrollY

            if ( startY === 0 ) {
                startY = scroll
                return
            }

            if ( scroll > startY + 30 || scroll < startY - 30 ) {
                updateToggleState( false )
            }
        }

        if ( isToggled ) {
            window.addEventListener( 'scroll', watchScroll )
        } else {
            reset()
        }

        return () => {
            reset()
        }
    }, [ isToggled ] )

    return (
        <Wrapper isToggled={ isToggled }>
            <LogoGlobalStyle />
            <StyledHeader className="site-header" ref={ headerRef }>
                <Container>
                    <SiteLogo to="/" aria-label="Home">
                        Jackson
                    </SiteLogo>
                    { isMobile
                        ? <MobileMenuToggle isToggled={ isToggled } updateToggleState={ updateToggleState } />
                        : <Menu />
                    }
                </Container>
            </StyledHeader>
            { isMobile ? <MobileMenu isToggled={ isToggled } /> : null }
        </Wrapper>
    )
}
