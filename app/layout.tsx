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
  metadataBase: new URL('https://jenasubham.vercel.app'),
  title: { default: 'Subham Jena · Frontend Software Engineer', template: '%s · Subham Jena' },
  description: 'Frontend Engineer building responsive, high-performance web applications, direct cloud pipelines, and on-device ML detection. New Delhi, India.',
  keywords: [
    'Subham Jena',
    'Frontend Software Engineer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Engineer',
    'New Delhi India',
    'PrudentBit',
  ],
  authors: [{ name: 'Subham Jena', url: 'https://jenasubham.vercel.app' }],
  creator: 'Subham Jena',
  alternates: {
    canonical: 'https://jenasubham.vercel.app',
  },
  openGraph: {
    title: 'Subham Jena · Frontend Software Engineer',
    description: 'Frontend Engineer building responsive, high-performance web applications, direct cloud pipelines, and on-device ML detection. New Delhi, India.',
    url: 'https://jenasubham.vercel.app',
    siteName: 'Subham Jena Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://jenasubham.vercel.app/profile.png',
        width: 1200,
        height: 630,
        alt: 'Subham Jena — Frontend Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subham Jena · Frontend Software Engineer',
    description: 'Frontend Engineer building responsive, high-performance web applications, direct cloud pipelines, and on-device ML detection.',
    images: ['https://jenasubham.vercel.app/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#131217',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Subham Jena',
    alternateName: 'Subham Jena',
    jobTitle: 'Frontend Software Engineer',
    description:
      'Frontend Engineer building responsive, high-performance web applications, direct cloud pipelines, and on-device ML detection.',
    url: 'https://jenasubham.vercel.app',
    image: 'https://jenasubham.vercel.app/profile.png',
    sameAs: [
      'https://github.com/jenasubham',
      'https://linkedin.com/in/jenasubham',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'PrudentBit',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'India',
    },
    knowsAbout: [
      'Frontend Architecture',
      'Next.js',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Redux Toolkit',
      'Direct-to-Cloud Uploads',
      'Client-side ML Inference',
      'Node.js',
      'REST APIs',
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${cormorant.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
