'use server'

import { SpotifyItem, Track, baseUrl } from '../lib/spotify'

export async function player(): Promise<Track | false> {
  return await fetch(`${baseUrl}/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`
    },
    cache: 'no-cache'
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Player not active.')
      }

      return res.json()
    })
    .then((data: { item: Track }) => {
      return data.item
    })
    .catch(() => {
      return false
    })
}

export async function recentlyPlayed(): Promise<SpotifyItem[] | null> {
  try {
    const res = await fetch(`${baseUrl}/v1/me/player/recently-played?limit=3`, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`
      },
      cache: 'no-cache'
    })
  
    if (!res.ok) {
      const error = await res.json()
      throw new Error(error.message)
    }

    return await res.json()
  } catch (error) {
    return null
  }
}

