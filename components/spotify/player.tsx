'use client'

import Image from 'next/image'
import { AblumImage } from '../../lib/spotify'
import useSpotifyPlayer from '../../lib/use-spotify-player'

export const IMAGE_SIZE = 100

export default function Player() {
  const playerTrack = useSpotifyPlayer()

  if (!playerTrack) {
    return <p>Not listening</p>
  }

  const playerImage: AblumImage = playerTrack.album.images[0]

  return (
    <>
      <Image
        src={playerImage.url}
        alt="Album cover"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
      <div>
        <h3>{playerTrack.name}</h3>
        <p>{playerTrack.artists.map(artist => {
          return artist.name
        }).join(', ')}</p>
      </div>
    </>
  )
}