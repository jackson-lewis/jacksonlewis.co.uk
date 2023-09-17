'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import useParallax from '../../lib/parallax'
import MamTorImage from '../../public/images/mam_tor-walking.jpeg'
import MamTorMobileImage from '../../public/images/mam_tor-walking-mobile.jpeg'

export default function HeroLarge() {
    const heroContentRef = useRef<HTMLDivElement>(null)
    const heroImageRef = useRef<HTMLImageElement>(null)

    useParallax( heroContentRef, -0.5, true )
    useParallax( heroImageRef, -0.25 )


    return (
        <div className={styles.wrapper}>
            <div className={styles.background} ref={heroImageRef}>
                <Image
                    src={ MamTorMobileImage }
                    alt="Me, walking up Mam Tor, walking away from the camera"
                    priority={ true }
                />

                <Image
                    src={ MamTorImage }
                    alt="Me, walking up Mam Tor, walking away from the camera"
                    priority={ true }
                />
            </div>
            <div className={styles.content}>
                <div className="container">
                    <div ref={heroContentRef}>
                        <h1 className={styles.h1}>A <strong>backend developer</strong> with a craft for <strong>problem solving</strong> and&nbsp;embracing the outdoors</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}