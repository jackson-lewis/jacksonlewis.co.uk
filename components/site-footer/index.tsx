import styles from './index.module.scss'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.socials}>
          <a href="https://github.com/jackson-lewis">GitHub</a>
          &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
          <a href="https://www.instagram.com/jacksonrlewis_">Instagram</a>
          &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/jacksonrlewis/">LinkedIn</a>
        </div>
        <p>
          <small>
            Built with
            {' '}
            <a href="https://nextjs.org/">Next.js</a>
            , hosted on
            {' '}
            <a href="https://vercel.com/">Vercel</a>
          </small>
        </p>
      </div>
    </footer>
  )
}
