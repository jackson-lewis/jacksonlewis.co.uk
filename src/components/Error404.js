/**
 * 404 Error Page Content
 */
import React from "react"
import styled from "styled-components"
import { getBaseline } from "./styles/Functions"


const Error404Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    align-items: center;

    background-image: radial-gradient( ellipse at top left, var( --secondary ), transparent ),
                    radial-gradient( ellipse at bottom right, var( --primary ), transparent );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Error404Content = styled.div`
    margin: auto;

    text-align: center;
    color: var( --white );

    h1 {
        margin-bottom: ${ getBaseline( .5 ) };

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
