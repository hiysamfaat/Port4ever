import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '4Ever',
  description: 'Created with 4Ever',
  generator: '4Ever.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
