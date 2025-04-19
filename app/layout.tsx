import './globals.scss'
import type {Metadata} from 'next'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import {roboto, robotoCondensed, robotoSerif} from './fonts'
import { GoogleAnalytics } from '@next/third-parties/google'
import { WebVitals } from '../components/web-vitals'

export const metadata: Metadata = {
  title: 'Jackson Lewis',
  description: 'All-round developer',
  icons: {
    icon: '/icon'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-gb">
      <GoogleAnalytics gaId="G-5PKSSSCT6E" debugMode={!!process.env.VERCEL} />
      <WebVitals />
      <body className={`${roboto.variable} ${robotoSerif.variable} ${robotoCondensed.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
