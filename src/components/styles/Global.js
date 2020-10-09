import { createGlobalStyle } from "styled-components"
import { getBaseline } from "./Functions"
import { minWidth } from "./MediaQueries"
import { colors, typography } from "./Variables"


const GlobalStyles = createGlobalStyle`
    :root {
        --primary: ${ colors.primary };
        --secondary: ${ colors.secondary };

        --blue: ${ colors.blue };

        --white: ${ colors.white };
        --pure-white: ${ colors.pureWhite };
        --dark-white: ${ colors.darkWhite };
        --very-dark-white: ${ colors.veryDarkWhite };
        --black: ${ colors.black };
        --pure-black: ${ colors.pureBlack };
        --grey: ${ colors.grey };

        --body-color: var( --black );
        --heading-color: #86797C;
        --link-color: var( --blue );
        --outline-color: #403838;

        --serif-font: 'Vollkorn', serif;
        --sans-font: 'Source Sans Pro', sans-serif;
        --heading-font: 'Rubik', sans-serif;

        --base-font-size: ${ typography.baseFontSize }rem;
        --base-line-height: ${ typography.baseLineHeight };
        --baseline: calc( var( --base-font-size ) * var( --base-line-height ) );

        --header-height: 60px; 
        --site-margin: 20px;
        --site-gutter: 20px;
        --border-radius: 4px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    *::selection {
        color: var( --black );
        background: var( --primary );
        text-shadow: none;
    }

    body {
        margin: 0;
        
        font-family: var( --sans-font );
        font-size: var( --base-font-size );
        font-weight: 400;
        font-style: normal;
        line-height: var( --base-line-height );
        color: var( --white );
        background-color: var( --body-color );

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    p {
        margin: 0 0 ${ getBaseline() };

        :last-child {
            margin-bottom: 0;
        }

        @media ${ minWidth.medium } {
            font-size: 1.125rem;
        }
    }

    a {
        color: var( --link-color );

        :hover {
            text-decoration: none;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        font-family: var( --heading-font );
        color: var( --heading-color );
        line-height: 1.5;
    }

    h1 {
        margin: 0;

        font-size: clamp( 3rem, 4vw, 4rem );
    }

    h2 {
        margin: 0 0 ${ getBaseline( .5 ) };

        font-size: clamp( 1.8rem, 3vw, 2.4rem );
    }

    h3 {
        margin: 0 0 ${ getBaseline( .5 ) };
    }

    .sans-font {
        font-family: var( --sans-font );
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`


export { GlobalStyles }
