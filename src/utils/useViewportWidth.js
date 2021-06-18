import { useEffect, useState } from 'react'
import { widthBreakpoints } from '@components/styles/MediaQueries'


/**
 * Determines the viewport width, and sets a isMobile state 
 * based on breadkpoints set in styles.
 * 
 * @returns {object} Info on current state of viewport width
 */
export default function useViewportWidth() {
    const [ viewportWidth, setViewportWidth ] = useState( 0 )
    const [ isMobile, setIsMobile ] = useState( true )

    useEffect( () => {
        function watchViewportWidthChange() {
            const windowWidth = window.innerWidth

            setIsMobile( windowWidth < widthBreakpoints.medium )

            // Update the main width var
            setViewportWidth( windowWidth )
        }

        watchViewportWidthChange()
        window.addEventListener( 'resize', watchViewportWidthChange )
        window.addEventListener( 'orientationchange', watchViewportWidthChange )

        return () => {
            window.removeEventListener( 'resize', watchViewportWidthChange )
            window.removeEventListener( 'orientationchange', watchViewportWidthChange )
        }
    }, [] )

    return {
        viewportWidth,
        isMobile
    }
}
