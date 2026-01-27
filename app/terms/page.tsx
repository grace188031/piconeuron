import { Scale, Mail } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service — Piconeuron',
  description: 'Terms of Service for Piconeuron products and services.',
}

export default function TermsPage() {
  return (
    <div className="grid-pattern">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pico-accent/10 border border-pico-accent/20 rounded-full text-sm text-pico-accent mb-6">
            <Scale className="w-4 h-4" />
            Legal
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Terms of Service
          </h1>
          
          <p className="text-slate-500 text-sm mb-12">
            Last updated: January 2025
          </p>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
                <p className="text-slate-400">
                  By accessing or using any Piconeuron product or service, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">2. Use of Services</h2>
                <p className="text-slate-400">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
                <p className="text-slate-400">
                  Our services and their original content, features, and functionality are owned by Piconeuron and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">4. User Content</h2>
                <p className="text-slate-400">
                  You retain ownership of content you submit to our services. By submitting content, you grant us a limited license to use, process, and store that content as necessary to provide our services to you.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">5. Payment Terms</h2>
                <p className="text-slate-400">
                  For paid services, you agree to pay all fees associated with your selected plan. Fees are non-refundable except as described in our refund policy or as required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">6. Termination</h2>
                <p className="text-slate-400">
                  We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
                <p className="text-slate-400">
                  Piconeuron shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">8. Changes to Terms</h2>
                <p className="text-slate-400">
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of this page.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-semibold mb-4 text-white">9. Contact</h2>
                <p className="text-slate-400">
                  Questions about these Terms? Contact us at:
                </p>
                <a 
                  href="mailto:legal@piconeuron.com"
                  className="inline-flex items-center gap-2 text-pico-accent hover:underline mt-2"
                >
                  <Mail className="w-4 h-4" />
                  legal@piconeuron.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
