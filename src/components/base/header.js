/**
 * Header
 */


// Main
import { Link } from "gatsby"
import React from "react"

// Styles
import Styles from '../../styles/base/header.module.scss';


export default () => (
  <header className={ Styles.siteHeader }>
    <div className={ Styles.container }>
      <Link to={ `/` } className={ Styles.logo } aria-label={ 'Home' }>
        Jackson.
      </Link>
    </div>
  </header>
);
