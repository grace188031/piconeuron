import Link from 'next/link'
import {
  Users,
  Shield,
  Lightbulb,
  Rocket,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata = {
  title: 'About — Piconeuron',
  description: 'Meet the team behind Piconeuron. A husband-and-wife duo with cybersecurity backgrounds building MicroSaaS products.',
}

export default function AboutPage() {
  return (
    <div className="grid-pattern">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6 animate-fade-in">
            <Users className="w-4 h-4" />
            Meet the Team
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 animate-slide-up">
            About Piconeuron
          </h1>

          <p className="text-lg text-slate-400 animate-slide-up stagger-1">
            Hi—we&apos;re a two-person team (husband & wife) building MicroSaaS products. We both come from cybersecurity, and we care deeply about creating tools that are useful, simple, and respectful of user data.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="card card-hover p-8 mb-12 animate-slide-up stagger-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pico-accent/20 to-emerald-500/20 border border-pico-slate flex items-center justify-center">
                <Heart className="w-8 h-8 text-pico-accent" />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold">Built with Care</h2>
                <p className="text-slate-500 text-sm">A small studio, not a faceless corporation</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-400">
              <p>
                We started Piconeuron because we wanted to build software the way we believe it should be built: focused, secure, and honest. After years working in cybersecurity, we&apos;ve seen too many products that play fast and loose with user data or bury important information in confusing terms of service.
              </p>
              <p>
                We do things differently. Every product we build starts with a simple question: &quot;Does this genuinely help someone?&quot; If the answer isn&apos;t a clear yes, we don&apos;t build it.
              </p>
            </div>
          </div>

          {/* Values */}
          <h2 className="font-display text-2xl font-semibold mb-6 animate-slide-up">
            Why MicroSaaS?
          </h2>

          <div className="space-y-4 mb-12">
            <div className="card card-hover p-5 flex items-start gap-4 animate-slide-up stagger-1">
              <div className="w-10 h-10 rounded-lg bg-pico-accent/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-pico-accent" />
              </div>
              <div>
                <h3 className="font-display font-medium mb-1">Test Narrowly-Scoped Ideas</h3>
                <p className="text-slate-400 text-sm">
                  We believe in solving one problem really well, rather than building bloated products that try to do everything poorly.
                </p>
              </div>
            </div>

            <div className="card card-hover p-5 flex items-start gap-4 animate-slide-up stagger-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-display font-medium mb-1">Ship Fast, Learn Faster</h3>
                <p className="text-slate-400 text-sm">
                  We get products into users&apos; hands quickly so we can learn what actually works—not what we assume will work.
                </p>
              </div>
            </div>

            <div className="card card-hover p-5 flex items-start gap-4 animate-slide-up stagger-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-medium mb-1">Scale What Users Want</h3>
                <p className="text-slate-400 text-sm">
                  We only invest time scaling features and products that users genuinely want and use—not what we think they should want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Background */}
      <section className="py-16 px-6 bg-pico-navy/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-4 mb-8 animate-slide-up">
            <div className="w-12 h-12 rounded-xl bg-pico-accent/10 border border-pico-accent/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-pico-accent" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold mb-2">
                Cybersecurity Roots
              </h2>
              <p className="text-slate-400">
                Our background shapes everything we build.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card card-hover p-5 animate-slide-up stagger-1">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Privacy by Design</span>
              </div>
              <p className="text-slate-400 text-sm">
                We think about privacy from the start, not as an afterthought.
              </p>
            </div>

            <div className="card card-hover p-5 animate-slide-up stagger-2">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Minimal Data Collection</span>
              </div>
              <p className="text-slate-400 text-sm">
                We collect only what&apos;s necessary to provide our services.
              </p>
            </div>

            <div className="card card-hover p-5 animate-slide-up stagger-3">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Secure Architecture</span>
              </div>
              <p className="text-slate-400 text-sm">
                Security is built into our infrastructure, not bolted on later.
              </p>
            </div>

            <div className="card card-hover p-5 animate-slide-up stagger-4">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Transparent Practices</span>
              </div>
              <p className="text-slate-400 text-sm">
                We&apos;re upfront about what we do with your data.
              </p>
            </div>
          </div>

          <div className="mt-8 animate-slide-up stagger-5">
            <Link
              href="/security"
              className="group inline-flex items-center gap-2 text-pico-accent hover:text-white transition-colors"
            >
              Learn more about our security practices
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Want to Say Hello?
          </h2>
          <p className="text-slate-400 mb-8">
            We&apos;d love to hear from you—whether you have questions, feedback, or just want to connect.
          </p>
          <Link
            href="/support#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-pico-accent hover:bg-pico-accent-dim text-white font-medium rounded-lg transition-all"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
