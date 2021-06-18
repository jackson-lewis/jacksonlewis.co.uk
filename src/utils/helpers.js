

/**
 * Takes an <svg> as a strnig and returns it URI encoded.
 * 
 * @param {string} rawSvg A svg element as a string
 */
export function svgBg( rawSvg = '' ) {
    let encoded = encodeURIComponent( rawSvg )
    /**
     * The following replacement is necessary in order to get 
     * SVG's in background-image to play nice wit styled-components.
     */
    encoded = arrow.replace( /(\()/g, '%28' )
    encoded = arrow.replace( /(\))/g, '%29' )

    return encoded
}

/**
 * To be removed...
 */
export const temp = ''
