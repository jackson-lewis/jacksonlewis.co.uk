import { useEffect } from 'react'

/**
 * 
 */
export function useParallax( elRef, speed = 0, setOpacity = false ) {
    useEffect( () => {
        function parallax() {
            const el = elRef.current

            const position = window.scrollY * speed
            const opacity = 1 - ( window.scrollY / 400 )

            el.style.transform = `translateY(${ position }px)`

            if ( setOpacity ) {
                el.style.opacity = opacity
            }
        }
        window.addEventListener( 'scroll', parallax )

        return () => window.removeEventListener( 'scroll', parallax )
    }, [] )
}