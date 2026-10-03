import { useState } from 'react'
import { Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { company } from '../config/company'

const PROJECT_TYPES = [
  'Web Application',
  'Custom Software',
  'AI / ML',
  'Generative AI',
  'Automation',
  'API / Backend',
  'Cloud / Deployment',
  'Technical Consulting',
  'Other',
]

const BUDGET_RANGES = [
  'Under ₹50K',
  '₹50K – ₹1L',
  '₹1L – ₹5L',
  '₹5L+',
  'Not sure yet',
]

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
}

const INITIAL_ERRORS = {}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Your name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Tell us a bit about your project.'
  if (form.message.trim().length > 0 && form.message.trim().length < 20) {
    errors.message = 'Please give us a little more detail (at least 20 characters).'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      // Focus first error
      const first = Object.keys(validationErrors)[0]
      document.getElementById(first)?.focus()
      return
    }

    setSubmitting(true)
    setSubmitError('')

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone || 'Not provided',
            company: form.company || 'Not provided',
            _subject: `New Enquiry — ${form.projectType || 'General'} — ${form.name}`,
            projectType: form.projectType || 'Not specified',
            budget: form.budget || 'Not specified',
            message: form.message,
          }),
        })
        if (!res.ok) throw new Error('Network response was not ok')
        setSubmitted(true)
        setForm(INITIAL_FORM)
      } catch (err) {
        setSubmitError('Something went wrong. Please try emailing us directly.')
      } finally {
        setSubmitting(false)
      }
    } else {
      // No endpoint configured — show success for demo purposes
      setTimeout(() => {
        setSubmitted(true)
        setForm(INITIAL_FORM)
        setSubmitting(false)
      }, 800)
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-16 lg:py-20">
        <div className="container-site">
          <span className="section-label">Contact</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mt-3 mb-4 max-w-2xl text-balance">
            Have a project in mind? Let's talk.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Tell us what you're building, what you're trying to solve, or where you're stuck.
            We'll get back to you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-2xl bg-white border border-zinc-100">
                  <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 size={22} className="text-green-600" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-2">
                    Message received.
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                    Thanks for reaching out. We'll review your message and get back to you
                    within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl border border-zinc-100 p-7 lg:p-8 space-y-6"
                >
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Your name"
                        className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                      />
                      {errors.name && (
                        <p id="name-error" className="form-error" role="alert">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="form-label">Company</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company (optional)"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="you@company.com"
                        className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error" role="alert">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210 (optional)"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="form-label">Project type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a category</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="form-label">Budget range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select a range</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell us about your project, what problem you're solving, or what you'd like to discuss."
                      className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-400 focus:border-red-400' : ''}`}
                    />
                    {errors.message && (
                      <p id="message-error" className="form-error" role="alert">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3" role="alert">
                      {submitError}
                    </p>
                  )}

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                      We'll usually respond within 1–2 business days.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-medium text-sm rounded-lg hover:bg-navy-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                    >
                      {submitting ? 'Sending…' : 'Send Enquiry'}
                      {!submitting && <ArrowUpRight size={15} />}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar — contact details */}
            <div className="lg:col-span-4">
              <div className="space-y-5">
                <div className="rounded-xl border border-zinc-200 bg-white p-5 space-y-5">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Contact details
                  </h2>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1.5 rounded-md bg-zinc-50 border border-zinc-100">
                      <Mail size={13} className="text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">Email</p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-zinc-700 hover:text-blue-600 transition-colors break-all"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1.5 rounded-md bg-zinc-50 border border-zinc-100">
                      <MapPin size={13} className="text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">Location</p>
                      <p className="text-sm text-zinc-700">{company.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1.5 rounded-md bg-zinc-50 border border-zinc-100">
                      <Clock size={13} className="text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-medium">Response time</p>
                      <p className="text-sm text-zinc-700">1–2 business days</p>
                    </div>
                  </div>
                </div>

                {/* What happens next */}
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    What happens next
                  </h3>
                  <div className="space-y-3">
                    {[
                      { n: '01', text: 'We review your message within 1\u20132 business days.' },
                      { n: '02', text: "We'll reply with clarifying questions or schedule a call." },
                      { n: '03', text: 'We discuss the project scope and give you an honest assessment.' },
                    ].map((item) => (
                      <div key={item.n} className="flex gap-3">
                        <span className="text-xs font-mono text-zinc-300 shrink-0 pt-0.5">{item.n}</span>
                        <p className="text-xs text-zinc-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
