import { Activity, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Status — Piconeuron',
  description: 'Check the operational status of Piconeuron products and services.',
}

export default function StatusPage() {
  return (
    <div className="grid-pattern">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400 mb-6 animate-fade-in">
            <Activity className="w-4 h-4" />
            System Status
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6 animate-slide-up">
            All Systems Operational
          </h1>

          <p className="text-slate-400 mb-12 animate-slide-up stagger-1">
            Current status of Piconeuron products and services.
          </p>

          {/* Overall Status */}
          <div className="card card-hover p-6 mb-8 border-emerald-500/30 animate-slide-up stagger-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-semibold text-emerald-400">All systems operational</span>
            </div>
          </div>

          {/* Product Status */}
          <h2 className="font-display text-xl font-semibold mb-4 animate-slide-up stagger-3">
            Product Status
          </h2>

          <div className="space-y-3 mb-12">
            <div className="card card-hover p-4 flex items-center justify-between animate-slide-up stagger-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>IELTSmetrics</span>
              </div>
              <span className="text-sm text-emerald-400">Operational</span>
            </div>

            <div className="card card-hover p-4 flex items-center justify-between animate-slide-up stagger-5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>piconeuron.com</span>
              </div>
              <span className="text-sm text-emerald-400">Operational</span>
            </div>
          </div>

          {/* Uptime Note */}
          <div className="card card-hover p-6 bg-pico-navy/50 animate-slide-up">
            <h3 className="font-display font-semibold mb-3">About This Page</h3>
            <p className="text-slate-400 text-sm mb-4">
              This is a simple status page. For real-time monitoring and incident history, we plan to implement a dedicated status monitoring service in the future.
            </p>
            <p className="text-slate-500 text-sm">
              If you&apos;re experiencing issues with any of our services, please{' '}
              <Link href="/support#contact" className="text-pico-accent hover:underline">
                contact us
              </Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
