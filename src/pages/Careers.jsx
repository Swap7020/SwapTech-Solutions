import { useState } from 'react'
import { ArrowUpRight, Code2, BrainCircuit, Sparkles, Wrench, CheckCircle2, Upload, X } from 'lucide-react'
import { company } from '../config/company'

const interests = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Building maintainable systems in Python, JavaScript and modern frameworks. We care about readable code and good architecture.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description:
      'Practical ML — prediction, classification, natural language, computer vision. Applied to real business problems.',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description:
      'LLM applications, RAG pipelines, document intelligence and AI-powered workflows built with reliability in mind.',
  },
  {
    icon: Wrench,
    title: 'Building Products',
    description:
      'End-to-end development — from database schema to deployed interface. Ownership of the full stack.',
  },
]

const ROLES = [
  'Python / Backend Developer',
  'React / Frontend Developer',
  'Full Stack Developer',
  'AI / ML Engineer',
  'Generative AI Developer',
  'DevOps / Cloud Engineer',
  'Open Application',
]

const EXPERIENCE_LEVELS = [
  'Student / Fresher',
  '0–1 years',
  '1–2 years',
  '2–4 years',
  '4+ years',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  role: '',
  experience: '',
  github: '',
  portfolio: '',
  linkedin: '',
  about: '',
  availability: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Your name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.role) errors.role = 'Please select a role.'
  if (!form.about.trim()) errors.about = 'Tell us a little about yourself.'
  if (form.about.trim().length > 0 && form.about.trim().length < 30) {
    errors.about = 'Please add a bit more detail (at least 30 characters).'
  }
  return errors
}

export default function Careers() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      document.getElementById(Object.keys(validationErrors)[0])?.focus()
      return
    }

    setSubmitting(true)
    setSubmitError('')

    const endpoint = import.meta.env.VITE_CAREERS_ENDPOINT

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            // Formspree uses these field names in the email subject/body
            name: form.name,
            email: form.email,
            phone: form.phone || 'Not provided',
            _subject: `Career Application — ${form.role} — ${form.name}`,
            role: form.role,
            experience: form.experience || 'Not specified',
            availability: form.availability || 'Not specified',
            github: form.github || 'Not provided',
            linkedin: form.linkedin || 'Not provided',
            portfolio: form.portfolio || 'Not provided',
            about: form.about,
          }),
        })
        if (!res.ok) throw new Error('Network error')
        setSubmitted(true)
        setForm(INITIAL_FORM)
      } catch {
        setSubmitError('Something went wrong. Please email us directly.')
      } finally {
        setSubmitting(false)
      }
    } else {
      // Demo mode — no endpoint configured
      setTimeout(() => {
        setSubmitted(true)
        setForm(INITIAL_FORM)
        setSubmitting(false)
      }, 800)
    }
  }

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-white border-b border-zinc-100 py-16 lg:py-20">
        <div className="container-site">
          <span className="section-label">Careers</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mt-3 mb-5 max-w-2xl text-balance">
            Build with us.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            We're a small, focused team. If you like solving real technical problems and working
            on software that actually gets used, we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left column */}
            <div className="lg:col-span-7 space-y-10">

              {/* Who we're looking for */}
              <div>
                <h2 className="font-display text-2xl font-bold text-zinc-900 mb-4">
                  Who we're interested in.
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  We're looking for developers and engineers who enjoy working on problems
                  that matter. You don't have to fit a particular seniority label — we care
                  more about how you think and what you've actually built.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Right now, we're particularly interested in people with experience or
                  strong interest in the areas below.
                </p>
              </div>

              {/* Interest areas */}
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="p-5 rounded-xl bg-white border border-zinc-100">
                    <div className="mb-3 p-2 rounded-lg bg-zinc-50 border border-zinc-100 w-fit">
                      <Icon size={16} className="text-zinc-600" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-zinc-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>

              {/* What it's like */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">
                  What working with SwapTech is like.
                </h2>
                <div className="space-y-3 text-zinc-600 text-sm leading-relaxed">
                  <p>
                    We work on real client projects — not internal side projects or practice exercises.
                    You'll work on things that go into production and are used by real businesses.
                  </p>
                  <p>
                    We're small. That means broad ownership, direct communication and no
                    bureaucratic overhead. It also means we expect you to take responsibility
                    for your work.
                  </p>
                  <p>
                    We're currently at an early stage, building our team and our client base.
                    If you're interested in growing alongside a company from the beginning,
                    that's what this is.
                  </p>
                </div>
              </div>

              {/* ── Application Form ── */}
              <div id="apply">
                <div className="mb-6">
                  <h2 className="font-display text-2xl font-bold text-zinc-900 mb-1">
                    Send your application.
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Fill in the form below. We review every application personally.
                  </p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-14 px-8 rounded-2xl bg-white border border-zinc-100">
                    <div className="w-12 h-12 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 size={22} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-zinc-900 mb-2">
                      Application received.
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                      Thanks for applying. We'll review your profile and get back to you within
                      a few business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-white rounded-2xl border border-zinc-100 p-6 lg:p-7 space-y-5"
                  >
                    {/* Row 1 — Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="form-label">
                          Full name <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" autoComplete="name"
                          value={form.name} onChange={handleChange}
                          placeholder="Swapnil Repale"
                          aria-invalid={!!errors.name}
                          className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.name && <p className="form-error" role="alert">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" autoComplete="email"
                          value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                        />
                        {errors.email && <p className="form-error" role="alert">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2 — Phone + Role */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                          id="phone" name="phone" type="tel" autoComplete="tel"
                          value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210 (optional)"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="role" className="form-label">
                          Role you're applying for <span className="text-red-500" aria-hidden>*</span>
                        </label>
                        <select
                          id="role" name="role"
                          value={form.role} onChange={handleChange}
                          aria-invalid={!!errors.role}
                          className={`form-input ${errors.role ? 'border-red-400 focus:ring-red-400' : ''}`}
                        >
                          <option value="">Select a role</option>
                          {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                        </select>
                        {errors.role && <p className="form-error" role="alert">{errors.role}</p>}
                      </div>
                    </div>

                    {/* Row 3 — Experience + Availability */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="experience" className="form-label">Experience level</label>
                        <select
                          id="experience" name="experience"
                          value={form.experience} onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select level</option>
                          {EXPERIENCE_LEVELS.map((e) => <option key={e} value={e}>{e}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="availability" className="form-label">Availability</label>
                        <input
                          id="availability" name="availability" type="text"
                          value={form.availability} onChange={handleChange}
                          placeholder="e.g. Immediate / 30-day notice"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Row 4 — GitHub + Portfolio */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="github" className="form-label">GitHub profile</label>
                        <input
                          id="github" name="github" type="url"
                          value={form.github} onChange={handleChange}
                          placeholder="https://github.com/username"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                        <input
                          id="linkedin" name="linkedin" type="url"
                          value={form.linkedin} onChange={handleChange}
                          placeholder="https://linkedin.com/in/username"
                          className="form-input"
                        />
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label htmlFor="portfolio" className="form-label">Portfolio / website</label>
                      <input
                        id="portfolio" name="portfolio" type="url"
                        value={form.portfolio} onChange={handleChange}
                        placeholder="https://yourportfolio.com (optional)"
                        className="form-input"
                      />
                    </div>

                    {/* About */}
                    <div>
                      <label htmlFor="about" className="form-label">
                        About you & your work <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <textarea
                        id="about" name="about" rows={5}
                        value={form.about} onChange={handleChange}
                        aria-invalid={!!errors.about}
                        placeholder="Tell us what you've built, what you're interested in working on, and why SwapTech. Link to projects or code if you have them."
                        className={`form-input resize-none ${errors.about ? 'border-red-400 focus:ring-red-400' : ''}`}
                      />
                      {errors.about && <p className="form-error" role="alert">{errors.about}</p>}
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3" role="alert">
                        {submitError}
                      </p>
                    )}

                    <div className="flex items-center justify-between gap-4 pt-1">
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                        We review every application personally and respond within a few business days.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-medium text-sm rounded-lg hover:bg-navy-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shrink-0"
                      >
                        {submitting ? 'Sending…' : 'Submit Application'}
                        {!submitting && <ArrowUpRight size={15} />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-5">

                {/* Status */}
                <div className="rounded-xl border border-zinc-200 bg-white p-6">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100 text-xs font-medium text-amber-700 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Building our team
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2 text-sm">
                    No specific openings right now.
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-5">
                    We don't advertise positions we aren't actively hiring for. But we're always
                    interested in strong engineers who want to work on meaningful projects.
                  </p>
                  <a
                    href="#apply"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Apply now
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* What to include */}
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    What makes a strong application
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { label: 'Real projects', detail: "GitHub links, deployed apps — things you've actually shipped." },
                      { label: 'Clear motivation', detail: "Why SwapTech, and what kind of work you want to do." },
                      { label: 'Honest experience', detail: "Tell us where you are, not where you wish you were." },
                      { label: 'Technical depth', detail: 'Python, React, AI/ML, or whatever you know well.' },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                        <div>
                          <span className="text-xs font-semibold text-zinc-700">{item.label} — </span>
                          <span className="text-xs text-zinc-500">{item.detail}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    Our process
                  </h3>
                  <div className="space-y-3">
                    {[
                      { n: '01', text: 'We review your application within a few business days.' },
                      { n: '02', text: 'If there\'s a fit, we set up a short introductory call.' },
                      { n: '03', text: 'A small technical discussion or take-home task.' },
                      { n: '04', text: 'Offer and onboarding.' },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-3">
                        <span className="text-xs font-mono text-zinc-300 shrink-0 pt-0.5">{s.n}</span>
                        <p className="text-xs text-zinc-600 leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prefer email */}
                <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Prefer to email directly?{' '}
                    <a
                      href={`mailto:${company.email}?subject=Application — SwapTech`}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      {company.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
