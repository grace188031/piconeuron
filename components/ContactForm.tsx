'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  defaultSubject?: string;
  compact?: boolean;
}

const subjects = [
  'General Inquiry',
  'Product Support',
  'Partnership',
  'Security Report',
  'Privacy Question',
  'Other',
];

export default function ContactForm({ defaultSubject, compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: defaultSubject || 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: defaultSubject || 'General Inquiry', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`card ${compact ? 'p-6' : 'p-8'} text-center`}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pico-green/10 border border-pico-green/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-pico-green" />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-4">
          Thank you for reaching out. We'll get back to you within 1-2 business days.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-pico-accent hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`card ${compact ? 'p-6' : 'p-8'}`}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
              Name <span className="text-pico-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-pico-dark border border-pico-slate/50 rounded-lg
                         text-white placeholder-slate-500
                         focus:outline-none focus:border-pico-accent/50 focus:ring-1 focus:ring-pico-accent/50
                         transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
              Email <span className="text-pico-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-pico-dark border border-pico-slate/50 rounded-lg
                         text-white placeholder-slate-500
                         focus:outline-none focus:border-pico-accent/50 focus:ring-1 focus:ring-pico-accent/50
                         transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
            Subject
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 bg-pico-dark border border-pico-slate/50 rounded-lg
                       text-white
                       focus:outline-none focus:border-pico-accent/50 focus:ring-1 focus:ring-pico-accent/50
                       transition-colors appearance-none cursor-pointer"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
            Message <span className="text-pico-accent">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={compact ? 4 : 5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-pico-dark border border-pico-slate/50 rounded-lg
                       text-white placeholder-slate-500 resize-none
                       focus:outline-none focus:border-pico-accent/50 focus:ring-1 focus:ring-pico-accent/50
                       transition-colors"
            placeholder="How can we help you?"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex items-center justify-center gap-2 px-6 py-3
                     bg-pico-accent hover:bg-pico-accent-dim disabled:opacity-50 disabled:cursor-not-allowed
                     text-white font-medium rounded-lg transition-all"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        <p className="text-center text-slate-500 text-xs">
          We typically respond within 1-2 business days
        </p>
      </div>
    </form>
  );
}
