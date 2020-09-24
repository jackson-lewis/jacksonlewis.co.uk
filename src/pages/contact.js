/**
 * The contact page
 */
import React from "react"
import { createGlobalStyle } from "styled-components"
import Page from "@components/Page"
import SEO from "@components/_SEO"
import ContactContent from "@components/Contact"


const PageStyles = createGlobalStyle`
    body {
        --very-dark-white: var( --white );

        min-height: 100vh;
        height: 100%;
        
        background-image: radial-gradient( ellipse at top left, var( --secondary ), transparent ),
                      radial-gradient( ellipse at bottom right, var( --primary ), transparent );
    
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        color: var( --white );
    }

    *::selection {
        color: var( --white );
        background: var( --black );
    }
`


const Contact = () => (
    <Page>
        <SEO title="Contact" />
        <PageStyles />
        <ContactContent />
    </Page>
)


export default Contact
