import Player from '../../components/spotify/player'
import RecentlyPlayed from '../../components/spotify/recently-played'
import styles from './page.module.scss'


export default async function Spotify() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1>Spotify</h1>
        <h2>Playing Now</h2>
        <Player />
        <h2>Recently Played</h2>
        <RecentlyPlayed />
      </div>
    </main>
  )
}