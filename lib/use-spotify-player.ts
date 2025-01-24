'use client'

import { useEffect, useState } from 'react'
import { Track } from './spotify'
import { player } from '../actions/spotify'

export default function useSpotifyPlayer() {
  const [playerTrack, setPlayerTrack] = useState<Track | false>(false)

  useEffect(() => {
    const interval = window.setInterval(async () => {
      const playerTrack = await player()

      if (!playerTrack) {
        return clearInterval(interval)
      }

      setPlayerTrack(playerTrack)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return playerTrack
}