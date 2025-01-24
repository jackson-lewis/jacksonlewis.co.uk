'use client'

import { useEffect, useState } from 'react'
import { SpotifyItem } from './spotify'
import { recentlyPlayed } from '../actions/spotify'

export default function useSpotifyRecentlyPlayed() {
  const [recentItems, setRecentItems] = useState<SpotifyItem[] | null>(null)

  useEffect(() => {
    const fetchRecentlyPlayed = async () => {
      const items = await recentlyPlayed()

      setRecentItems(items)
    }

    fetchRecentlyPlayed()
  }, [])

  return recentItems
}