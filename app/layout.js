export const metadata = {
  title: 'PathwayNZ - Filipino Guide to New Zealand',
  description: 'IELTS prep, PTE prep, NZ immigration guide, student pathway, settling in tips, and daily devotion for Filipinos in New Zealand.',
  keywords: 'IELTS Philippines, PTE Philippines, NZ visa Filipino, immigration New Zealand, Filipino NZ, daily devotion Tagalog, NZ student visa Filipino',
  openGraph: {
    title: 'PathwayNZ - Para sa mga Pilipino',
    description: 'Your complete guide to IELTS, PTE, NZ immigration, and life in Aotearoa.',
    url: 'https://pathway.wesstech.xyz',
    siteName: 'PathwayNZ',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f2744" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7206717367693847"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#fdf6ee' }}>
        {children}
      </body>
    </html>
  )
}
