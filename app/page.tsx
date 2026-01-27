import Link from 'next/link'
import { 
  Shield, 
  Users, 
  Zap, 
  CreditCard, 
  Lock, 
  Database, 
  Ban, 
  ArrowRight,
  ExternalLink,
  Mail,
  ChevronRight,
  Sparkles
} from 'lucide-react'

export default function Home() {
  return (
    <div className="grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-navy/50 border border-pico-slate/50 rounded-full text-sm text-slate-400 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-pico-accent" />
            <span>Security-Minded MicroSaaS Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-slide-up">
            <span className="text-gradient">We build focused tools</span>
            <br />
            <span className="text-slate-400">without the bloat.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
            Piconeuron is a small, security-minded MicroSaaS studio. We help people make measurable progress—without bloated features or shady data practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-2">
            <Link 
              href="#products"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-pico-accent hover:bg-pico-accent-dim text-white font-medium rounded-lg transition-all glow-blue"
            >
              View Our Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/security"
              className="inline-flex items-center gap-2 px-6 py-3 border border-pico-slate/50 hover:border-pico-accent/50 text-slate-300 hover:text-white rounded-lg transition-all"
            >
              <Lock className="w-4 h-4" />
              Security & Privacy
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Our Products
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Focused tools that solve real problems.
            </p>
          </div>

          {/* Product Card */}
          <div className="max-w-2xl mx-auto">
            <a 
              href="https://learnmetrics.piconeuron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block card card-hover p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-xs text-emerald-400">
                  Live
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-pico-accent transition-colors">
                Learnmetrics
              </h3>
              
              <p className="text-slate-400 mb-4">
                IELTS Speaking practice with rubric-aligned scoring and actionable feedback. Practice anytime and get detailed analysis to improve your band score.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-pico-accent">
                View product
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          {/* Coming Soon Placeholder */}
          <p className="text-center text-slate-600 text-sm mt-8">
            More products in development. We ship when it&apos;s ready.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 px-6 bg-pico-navy/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              What to Expect From Us
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              We believe in doing things differently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-pico-accent/10 border border-pico-accent/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-pico-accent" />
              </div>
              <h3 className="font-display font-semibold mb-2">Small Team, Real Support</h3>
              <p className="text-slate-400 text-sm">
                When you reach out, you&apos;ll talk to the builders. No support tickets lost in a queue—just direct, human responses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-display font-semibold mb-2">Calm, Sustainable Shipping</h3>
              <p className="text-slate-400 text-sm">
                We release in small batches to keep quality high. No rushed features, no breaking changes—just steady improvement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-display font-semibold mb-2">Clear Pricing</h3>
              <p className="text-slate-400 text-sm">
                No surprise charges, no hidden tiers. What you see is what you pay. We keep things simple and transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6">
                <Shield className="w-4 h-4" />
                Cybersecurity Background
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Security & Privacy,
                <br />
                <span className="text-slate-400">by Default</span>
              </h2>
              
              <p className="text-slate-400 mb-8">
                We come from a cybersecurity background, so our default approach is to protect your data—not exploit it.
              </p>

              <Link 
                href="/security"
                className="group inline-flex items-center gap-2 text-pico-accent hover:text-white transition-colors"
              >
                Read our Security & Privacy page
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4">
              {/* Security Card 1 */}
              <div className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pico-navy flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-pico-accent" />
                </div>
                <div>
                  <h4 className="font-display font-medium mb-1">Data Minimization</h4>
                  <p className="text-slate-400 text-sm">
                    We collect only what we need to run the product. Nothing more.
                  </p>
                </div>
              </div>

              {/* Security Card 2 */}
              <div className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pico-navy flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-pico-accent" />
                </div>
                <div>
                  <h4 className="font-display font-medium mb-1">Secure Processing</h4>
                  <p className="text-slate-400 text-sm">
                    Sensitive content like uploads and recordings is protected and never shared.
                  </p>
                </div>
              </div>

              {/* Security Card 3 */}
              <div className="card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pico-navy flex items-center justify-center flex-shrink-0">
                  <Ban className="w-5 h-5 text-pico-accent" />
                </div>
                <div>
                  <h4 className="font-display font-medium mb-1">No Data Brokerage</h4>
                  <p className="text-slate-400 text-sm">
                    We don&apos;t sell personal data. Your information stays yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-pico-navy/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-8">
            Questions, help, or partnership ideas? We&apos;d love to hear from you.
          </p>

          <a 
            href="mailto:support@piconeuron.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-pico-navy border border-pico-slate/50 hover:border-pico-accent/50 rounded-xl transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-pico-accent/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-pico-accent" />
            </div>
            <div className="text-left">
              <div className="font-display font-medium group-hover:text-pico-accent transition-colors">
                support@piconeuron.com
              </div>
              <div className="text-sm text-slate-500">
                We typically respond within 1–2 business days
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
