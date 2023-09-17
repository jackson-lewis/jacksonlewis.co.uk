'use client'

import Link from 'next/link'
import styles from './index.module.scss'
import { useState } from 'react'
import MobileMenu from './mobile-menu'

export default function SiteHeader() {
    const [isToggled, updateToggleState] = useState(false)

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={`container ${styles.container}`}>
                    <Link href="/">Jackson</Link>
                    <nav className={styles.nav}>
                        <ul role="menu">
                            <li role="menuitem">
                                <Link href="/work">Work</Link>
                            </li>
                            <li role="menuitem">
                                <Link href="/life">Life</Link>
                            </li>
                            <li role="menuitem">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <button
                        type="button"
                        className={[styles['mobile-menu-trigger'], isToggled ? styles.active : ''].filter(Boolean).join(' ')}
                        onClick={() => updateToggleState(!isToggled)}
                    >
                        <svg width="18" height="15" viewBox="0 0 18 15">
                            <title>Open mobile navigation</title>
                            <g fill="#fff">
                                <rect width="18" height="1" y="3" />
                                <rect width="18" height="1" y="11" />
                            </g>
                        </svg>
                    </button>
                </div>
            </header>
            <MobileMenu isToggled={isToggled} />
        </div>
    )
}
