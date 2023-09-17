import { RefObject, useEffect } from 'react'

/**
 * Apply a simple parallax effect to an element.
 * 
 * @param {object} ref The React Ref object
 * @param {number} speed Set the vertical speed of the effect
 * @param {boolean} setOpacity Apply opacity to the element
 */
export default function useParallax(ref: RefObject<HTMLElement>, speed: number = 0, setOpacity: boolean = false) {
    useEffect(() => {
        function parallax() {
            const el = ref.current

            if (!el) {
                return
            }

            el.style.transform = `translateY(${window.scrollY * speed}px)`

            if (setOpacity) {
                el.style.opacity = `${1 - (window.scrollY / 400)}`
            }
        }
        window.addEventListener('scroll', parallax)

        return () => window.removeEventListener('scroll', parallax)
    }, [ref, speed, setOpacity])
}