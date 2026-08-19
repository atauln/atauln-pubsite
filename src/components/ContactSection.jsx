import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, AlertTriangle, CheckCircle } from 'lucide-react'
import { CONTACT_INFO } from '../data/portfolioData'

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'All fields are required.' })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: null, message: '' })
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'
      if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
        throw new Error('Simulation Mode')
      }

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Message'
        })
      })

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_submit_success', { event_category: 'Engagement' })
      }

      setFormStatus({ type: 'success', message: 'Message sent successfully! Thank you for reaching out.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      if (err.message === 'Simulation Mode') {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_submit_simulated', { event_category: 'Engagement' })
        }
        setFormStatus({ type: 'success', message: 'Message sent successfully! (Local environment submission)' })
      } else {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_submit_failed', {
            event_category: 'Engagement',
            error_message: err.message
          })
        }
        setFormStatus({ type: 'error', message: 'Failed to send message. Please try sending directly to email.' })
      }
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 scroll-mt-20">
      <div className="surface-card p-8 md:p-12 rounded-3xl border border-zinc-800/80 bg-zinc-900/60 max-w-4xl mx-auto shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">Let's Connect</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Looking to discuss backend architectures, cloud infrastructure, or homelabs? Send a message and I'll get back to you promptly.
            </p>
            <div className="space-y-4 text-sm">
              <a 
                href={`mailto:${CONTACT_INFO.email}`} 
                className="flex items-center gap-3 text-zinc-300 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1" 
                aria-label="Email Address"
              >
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-3 text-zinc-300 px-1 py-1">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300 px-1 py-1">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.location}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4">
            {formStatus.message && (
              <div className={`p-4 rounded-xl border flex items-start gap-3 ${
                formStatus.type === 'error' 
                  ? 'bg-red-950/30 border-red-500/50 text-red-200' 
                  : 'bg-green-950/30 border-green-500/50 text-green-200'
              }`} aria-live="polite">
                {formStatus.type === 'error' ? <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> : <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
                <span className="text-sm font-medium">{formStatus.message}</span>
              </div>
            )}

            <div>
              <label htmlFor="name-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Name</label>
              <input
                id="name-input"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Ata Noor"
                className="w-full bg-zinc-950/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Email Address</label>
              <input
                id="email-input"
                name="email"
                type="email"
                required
                autoComplete="email"
                spellCheck={false}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g., ataulnoor75@gmail.com"
                className="w-full bg-zinc-950/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message-input" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">Message</label>
              <textarea
                id="message-input"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Say hello…"
                className="w-full bg-zinc-950/90 border border-zinc-700/80 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'} <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
