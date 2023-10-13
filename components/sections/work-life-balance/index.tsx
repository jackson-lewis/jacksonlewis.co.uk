import Link from 'next/link'
import styles from './index.module.scss'

export default function WorkLifeBalance() {
  return (
    <div className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <p>A seasoned developer committed to shaping a brighter future in the digital space, delivering effective solutions to everyday challenges.</p>
          {/* <Link href="/work" className={`${styles.button} ${styles['color-primary']}`}><span>Work</span><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M9.31 6.71a.996.996 0 000 1.41L13.19 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z' fill='var(--primary)'/></svg></Link> */}
        </div>
        <div className={styles.column}>
          <p>Out of hours, I&apos;m an avid car guy who is always happy to be the designated driver. On the weekend I&apos;ll likely be out in the wilderness on hikes.</p>
          {/* <Link href="/life" className={`${styles.button} ${styles['color-secondary']}`}><span>Life</span><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M9.31 6.71a.996.996 0 000 1.41L13.19 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z' fill='var(--secondary)'/></svg></Link> */}
        </div>
      </div>
    </div>
  )
}
