import styled from 'styled-components'
import { SiteContainer } from '@components/Global/SiteLayout'
import { minWidth } from '@styles/MediaQueries'


export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 100;

    transition: 400ms;

    &.pre-set-reveal {
        display: none;
        position: fixed;
        top: 0;
    }

    &.set-reveal {
        height: var( --header-height );
        display: block;
        opacity: 0;

        background-color: rgba( 30, 30, 30, .8 );
        backdrop-filter: blur( 4px ) saturate( 90% );

        a[aria-label="Home"] {
            color: var( --primary ) !important;
        }
    }

    &.hey-hey {
        opacity: 1;
    }
`


export const StyledHeader = styled.header`
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


export const Container = styled( SiteContainer )`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${ minWidth.as( 500 ) } {
        height: 48px;
    }
`
