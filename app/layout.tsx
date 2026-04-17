import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Sharp Edge — Premium Barber Shop',
  description: 'Book your appointment at The Sharp Edge barber shop in Dehradun.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}