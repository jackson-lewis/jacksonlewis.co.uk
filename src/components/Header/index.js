/**
 * Site header
 */
import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { SiteContainer } from '@components/SiteLayout'
import { minWidth } from '@styles/MediaQueries'
import StyledLogo from './Logo'
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

    ${ ({ isToggled }) => isToggled ? css`
        background-color: rgba( 30, 30, 30, .8 );
        backdrop-filter: blur( 4px ) saturate( 90% );
    ` : null }
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


    useEffect( () => {
        const checkWindowWidth = () => {
            setMobileState( window.innerWidth < 500 )
        }

        checkWindowWidth()
        window.addEventListener( 'resize', checkWindowWidth )

        return () => {
            window.removeEventListener( 'resize', checkWindowWidth )
        }
    }, [] )

    return (
        <StyledHeaderWrapper isToggled={ isToggled }>
            <StyledHeader>
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
