import Link from 'next/link'
import styles from './index.module.scss'

export default function MobileMenu({isToggled}: {isToggled: boolean}) {
  return (
    <div className={[styles.wrapper, isToggled ? styles.active : ''].filter(Boolean).join(' ')}>
      <nav>
        <ul className={styles.ul} role="menu">
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
    </div>
  )
}