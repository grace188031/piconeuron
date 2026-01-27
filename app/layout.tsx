import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Piconeuron — Security-Minded MicroSaaS Studio',
  description: 'We build focused tools that help people make measurable progress—without bloated features or shady data practices.',
  keywords: ['MicroSaaS', 'SaaS', 'Security', 'Privacy', 'Learnmetrics', 'IELTS'],
  authors: [{ name: 'Piconeuron' }],
  openGraph: {
    title: 'Piconeuron — Security-Minded MicroSaaS Studio',
    description: 'We build focused tools that help people make measurable progress—without bloated features or shady data practices.',
    url: 'https://piconeuron.com',
    siteName: 'Piconeuron',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piconeuron — Security-Minded MicroSaaS Studio',
    description: 'We build focused tools that help people make measurable progress.',
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
