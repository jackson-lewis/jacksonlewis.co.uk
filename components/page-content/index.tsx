import { ReactNode } from 'react'
import styles from './index.module.scss'

export default function PageContent({children}: {children: ReactNode}) {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}