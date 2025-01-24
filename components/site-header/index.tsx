'use client'

import Link from 'next/link'
import styles from './index.module.scss'

export default function SiteHeader() {
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
