import { AblumImage, player, recentlyPlayed } from '../../lib/spotify'

export default async function Spotify() {
  const items = await recentlyPlayed()
  const playerTrack = await player()
  let playerImage: boolean | AblumImage = false

  if (playerTrack) {
    playerImage = playerTrack.album.images[0]
  }

  return (
    <>
      <h1>Spotify</h1>
      <h2>Playing Now</h2>
      {playerTrack && playerImage ? (
        <>
          <img src={playerImage.url} width={playerImage.width} height={playerImage.height} />
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
      {items.map(({ track }) => {
        const image = track.album.images[0]
        return (
          <li key={track.id}>
            <img src={image.url} width={image.width} height={image.height} />
            <div>
              <h3>{track.name}</h3>
              <p>{track.artists.map(artist => {
                return artist.name
              }).join(', ')}</p>
            </div>
          </li>
        )
      })}
    </>
  )
}