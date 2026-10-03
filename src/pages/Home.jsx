import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import HeroDashboard from '../components/HeroDashboard'
import ServiceIcon from '../components/ServiceIcon'
import ProjectPreview from '../components/ProjectPreview'
import { services } from '../data/services'
import { whyUs, principles, processSteps, technologies } from '../data/values'
import { projects } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container-site relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={0}
              >
                <span className="section-label">
                  SOFTWARE · AI · DIGITAL SOLUTIONS
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={1}
                className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold text-zinc-900 leading-tight mt-2 text-balance"
              >
                Technology that solves real business problems.
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={2}
                className="mt-5 text-lg text-zinc-500 leading-relaxed max-w-xl"
              >
                SwapTech Solutions helps businesses design, build and scale reliable digital
                products using modern software engineering, AI/ML and automation.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={3}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link to="/contact" className="btn-primary">
                  Start a Project
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </motion.div>

              {/* Trust micro-detail */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={4}
                className="mt-6 flex items-center gap-2 text-xs text-zinc-400"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="inline-block w-4 h-px bg-zinc-300" />
                  From idea
                </span>
                <MoveRight size={12} className="text-zinc-300" />
                <span>Development</span>
                <MoveRight size={12} className="text-zinc-300" />
                <span>Deployment</span>
              </motion.div>
            </div>

            {/* Right — Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <HeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="section-label">Our Philosophy</span>
              <h2 className="section-heading mt-2">
                We build technology around your business.
              </h2>
            </div>
            <div>
              <p className="text-zinc-500 text-base leading-relaxed">
                Every business has different challenges. We don't believe in one-size-fits-all
                software. We understand the problem first, design the right solution, and build
                technology that can grow with your business.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {principles.map((p) => (
                  <div key={p.id}>
                    <div className="text-xs font-mono text-zinc-300 mb-2">{p.number}</div>
                    <h3 className="font-semibold text-zinc-900 text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#fafafa]">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-label">What we do</span>
              <h2 className="section-heading mt-2">Services</h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150 shrink-0"
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100 rounded-xl overflow-hidden">
            {services.slice(0, 8).map((service, i) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-white p-6 hover:bg-zinc-50 transition-colors duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:border-zinc-200 transition-colors duration-200">
                    <ServiceIcon name={service.icon} size={18} className="text-zinc-600" />
                  </div>
                  <span className="text-xs font-mono text-zinc-300">{service.number}</span>
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-1 mt-4 text-xs font-medium text-blue-600 group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowUpRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY SWAPTECH ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="section-label">Why work with us</span>
            <h2 className="section-heading mt-2">
              Built on trust, delivered with care.
            </h2>
            <p className="section-subheading">
              We're small enough to genuinely care about your project and technical enough to build it properly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.id}>
                <div className="mb-3">
                  <ServiceIcon name={item.icon} size={20} className="text-navy-800" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#fafafa] border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-xl mb-14">
            <span className="section-label">How we work</span>
            <h2 className="section-heading mt-2">From idea to production.</h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-5 left-5 right-5 h-px bg-zinc-200" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
              {processSteps.map((step, i) => (
                <div key={step.number} className="relative">
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-3 lg:text-center">
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-xs font-bold text-navy-900">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 text-sm">{step.title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-zinc-100">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-label">Selected Work</span>
              <h2 className="section-heading mt-2">Projects we've built.</h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150 shrink-0"
            >
              View all work <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-6">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center p-6 lg:p-8 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-xs text-zinc-300">{project.year}</span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-zinc-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 max-w-lg">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Project visual placeholder */}
                <div className="w-full lg:w-72 xl:w-80 shrink-0">
                  {project.usePreview ? (
                    <div className="overflow-hidden rounded-xl border border-zinc-100 shadow-subtle">
                      <ProjectPreview project={project} compact />
                    </div>
                  ) : (
                    <div className={`aspect-video rounded-xl border border-zinc-100 overflow-hidden ${
                      project.color === 'blue' ? 'bg-blue-50' : 'bg-navy-50'
                    }`}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="font-display font-bold text-2xl text-zinc-200">
                              {project.title[0]}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#fafafa] border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <span className="section-label">Technology</span>
            <h2 className="section-heading mt-2">Built with modern technology.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                  {category}
                </p>
                <ul className="space-y-2">
                  {items.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-sm text-zinc-700">
                      <span className="w-1 h-1 rounded-full bg-zinc-300 shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-navy-950">
        <div className="container-site text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
            Let's talk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Tell us what you're trying to build. We'll give you an honest opinion on the best approach.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-900 font-medium text-sm rounded-lg hover:bg-zinc-100 transition-colors duration-200"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium text-sm rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
