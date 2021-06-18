import React, { useEffect, useRef } from "react"
import { useParallax } from "../../../effects/parallax"
import { Section, Content, Image } from "./style"


export default function Car({ children, image }) {
    const ref = useRef()
    const contentRef = useRef()

    useEffect( () => {
        const carSection = ref.current,
            content = contentRef.current

        function parallax() {
            const position = ( window.scrollY + content.getBoundingClientRect().top ) * 1

            content.style.transform = `translateY(${ position }px)`
        }

        function callback( entries ) {
            entries.forEach( entry => {
                // eslint-disable-next-line
                entry.target.style.zIndex = entry.isIntersecting ? 40 : 10
            } )
        }

        const observer = new IntersectionObserver( callback, {
            rootMargin: '80px'
        })

        observer.observe( carSection )
    }, [] )

    return (
        <Section id="car-yobbo" ref={ ref }>
            <Image
                fluid={ image }
                style={{ position: 'absolute' }}
            />
            <Content ref={ contentRef }>
                { children }
            </Content>
        </Section>
    )
}
