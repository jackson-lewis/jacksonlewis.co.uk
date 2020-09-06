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

        --body-color: var( --grey );
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
        font-family: var( --serif-font );

        font-size: var( --base-font-size );
        font-weight: 400;
        font-style: normal;
        color: var( --body-color );
    }

    .sans-font {
        font-family: var( --sans-font );
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`


export { GlobalStyles }
