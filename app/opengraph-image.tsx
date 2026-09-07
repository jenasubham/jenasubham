import { ImageResponse } from 'next/og'

export const alt = 'Subham Jena — Frontend Software Engineer building responsive web applications'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * URL-based font loader for Next.js OpenGraph image generation.
 * Fetches fonts over HTTPS to ensure 100% compatibility across
 * all edge and serverless runtime regions without filesystem dependencies.
 */
async function fetchFont(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch font from ${url}: ${res.statusText}`)
  }
  return await res.arrayBuffer()
}

export default async function OG() {
  const [geistBold, geistSemiBold, geistMono] = await Promise.all([
    fetchFont('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-Bold.ttf'),
    fetchFont('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/Geist-SemiBold.ttf'),
    fetchFont('https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/GeistMono-Regular.ttf'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#131217',
          padding: '80px 100px',
          color: '#E8E2D5',
          fontFamily: 'Geist',
        }}
      >
        {/* top header: location + brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 22,
            letterSpacing: '0.2em',
            color: '#B9F2C8',
            fontFamily: 'Geist Mono',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: '#B9F2C8' }} />
            NEW DELHI, INDIA
          </div>
          <div style={{ color: '#B9F2C8' }}>JENASUBHAM</div>
        </div>

        {/* name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 160,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              fontWeight: 700,
              display: 'flex',
            }}
          >
            Subham Jena<span style={{ color: '#B9F2C8' }}>.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#E8E2D5',
              maxWidth: '820px',
              lineHeight: 1.1,
            }}
          >
            Building responsive & scalable web applications.
          </div>
        </div>

        {/* bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 18,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(232, 226, 213, 0.4)',
            fontFamily: 'Geist Mono',
          }}
        >
          <div>REACT · NEXT.JS · ARCHITECTURE</div>
          <div>DELHI · 2026</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: geistBold, style: 'normal', weight: 700 },
        { name: 'Geist', data: geistSemiBold, style: 'normal', weight: 600 },
        { name: 'Geist Mono', data: geistMono, style: 'normal', weight: 400 },
      ],
    }
  )
}
