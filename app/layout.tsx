import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '4Ever',
  description: 'Created with 4Ever',
  generator: '4Ever.dev',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
