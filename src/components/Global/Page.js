/**
 * Layout
 * 
 * The layout component is at the core of bringing
 * together the overall layout of the page.
 */
import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from "../styles/Global"
import Header from "../Header"
import Footer from "../Footer"


export default function Page({ children }) {

    return (
        <>
            <Header />
            <GlobalStyles />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired
}
