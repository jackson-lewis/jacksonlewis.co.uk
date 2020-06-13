import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'


const LinkArrow = ({ children, to }) => {

    return (
        <Link to={ to } className={ `link-arrow` }>{ children }</Link>
    )
}

LinkArrow.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.node.isRequired
}

export default LinkArrow
