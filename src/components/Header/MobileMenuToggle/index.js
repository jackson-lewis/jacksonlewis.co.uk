import React from 'react'
import PropTypes from 'prop-types'
import { Toggle } from './style'



export default function MobileMenuToggle({ isToggled, updateToggleState }) {

    return (
        <Toggle
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
        </Toggle>
    )
}

MobileMenuToggle.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    updateToggleState: PropTypes.func.isRequired
}
