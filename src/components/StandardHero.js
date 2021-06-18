/**
 * Master Hero
 */
import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { minWidth } from './styles/MediaQueries'
import { getBaseline } from './styles/Functions'


const StyledStandardHero = styled.div`
    width: 100%;
    max-height: 40rem;
    margin-bottom: ${ getBaseline( 2 ) };
    padding: 0 1rem;
    padding-top: calc( var( --header-height ) + ${ getBaseline( 2 ) } );
    padding-bottom: ${ getBaseline( 2 ) };

    background-image:  radial-gradient( ellipse at top right, var( --primary ), transparent ),
                       radial-gradient( ellipse at bottom left, var( --secondary ), transparent );

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    color: var( --white );
    text-align: center;

    h1 {
        margin-bottom: ${ getBaseline( .25 ) }
    }

    p {
        font-size: 1.1rem;
    }

    @media ${ minWidth.medium } {
        margin-bottom: ${ getBaseline( 4 ) };
    }
`

const StyledContent = styled.div`
    max-width: 45.625rem;
    margin: auto;
`


export default function StandardHero({ children }) {

    return (
        <StyledStandardHero>
            <StyledContent>
                { children }
            </StyledContent>
        </StyledStandardHero>
    )
}

StandardHero.propTypes = {
    children: PropTypes.node.isRequired
}
