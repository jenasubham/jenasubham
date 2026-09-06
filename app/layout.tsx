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
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': 'https://jenasubham.vercel.app/#profilepage',
      url: 'https://jenasubham.vercel.app',
      name: 'Subham Jena · Frontend Software Engineer Portfolio',
      mainEntity: {
        '@id': 'https://jenasubham.vercel.app/#person',
      },
      hasPart: [
        { '@id': 'https://github.com/jenasubham/careerplus' },
        { '@id': 'https://jenasubham.vercel.app/#finance-tracker' },
        { '@id': 'https://jenasubham.vercel.app/#immunefiles' },
        { '@id': 'https://github.com/jenasubham/portfolio' },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://jenasubham.vercel.app/#person',
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
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://github.com/jenasubham/careerplus',
      name: 'CareerPlus — Full-Stack MERN Job Portal',
      description:
        'Full-stack MERN job portal featuring JWT authentication, role-based access for job seekers and employers, Redux Toolkit state management, custom React hooks for dynamic job filtering, admin dashboard, and file upload support via Multer. Built with React.js, Express, MongoDB Atlas, Tailwind CSS, and ShadCN UI.',
      codeRepository: 'https://github.com/jenasubham/careerplus',
      programmingLanguage: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
      runtimePlatform: 'Node.js, Express, MongoDB Atlas',
      author: {
        '@id': 'https://jenasubham.vercel.app/#person',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://jenasubham.vercel.app/#finance-tracker',
      name: 'Personal Finance Tracker',
      description:
        'Mobile-first PWA built solo end-to-end for tracking daily expenses & spending patterns. Features Firebase Auth, Firestore transaction history, Android Web Share Target for auto-parsing UPI receipts from PhonePe & Paytm, category breakdowns, and Recharts analytics.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Android, iOS, Web',
      author: {
        '@id': 'https://jenasubham.vercel.app/#person',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://jenasubham.vercel.app/#immunefiles',
      name: 'Immunefiles & Immuneshare',
      description:
        'Enterprise secure file-sharing products featuring client-side direct-to-Azure SAS uploads (~64% bandwidth savings), on-device ML proctored sharing (EfficientDet-Lite0), and custom document redaction.',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web',
      author: {
        '@id': 'https://jenasubham.vercel.app/#person',
      },
    },
    {
      '@type': 'SoftwareSourceCode',
      '@id': 'https://github.com/jenasubham/portfolio',
      name: 'Personal Portfolio Website',
      description:
        'Personal developer portfolio built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. Features responsive design tokens, zero-JS motion fallbacks, and interactive canvas ASCII art.',
      codeRepository: 'https://github.com/jenasubham/portfolio',
      programmingLanguage: ['TypeScript', 'React', 'Tailwind CSS'],
      runtimePlatform: 'Next.js 16, Vercel',
      author: {
        '@id': 'https://jenasubham.vercel.app/#person',
      },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://jenasubham.vercel.app/#featured-projects',
      name: 'Featured Software Projects by Subham Jena',
      description: 'Key software engineering projects and applications developed by Subham Jena.',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://github.com/jenasubham/careerplus',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': 'https://jenasubham.vercel.app/#finance-tracker',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id': 'https://jenasubham.vercel.app/#immunefiles',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@id': 'https://github.com/jenasubham/portfolio',
          },
        },
      ],
    },
  ],
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
