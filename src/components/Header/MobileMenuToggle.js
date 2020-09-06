import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SVG from './hamburger-icon.svg'

const StyledMenuToggle = styled.button`
    width: 48px;
    height: 48px;

    background-color: transparent;
    background-image: url( ${ SVG } );
    background-size: 24px auto;
    background-repeat: no-repeat;
    background-position: center;
    border: none;
    font-size: 0;
`

const MobileMenuToggle = ({ isToggled, updateToggleState }) => (
    <StyledMenuToggle type="button" onClick={ () => updateToggleState( !isToggled ) }>Menu</StyledMenuToggle>
)

MobileMenuToggle.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    updateToggleState: PropTypes.func.isRequired
}


export default MobileMenuToggle
