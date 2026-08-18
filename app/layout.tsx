import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Piconeuron | Where Focused Ideas Take Shape',
  description: 'Piconeuron is about finding interesting problems and seeing what we can build to solve them. We explore ideas, prototype solutions, and share what we learn along the way.',
  keywords: ['MicroSaaS', 'SaaS', 'Security', 'Privacy', 'IELTSmetrics', 'IELTS'],
  authors: [{ name: 'Piconeuron' }],
  openGraph: {
    title: 'Piconeuron | Where Focused Ideas Take Shape',
    description: 'Piconeuron is about finding interesting problems and seeing what we can build to solve them. We explore ideas, prototype solutions, and share what we learn along the way.',
    url: 'https://piconeuron.com',
    siteName: 'Piconeuron',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piconeuron | Where Focused Ideas Take Shape',
    description: 'Where focused ideas take shape.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="noise-overlay" aria-hidden="true" />
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
