import { useEffect } from 'react'

/**
 * 
 */
export function useParallax( elRef, speed = 0 ) {
    useEffect( () => {
        function parallax() {
            const el = elRef.current

            const position = window.scrollY * speed
            const opacity = 1 - ( window.scrollY / 400 )

            el.style.transform = `translateY(${ position }px)`
            el.style.opacity = opacity
        }
        window.addEventListener( 'scroll', parallax )

        return () => window.removeEventListener( 'scroll', parallax )
    }, [] )
}