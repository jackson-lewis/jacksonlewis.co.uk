'use client'

import { useEffect, useState } from 'react'
import { lastPlayedTimeStamp, SpotifyItem } from '../../lib/spotify'

export default function LastPlayedTime({ item }: { item: SpotifyItem }) {
  const [time, setTime] = useState(0)
  const lastPlayedTime = lastPlayedTimeStamp(item)
  const unitMatch = lastPlayedTime.match(/(second|minute|hour)/)
  const unit = unitMatch ? unitMatch[0] : ''
  const lastPlayedTimeModified = lastPlayedTime.replace(/^[0-9]+\s/, '')

  useEffect(() => {
    setTime(() => {
      const timeMatch = lastPlayedTime.match(/^([0-9]+)\s/)
      return timeMatch ? Number(timeMatch[0]) : 0
    })

    if (unit === 'minute') {
      const interval = setInterval(() => {
        setTime((time) => {
          return time + 1
        })
      }, 1000 * 60)

      return () => {
        clearInterval(interval)
      }
    }
  }, [unit, lastPlayedTime])

  return (
    <p>{time} {lastPlayedTimeModified}</p>
  )
}
