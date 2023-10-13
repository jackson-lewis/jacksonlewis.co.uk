import {Roboto, Roboto_Condensed, Roboto_Mono, Roboto_Serif} from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--sans-font',
  weight: ['300', '400', '500', '700']
})

export const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--serif-font',
  weight: ['300', '400', '500']
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--mono-font',
  weight: ['400']
})

export const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--logo-font',
  weight: ['300']
})
