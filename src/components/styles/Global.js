import { createGlobalStyle } from "styled-components"
import { colors, typography } from "./Variables"


const GlobalStyles = createGlobalStyle`
    :root {
        --primary: ${ colors.primary };
        --secondary: ${ colors.secondary };

        --blue: ${ colors.blue };

        --white: ${ colors.white };
        --black: ${ colors.black };
        --grey: ${ colors.grey };

        --body-color: var( --black );
        --heading-color: var( --white );
        --link-color: var( --blue );
        --outline-color: #403838;

        --serif-font: 'Source Serif Pro', serif;
        --sans-font: 'Source Sans Pro', sans-serif;

        --base-font-size: ${ typography.baseFontSize }rem;
        --base-line-height: ${ typography.baseLineHeight };
        --baseline: calc( var( --base-font-size ) * var( --base-line-height ) );

        --header-height: 60px;
        --site-margin: 16px;
        --site-gutter: 16px;
        --border-radius: 4px;
    }

    body {
        margin: 0;
        
        font-family: var( --serif-font );
        font-size: var( --base-font-size );
        font-weight: 400;
        font-style: normal;
        color: var( --white );
        background-color: var( --body-color );

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: var( --link-color );

        :hover {
            text-decoration: none;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        color: var( --heading-color );
    }

    .sans-font {
        font-family: var( --sans-font );
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`


export { GlobalStyles }
