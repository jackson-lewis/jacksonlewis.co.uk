/**
 * Our Link components
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { pseudoRequired } from './styles/Functions'
import arrowSVG from "./icons/link-arrow.svg"


const StyledLinkRaw = css`
    padding: 0.65rem 1.05rem 0.7rem;
    ${ props => props.$noArrow ? null : `padding-right: 2rem;` }

    text-decoration: none;
    font-size: .8rem;
    font-family: var( --sans-font );
    text-transform: uppercase;
    letter-spacing: 1px;

    transition: 100ms;

    ${ props => props.$noArrow ? null : css`
        position: relative;
        display: inline-block;

        ::after {
            ${ pseudoRequired() }
            top: 0;
            right: .5rem;
            width: 1rem;
            height: 100%;
            transform: translateX( 0 );

            background-image: url( ${ arrowSVG } );
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% auto;

            transition: transform 150ms ease-out;
        }

        :hover {
            ::after {
                transform: translateX( 4px );
            }
        }
    ` }
`

const FilledStyling = css`
    color: var( --black );
    border-radius: var( --border-radius );
    background-color: var( --${ ({ $color }) => $color } );

    :hover {
        background-color: var( --grey );
    }
`

const TextStyling = css`
    padding-left: 0;

    color: var( --${ ({ $color }) => $color } );
`


/**
 * Styling for Link router component with two styles
 */
const RawLink = styled( Link )`
    ${ StyledLinkRaw }

    ${ ({ $type }) => $type === 'filled' ? FilledStyling : TextStyling }
`


/**
 * Apply exact styling to <a> elements for links that 
 * won't be using the router.
 */
const RawA = styled.a`
    ${ StyledLinkRaw }

    ${ ({ $type }) => $type === 'filled' ? FilledStyling : TextStyling }
`


const StyledLink = ({ to, children, ext, type, color, noArrow, target, rel, id }) => {

    const styleProps = {
        $type: type,
        $color: color,
        $noArrow: noArrow
    }

    if ( ! ext ) {
        return (
            <RawLink to={ to } { ...styleProps }>
                { children }
            </RawLink>
        )
    }

    const elProps = {
        target,
        rel,
        id
    }

    return (
        <RawA href={ to } { ...styleProps } { ...elProps }>
            { children }
        </RawA>
    )
}

StyledLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    ext: PropTypes.bool,
    type: PropTypes.oneOf([ 'filled', 'text' ]),
    color: PropTypes.oneOf([ 'white', 'primary' ]),
    noArrow: PropTypes.bool,
    target: PropTypes.string,
    rel: PropTypes.string,
    id: PropTypes.string,
}

StyledLink.defaultProps = {
    ext: false,
    type: 'filled',
    color: 'white',
    noArrow: false,
    target: '',
    rel: '',
    id: ''
}


export default StyledLink
