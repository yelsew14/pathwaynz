export const metadata = {
  title: "PathwayNZ - Filipino Guide to New Zealand",
  description:
    "IELTS prep, NZ immigration guide, settling in tips, and daily devotion for Filipinos in New Zealand.",
  keywords:
    "IELTS Philippines, NZ visa Filipino, immigration New Zealand, Filipino NZ, daily devotion Tagalog",
  openGraph: {
    title: "PathwayNZ - Para sa mga Pilipino",
    description:
      "Your complete guide to IELTS, NZ immigration, and life in Aotearoa.",
    url: "https://pathway.wesstech.xyz",
    siteName: "PathwayNZ",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7206717367693847"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#fdf8f0" }}>
        {children}
      </body>
    </html>
  );
}
