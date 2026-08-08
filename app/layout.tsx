import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Cormorant_Garamond } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
  variable: '--font-cormorant',
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jenasubham.com'),
  title: { default: 'Subham Jena', template: '%s · Subham Jena' },
  description: 'Frontend Engineer building responsive and scalable enterprise web applications. New Delhi, India.',
  openGraph: {
    title: 'Subham Jena',
    description: 'Frontend Engineer building responsive and scalable enterprise web applications. New Delhi, India.',
    url: 'https://jenasubham.com',
    siteName: 'Subham Jena',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subham Jena',
    description: 'Frontend Engineer building responsive and scalable enterprise web applications. New Delhi, India.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#131217',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
