import { Lock, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Piconeuron',
  description: 'Privacy Policy for Piconeuron products and services.',
}

export default function PrivacyPage() {
  return (
    <div className="grid-pattern">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6">
            <Lock className="w-4 h-4" />
            Legal
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-slate-500 text-sm mb-4">
            Last updated: January 2025
          </p>
          
          <div className="card p-4 mb-12 border-pico-accent/30">
            <p className="text-slate-400 text-sm">
              For our detailed security practices, see our{' '}
              <Link href="/security" className="text-pico-accent hover:underline">
                Security & Privacy page
              </Link>.
            </p>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Overview</h2>
                <p className="text-slate-400">
                  At Piconeuron, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information across our products and services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Information We Collect</h2>
                <p className="text-slate-400 mb-4">
                  We collect information necessary to provide our services:
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span><strong className="text-white">Account information:</strong> Email address, name (if provided)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span><strong className="text-white">Usage data:</strong> How you interact with our products to improve the service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span><strong className="text-white">Content you provide:</strong> Data you submit while using our products (e.g., practice recordings)</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">How We Use Your Information</h2>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>To provide and maintain our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>To communicate with you about your account or our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>To improve our products based on usage patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>To comply with legal obligations</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">What We Don&apos;t Do</h2>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>We <strong className="text-white">don&apos;t sell</strong> your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>We <strong className="text-white">don&apos;t share</strong> your data with advertisers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>We <strong className="text-white">don&apos;t use</strong> your content to train AI models without consent</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Data Security</h2>
                <p className="text-slate-400">
                  We implement appropriate security measures to protect your information, including encryption in transit and at rest, access controls, and regular security updates. See our{' '}
                  <Link href="/security" className="text-pico-accent hover:underline">
                    Security & Privacy page
                  </Link>{' '}
                  for details.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Data Retention</h2>
                <p className="text-slate-400">
                  We retain your data only as long as necessary to provide our services or as required by law. You can request deletion of your account and associated data at any time.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Your Rights</h2>
                <p className="text-slate-400 mb-4">
                  Depending on your location, you may have rights to:
                </p>
                <ul className="space-y-2 text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>Request correction or deletion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>Export your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pico-accent mt-1">•</span>
                    <span>Object to certain processing</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Product-Specific Privacy</h2>
                <p className="text-slate-400 mb-4">
                  Each product may have specific data practices. See individual product privacy pages:
                </p>
                <a 
                  href="https://learnmetrics.piconeuron.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pico-accent hover:underline"
                >
                  Learnmetrics Privacy Policy
                  <ExternalLink className="w-3 h-3" />
                </a>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Changes to This Policy</h2>
                <p className="text-slate-400">
                  We may update this policy from time to time. We&apos;ll notify you of significant changes by updating the date at the top of this page or by email for material changes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">Contact</h2>
                <p className="text-slate-400">
                  Questions about this Privacy Policy? Contact us at:
                </p>
                <a 
                  href="mailto:privacy@piconeuron.com"
                  className="inline-flex items-center gap-2 text-pico-accent hover:underline mt-2"
                >
                  <Mail className="w-4 h-4" />
                  privacy@piconeuron.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
