import Link from 'next/link'
import {
  Shield,
  Lock,
  Key,
  Database,
  RefreshCw,
  Ban,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export const metadata = {
  title: 'Security & Privacy — Piconeuron',
  description: 'Learn about our practical security controls and privacy practices that protect your data.',
}

export default function SecurityPage() {
  return (
    <div className="grid-pattern">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            Our Practices
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 animate-slide-up">
            Security & Privacy
            <br />
            <span className="text-slate-400">at Piconeuron</span>
          </h1>

          <p className="text-lg text-slate-400 animate-slide-up stagger-1">
            We&apos;re a small team, so we focus on practical security controls that reduce real risk—not checkbox compliance theater.
          </p>
        </div>
      </section>

      {/* Core Practices */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8 animate-slide-up">
            Our Core Practices
          </h2>

          <div className="space-y-6">
            {/* Practice 1 */}
            <div className="card card-hover p-6 flex items-start gap-4 animate-slide-up stagger-1">
              <div className="w-12 h-12 rounded-xl bg-pico-accent/10 border border-pico-accent/20 flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-pico-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Least-Privilege Access</h3>
                <p className="text-slate-400">
                  Only the people who need access get it. We limit internal access to customer data to the minimum necessary for providing support and operating our services.
                </p>
              </div>
            </div>

            {/* Practice 2 */}
            <div className="card card-hover p-6 flex items-start gap-4 animate-slide-up stagger-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Encryption</h3>
                <p className="text-slate-400">
                  We aim to use encryption in transit (HTTPS/TLS) and at rest where supported by our infrastructure providers. Your data is protected both when moving and when stored.
                </p>
              </div>
            </div>

            {/* Practice 3 */}
            <div className="card card-hover p-6 flex items-start gap-4 animate-slide-up stagger-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">Operational Basics</h3>
                <p className="text-slate-400">
                  We maintain logging for security events, regular backups for data recovery, and routine dependency updates to patch known vulnerabilities. The fundamentals that actually matter.
                </p>
              </div>
            </div>

            {/* Practice 4 */}
            <div className="card card-hover p-6 flex items-start gap-4 animate-slide-up stagger-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                <Ban className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">No Selling Data</h3>
                <p className="text-slate-400">
                  We don&apos;t sell customer personal data. Period. Your information is used to provide our services—not to fuel advertising or data brokerage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Product Notes */}
      <section className="py-16 px-6 bg-pico-navy/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-4 animate-slide-up">
            Per-Product Notes
          </h2>
          <p className="text-slate-400 mb-8 animate-slide-up stagger-1">
            Each product may collect different data depending on its purpose. We document specifics on each product&apos;s own Privacy page.
          </p>

          {/* Product Privacy Card */}
          <div className="card card-hover p-6 mb-8 animate-slide-up stagger-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-2">Learnmetrics</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Collects email for beta access and account management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Processes practice recordings for feedback (recordings are not shared)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Stores practice history to track your progress</span>
                  </li>
                </ul>
                <a
                  href="https://learnmetrics.piconeuron.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-pico-accent text-sm mt-4 hover:text-white transition-colors"
                >
                  View Learnmetrics Privacy Policy
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vulnerability Reporting */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card card-hover p-8 border-pico-accent/30 animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pico-accent/10 border border-pico-accent/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-pico-accent" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold mb-2">
                  Report a Security Vulnerability
                </h2>
                <p className="text-slate-400 mb-4">
                  Found a security issue? We appreciate responsible disclosure. Use our contact form and select &quot;Security Report&quot; as the subject. We&apos;ll acknowledge within 3 business days.
                </p>
                <Link
                  href="/support#contact"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-pico-accent hover:bg-pico-accent-dim text-white text-sm font-medium rounded-lg transition-all"
                >
                  Report Security Issue
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-pico-navy/30">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Questions About Our Practices?
          </h2>
          <p className="text-slate-400 mb-6">
            We&apos;re happy to discuss our security and privacy approach.
          </p>
          <Link
            href="/support#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-pico-accent hover:bg-pico-accent-dim text-white font-medium rounded-lg transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
