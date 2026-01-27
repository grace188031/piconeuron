import Link from 'next/link'
import { Shield, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-pico-darker border-t border-pico-slate/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pico-accent to-pico-accent-dim flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-semibold text-lg">Piconeuron</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-md">
              A small, security-minded MicroSaaS studio. We build focused tools that help people make measurable progress.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-medium text-sm uppercase tracking-wider text-slate-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-500 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@piconeuron.com" 
                  className="text-slate-500 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="w-3 h-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-medium text-sm uppercase tracking-wider text-slate-400 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/security" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Security & Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-slate-500 hover:text-white text-sm transition-colors inline-flex items-center gap-1">
                  Status
                  <span className="w-2 h-2 rounded-full bg-pico-green animate-pulse" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Products */}
        <div className="border-t border-pico-slate/30 pt-8 mb-8">
          <h4 className="font-display font-medium text-sm uppercase tracking-wider text-slate-400 mb-4">
            Our Products
          </h4>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://learnmetrics.piconeuron.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pico-navy/50 border border-pico-slate/50 rounded-lg text-sm text-slate-300 hover:border-pico-accent/50 hover:text-white transition-all"
            >
              Learnmetrics
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pico-slate/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Piconeuron. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with care in a cybersecurity mindset.
          </p>
        </div>
      </div>
    </footer>
  )
}
