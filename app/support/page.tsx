import Link from 'next/link'
import { 
  Mail, 
  Clock, 
  CreditCard, 
  AlertTriangle,
  ExternalLink,
  MessageCircle,
  RefreshCw,
  HelpCircle
} from 'lucide-react'

export const metadata = {
  title: 'Support — Piconeuron',
  description: 'Get help with Piconeuron products. Contact us, learn about billing, and find answers to common questions.',
}

export default function SupportPage() {
  return (
    <div className="grid-pattern">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6">
            <HelpCircle className="w-4 h-4" />
            We&apos;re Here to Help
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Support
          </h1>
          
          <p className="text-lg text-slate-400">
            Need help? You&apos;ll talk directly to the people who build the products—not a support ticket queue.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8">
            Contact Us
          </h2>

          <div className="card p-8 mb-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-pico-accent/10 border border-pico-accent/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-pico-accent" />
              </div>
              <div className="flex-grow">
                <h3 className="font-display text-xl font-semibold mb-2">Email</h3>
                <a 
                  href="mailto:support@piconeuron.com"
                  className="text-pico-accent hover:underline text-lg"
                >
                  support@piconeuron.com
                </a>
                
                <div className="flex items-center gap-2 mt-4 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Response time: 1–2 business days</span>
                </div>
                
                <p className="text-slate-500 text-sm mt-4">
                  Whether you have a question, need help with a product, or want to discuss a partnership—we&apos;d love to hear from you.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-5 flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm mb-1">General Questions</h4>
                <p className="text-slate-500 text-xs">
                  Product features, how things work, getting started
                </p>
              </div>
            </div>

            <div className="card p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm mb-1">Technical Issues</h4>
                <p className="text-slate-500 text-xs">
                  Bugs, errors, or something not working right
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing & Refunds */}
      <section className="py-16 px-6 bg-pico-navy/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold mb-2">
                Billing & Refunds
              </h2>
              <p className="text-slate-400">
                Clear, fair policies. No surprises.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-pico-accent" />
                Refund Policy
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                If you&apos;re not satisfied with a paid product, contact us within <strong className="text-white">14 days</strong> of purchase and we&apos;ll work with you to make it right—including a full refund if needed.
              </p>
              <p className="text-slate-500 text-xs">
                We believe in our products, but we also believe you shouldn&apos;t feel locked in.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                Clear Pricing
              </h3>
              <p className="text-slate-400 text-sm">
                Each product has its pricing clearly listed. No hidden fees, no surprise charges, no bait-and-switch tiers. What you see is what you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Products */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card p-8 border-amber-500/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold mb-2">
                  About Beta Products
                </h2>
                <p className="text-slate-400 mb-4">
                  Some of our products may be in private or public beta. Here&apos;s what that means:
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong className="text-white">Limited availability:</strong> Beta access may be invite-only or capacity-limited.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong className="text-white">Evolving features:</strong> Things may change based on feedback and testing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span><strong className="text-white">Your feedback matters:</strong> Beta users help shape the final product.</span>
                  </li>
                </ul>
                <p className="text-slate-500 text-xs mt-4">
                  We&apos;ll always be transparent about what stage a product is in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Support */}
      <section className="py-16 px-6 bg-pico-navy/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl font-semibold mb-8">
            Product-Specific Support
          </h2>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">Learnmetrics</h3>
                <p className="text-slate-400 text-sm mb-3">
                  IELTS Speaking practice with AI-powered feedback
                </p>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://learnmetrics.piconeuron.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-pico-accent hover:underline"
                  >
                    Visit Product
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="mailto:support@piconeuron.com?subject=Learnmetrics Support"
                    className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-white"
                  >
                    <Mail className="w-3 h-3" />
                    Get Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-400 mb-8">
            Don&apos;t hesitate to reach out. We&apos;re real people and we&apos;re happy to help.
          </p>
          <a 
            href="mailto:support@piconeuron.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pico-accent hover:bg-pico-accent-dim text-white font-medium rounded-lg transition-all"
          >
            <Mail className="w-4 h-4" />
            Email Us
          </a>
        </div>
      </section>
    </div>
  )
}
