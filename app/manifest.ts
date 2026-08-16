import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Subham Jena · Frontend Software Engineer',
    short_name: 'Subham Jena',
    description:
      'Frontend Engineer building responsive, high-performance web applications, direct cloud pipelines, and on-device ML detection.',
    start_url: '/',
    display: 'standalone',
    background_color: '#131217',
    theme_color: '#131217',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
