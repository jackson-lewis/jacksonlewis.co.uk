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
  context: unknown
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
