import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-16 lg:py-20">
        <div className="container-site">
          <span className="section-label">What we do</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mt-3 mb-5 max-w-2xl text-balance">
            Services
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
            We work across the full software development stack — from initial architecture to production deployment.
            Here's where we focus.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i % 3}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group flex flex-col h-full p-6 lg:p-7 bg-white rounded-xl border border-zinc-100 hover:border-zinc-200 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:border-zinc-200 transition-colors duration-200">
                      <ServiceIcon name={service.icon} size={20} className="text-zinc-600" />
                    </div>
                    <span className="text-xs font-mono text-zinc-300 font-medium">{service.number}</span>
                  </div>
                  <h2 className="font-semibold text-zinc-900 text-base mb-2 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100 text-zinc-400 text-[10px]">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 mt-5 text-xs font-medium text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                    Learn more <ArrowUpRight size={12} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950 text-center">
        <div className="container-site">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Not sure which service fits?
          </h2>
          <p className="text-zinc-400 text-base mb-7 max-w-md mx-auto">
            Describe what you're trying to build and we'll suggest the right approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-medium text-sm rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
