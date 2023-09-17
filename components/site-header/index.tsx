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
                </div>
            </header>
        </div>
    )
}
