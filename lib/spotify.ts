const baseUrl = 'https://api.spotify.com'


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

export async function recentlyPlayed() {
  return await fetch(`${baseUrl}/v1/me/player/recently-played?limit=3`, {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`
    }
  })
    .then(res => res.json())
    .then((data: { items: SpotifyItem[] }) => {
      return data.items
    })
}

export async function player(): Promise<Track | false> {
  return await fetch(`${baseUrl}/v1/me/player`, {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`
    }
  })
    .then(res => {
      if (res.status !== 200) {
        throw new Error('Player not active.')
      }

      return res.json()
    })
    .then((data: { item: Track }) => {
      console.log(data.item)
      return data.item
    })
    .catch(() => {
      return false
    })
}