import styled from "styled-components"
import { minWidth } from "@components/styles/MediaQueries"
import Img from 'gatsby-image'


export const Image = styled( Img )`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    position: fixed !important;
    top: 0;
`


export const Content = styled.div`
    max-width: 580px;
    margin-left: auto;
    padding: 30px 15px;

    border-radius: 8px;
    background-color: rgba( 0, 0, 0, .6 );
    backdrop-filter: blur( 6px );
    box-shadow: 0 0 12px rgba( 0, 0, 0, .3 ),
                0 0 24px rgba( 0, 0, 0, .2 ),
                0 0 36px rgba( 0, 0, 0, .1 );
    position: relative;
    z-index: 20;

    h2, h3 {
        color: var( --white );
    }

    p {
        color: var( --white );
    }

    @media ${ minWidth.medium } {
        width: 60%;
        padding: 50px 30px;
    }
`


export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    //min-height: -webkit-fill-available;
    padding: 60px var( --site-margin );
    position: relative;
    z-index: 20;
    overflow: hidden;
    display: grid;
    align-items: center;

    @media ${ minWidth.large } {
        display: grid;
        align-items: center;
    }
`