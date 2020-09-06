/**
 * Layout
 * 
 * The layout component is at the core of bringing
 * together the overall layout of the page.
 */

// Core
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyles } from "./styles/Global"
import Header from "./Header"
import Footer from "./Footer"


const Main = styled.main``


const Page = ({ children }) => {

    return (
        <>
            <Header />
            <GlobalStyles />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    )
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Page
