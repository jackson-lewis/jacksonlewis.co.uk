import type { Metadata } from 'next'
import HeroLarge from '../components/hero-large'
import WorkLifeBalance from '../components/sections/work-life-balance'
import PageContent from '../components/page-content'
import CoreValues from '../components/sections/core-values'
import Projects from '../components/sections/projects'

export const metadata: Metadata = {
  title: 'Jackson Lewis | Backend Developer',
  description: 'A backend developer with a love for problem solving and embracing the outdoors',
}

export default function Home() {
  return (
    <main>
        <HeroLarge />
        <PageContent>
            <WorkLifeBalance />
            <CoreValues />
            <Projects />
        </PageContent>
    </main>
  )
}
