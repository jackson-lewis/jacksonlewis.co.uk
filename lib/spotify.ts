export const baseUrl = 'https://api.spotify.com'


export type AblumImage = {
  width: number
  height: number
  url: string
}

export type Track = {
  id: string
  name: string
  artists: {
    href: string
    name: string
  }[]
  album: {
    href: string
    name: string
    images: AblumImage[]
  }
}

export type SpotifyItem = {
  track: Track
  played_at: string
  context: any
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

/**
 * Calculate the last played time stamp relative to the nearest
 * whole unit (second/minute/hour)
 */
export function lastPlayedTimeStamp(lastPlayedItem: SpotifyItem) {
  const now = new Date()
  const lastPlayed = new Date(lastPlayedItem.played_at)
  const MS_DIFF = now.getTime() - lastPlayed.getTime()

  const MS_IN_SECOND = 1000
  const MS_IN_MINUTE = MS_IN_SECOND * 60
  const MS_IN_HOUR = MS_IN_MINUTE * 60
  const MS_IN_DAY = MS_IN_HOUR * 24

  const hours = Math.floor((MS_DIFF % MS_IN_DAY) / MS_IN_HOUR)
  const minutes = Math.floor((MS_DIFF % MS_IN_HOUR) / MS_IN_MINUTE)
  const seconds = Math.floor((MS_DIFF % MS_IN_MINUTE) / MS_IN_SECOND)

  return `${hours > 0 ? 
    `${hours} hour${hours > 1 ? 's' : ''}` :
    minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` :
      `${seconds} second${seconds > 1 ? 's' : ''}`} ago`
}
