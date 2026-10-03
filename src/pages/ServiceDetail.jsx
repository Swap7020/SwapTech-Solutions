import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight, ArrowLeft, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-4 text-left text-sm font-medium text-zinc-800 hover:text-zinc-900 transition-colors gap-4"
      >
        {q}
        <ChevronDown
          size={16}
          className={`shrink-0 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-zinc-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)

  if (!service) {
    return (
      <div className="container-site py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-zinc-900 mb-4">Service not found</h1>
        <Link to="/services" className="btn-primary">
          Back to Services
        </Link>
      </div>
    )
  }

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-12 lg:py-16">
        <div className="container-site">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8">
            <Link to="/" className="hover:text-zinc-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/services" className="hover:text-zinc-600 transition-colors">Services</Link>
            <ChevronRight size={12} />
            <span className="text-zinc-600">{service.title}</span>
          </nav>

          <div className="flex items-start gap-4 mb-5">
            <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-100">
              <ServiceIcon name={service.icon} size={24} className="text-zinc-600" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400">{service.number}</span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 mt-1">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-18 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main */}
            <div className="lg:col-span-8 space-y-12">
              {/* Problem */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">The problem</h2>
                <p className="text-zinc-600 leading-relaxed">{service.problem}</p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">Our approach</h2>
                <p className="text-zinc-600 leading-relaxed">{service.approach}</p>
              </div>

              {/* What we build */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">What we build</h2>
                <ul className="space-y-2">
                  {service.whatWeBuild.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-6">Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex flex-col items-center gap-1 shrink-0">
                        <div className="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center text-white text-[10px] font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        {i < service.process.length - 1 && (
                          <div className="flex-1 w-px bg-zinc-200 min-h-[1.5rem]" />
                        )}
                      </div>
                      <div className="pb-4">
                        <h3 className="font-semibold text-zinc-900 text-sm mb-1">{step.step}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {service.faqs?.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-zinc-900 mb-4">
                    Frequently asked questions
                  </h2>
                  <div className="rounded-xl border border-zinc-200 bg-white divide-y divide-zinc-100 overflow-hidden">
                    <div className="px-5">
                      {service.faqs.map((faq) => (
                        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-5">
                {/* Technologies */}
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="flex items-center justify-between p-5 rounded-xl bg-navy-900 text-white hover:bg-navy-800 transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-sm">Start a project</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Tell us what you need.</div>
                  </div>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                {/* Other services */}
                <div className="rounded-xl border border-zinc-200 bg-white p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                    Other services
                  </h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.id}`}
                          className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors group/link"
                        >
                          <ServiceIcon name={s.icon} size={13} className="text-zinc-400 group-hover/link:text-zinc-600 shrink-0" />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to="/services"
                        className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors mt-1"
                      >
                        All services <ArrowUpRight size={11} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back nav */}
      <div className="bg-white border-t border-zinc-100 py-6">
        <div className="container-site">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft size={14} />
            All services
          </Link>
        </div>
      </div>
    </>
  )
}
