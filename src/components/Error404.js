/**
 * 404 Error Page Content
 */
import React from "react"
import styled from "styled-components"
import { getBaseline } from "./styles/Functions"


const Error404Wrapper = styled.div`
    width: 100vw;
    min-height: calc( 100vh - 192px );
    display: grid;
    align-items: center;
`

const Error404Content = styled.div`
    margin: auto;

    text-align: center;
    color: var( --white );

    h1 {
        margin-bottom: ${ getBaseline( .5 ) };
        color: var( --white );

        font-size: clamp( 3.75rem, 6vw, 5.625rem );
    }
`


const Error404 = () => {
    return (
        <Error404Wrapper>
            <Error404Content>
                <h1>Four, oh… shit.</h1>
                <p>This isn’t right, let’s get back on our feet.</p>
            </Error404Content>
        </Error404Wrapper>
    )
}

export default Error404
