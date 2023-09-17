import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Life - Jackson Lewis',
  description: 'What I get up to in the wild',
}

export default function Life() {
  return (
    <main>
      <h1>Life</h1>
      <p>When I&apos;m not working</p>
    </main>
  )
}
