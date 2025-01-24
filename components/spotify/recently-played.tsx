'use client'

import Image from 'next/image'
import { IMAGE_SIZE } from './player'
import useSpotifyRecentlyPlayed from '../../lib/use-spotify-recently-played'
import LastPlayedTime from './last-played-time'

export default function RecentlyPlayed() {
  const recentItems = useSpotifyRecentlyPlayed()

  console.log({ recentItems })

  if (!recentItems) {
    return <p>No recent items</p>
  }

  return (
    <>
      <LastPlayedTime item={recentItems[0]} />
      <ul>
        {recentItems.map(({ track }) => {
          const image = track.album.images[0]
          return (
            <li key={track.id}>
              <Image
                src={image.url}
                alt="Album cover"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
              />
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
    </>
  )
}