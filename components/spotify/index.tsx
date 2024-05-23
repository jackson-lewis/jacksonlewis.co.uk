'use client'

import { useEffect, useRef, useState } from 'react'
import { SpotifyItem, lastPlayedTimeStamp } from '../../lib/spotify'

export function LastPlayedTime({ recentItem }: { recentItem: SpotifyItem }) {
  const lastPlayedTime = lastPlayedTimeStamp(recentItem)
  const [time, setTime] = useState(0)
  const interval = useRef<number>(null)

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
        console.log('doing interval')

        setTime((time) => {
          return time + 1
        })
      }, 1000 * 60 )

      return () => {
        clearInterval(interval)
      }
    }
  }, [unit, lastPlayedTime])

  return (
    <p>{time} {lastPlayedTimeModified}</p>
  )
}
