/**
 * The '404' page
 */
import React from "react"
import { createGlobalStyle } from "styled-components"
import Page from "@components/Page"
import SEO from "@components/Seo"
import Error404 from "@components/Error404"


const Page404Styles = createGlobalStyle`
    footer {
        position: absolute;
    }
`

const NotFoundPage = () => {
    return (
        <Page>
            <Page404Styles />
            <SEO title="404: Not found" />
            <Error404 />
        </Page>
    )
}


export default NotFoundPage
