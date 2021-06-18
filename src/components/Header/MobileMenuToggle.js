import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledMenuToggle = styled.button`
    width: 48px;
    height: 48px;

    background-color: transparent;
    border: none;

    rect {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 400ms cubic-bezier(0.09, 1.32, 1, 1);
    }

    ${ ({ isToggled }) => isToggled && `
        rect:first-child {
            transform: translateY( 4px ) rotateZ( 45deg );
        }

        rect:last-child {
            transform: translateY( -4px ) rotateZ( -45deg );
        }
    `}
`

export default function MobileMenuToggle({ isToggled, updateToggleState }) {

    return (
        <StyledMenuToggle
            type="button"
            onClick={ () => updateToggleState( !isToggled ) }
            isToggled={ isToggled }
        >
            <svg width="18" height="15" viewBox="0 0 18 15">
                <title>Open mobile navigation</title>
                <g fill="#fff">
                    <rect width="18" height="1" y="3" />
                    <rect width="18" height="1" y="11" />
                </g>
            </svg>
        </StyledMenuToggle>
    )
}

MobileMenuToggle.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    updateToggleState: PropTypes.func.isRequired
}
