/**
 * The '404' page
 */
import React from "react"
import { createGlobalStyle } from "styled-components"
import Page from "@components/Page"
import SEO from "@components/_SEO"
import Error404 from "@components/Error404"


const Page404Styles = createGlobalStyle`
    body {
        --very-dark-white: var( --white );

        min-height: 100vh;
        height: 100%;
        
        background-image: radial-gradient( ellipse at bottom right, rgba( 244, 28, 81, 1 ), rgba( 244, 28, 81, 0 ) ), radial-gradient( ellipse at top left, rgba( 44, 133, 255, 1 ), rgba( 44, 133, 255, 0 ) );
        background-size: 200% 200%;
        background-position: 75% 75%, 25% 25%;
        color: var( --white );
    }

    footer {
        background-color: transparent !important;

        > div {
            border-top: 1px solid var( --white ) !important;
        }
    }

    *::selection {
        color: var( --white );
        background: var( --black );
    }
`

const NotFoundPage = () => {
    return (
        <Page>
            <Page404Styles />
            <SEO title="404: Page not found" />
            <Error404 />
        </Page>
    )
}


export default NotFoundPage
