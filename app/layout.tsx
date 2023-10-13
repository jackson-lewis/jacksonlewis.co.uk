import './globals.scss'
import type {Metadata} from 'next'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import {roboto, robotoCondensed, robotoSerif} from './fonts'


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
      <body className={`${roboto.variable} ${robotoSerif.variable} ${robotoCondensed.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
