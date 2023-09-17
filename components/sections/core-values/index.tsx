import styles from './index.module.scss'

export default function CoreValues() {
    return (
        <div className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Core Values</h2>
                </div>
                <div  className={styles.columns}>
                    <div className={styles.column}>
                        <h3>Problem Solving</h3>
                        <p>Over 5 years I’ve delivered positive impacts to marketing teams through greater autonomy to everyday tasks.</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Innovation</h3>
                        <p>Searching for new ways of working with the foresight of where technology is headed.</p>
                    </div>
                    <div className={styles.column}>
                        <h3>Mentoring</h3>
                        <p>Supporting developers of all levels to define company standards while catering to individual styles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}