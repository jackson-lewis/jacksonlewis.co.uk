import { LastPlayedTime } from '../../components/spotify'
import { AblumImage, player, recentlyPlayed } from '../../lib/spotify'
import styles from './page.module.scss'

const IMAGE_SIZE = 100

export default async function Spotify() {
  const recentItems = await recentlyPlayed()
  const playerTrack = await player()
  let playerImage: boolean | AblumImage = false

  if (playerTrack) {
    playerImage = playerTrack.album.images[0]
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <h1>Spotify</h1>
        <h2>Playing Now</h2>
        {playerTrack && playerImage ? (
          <>
            <img src={playerImage.url} width={IMAGE_SIZE} height={IMAGE_SIZE} />
            <div>
              <h3>{playerTrack.name}</h3>
              <p>{playerTrack.artists.map(artist => {
                return artist.name
              }).join(', ')}</p>
            </div>
          </>
        ) : (
          <p>Not listening</p>
        )}
        <h2>Recently Played</h2>
        <LastPlayedTime recentItem={recentItems[0]} />
        <ul>
          {recentItems.map(({ track }) => {
            const image = track.album.images[0]
            return (
              <li key={track.id}>
                <img src={image.url} width={IMAGE_SIZE} height={IMAGE_SIZE} />
                <div>
                  <h3>{track.name}</h3>
                  <p>{track.artists.map(artist => {
                    return artist.name
                  }).join(', ')}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}