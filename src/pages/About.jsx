import { Link } from 'react-router-dom'
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { company, founder } from '../config/company'
import { values } from '../data/values'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <>
      {/* Page header */}
      <section className="bg-white border-b border-zinc-100 py-16 lg:py-20">
        <div className="container-site">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="section-label">About SwapTech</span>
          </motion.div>
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mt-3 mb-5 max-w-3xl text-balance"
          >
            Technology with purpose.
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-lg text-zinc-500 max-w-2xl leading-relaxed"
          >
            SwapTech Solutions was built on the conviction that businesses of every size deserve
            software that actually works — software designed around their problems, not around
            a vendor's roadmap.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6 text-zinc-600 leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-zinc-900">
                Why SwapTech exists.
              </h2>
              <p>
                Most small businesses and growing teams can't afford a large agency, don't have
                the internal engineering capacity they need, and aren't well served by generic
                SaaS tools. They end up with software that doesn't quite fit, or with projects
                that drag on without clarity.
              </p>
              <p>
                SwapTech Solutions was started to close that gap. We work as a focused technical
                partner — small enough to give your project real attention, and technically capable
                enough to build it properly. We take on work we can do well, communicate clearly
                about what we're building, and stay involved after launch.
              </p>
              <p>
                We're particularly focused on AI/ML, automation and software that connects different
                parts of a business. These are areas where the right technical approach can
                genuinely change how a business operates — and where a lot of organisations
                don't yet know what's possible.
              </p>
              <h3 className="font-display text-xl font-semibold text-zinc-900 pt-2">
                Our engineering philosophy.
              </h3>
              <p>
                We believe in writing software that can be maintained. Not just code that works
                today, but code that another developer can read, understand and extend six months
                from now. We document what we build. We test the things that matter. We choose
                boring, reliable technology over whatever is currently trending.
              </p>
              <p>
                We also believe that good technical decisions require business context.
                We don't just accept a brief and build what's described — we ask questions
                about the underlying goal, and sometimes that changes the solution.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-5">
                {/* Quick facts */}
                <div className="rounded-xl border border-zinc-200 bg-white p-6 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Company
                  </h3>
                  {[
                    { label: 'Location', value: company.location },
                    { label: 'Founded', value: company.founded },
                    { label: 'Specialisation', value: 'Software, AI/ML, Automation' },
                    { label: 'Contact', value: company.email },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-xs text-zinc-400 font-medium">{item.label}</span>
                      <span className="text-sm text-zinc-700">{item.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-between p-5 rounded-xl bg-navy-900 text-white hover:bg-navy-800 transition-colors duration-200 group"
                >
                  <div>
                    <div className="font-semibold text-sm">Have a project?</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Let's talk about it.</div>
                  </div>
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <span className="section-label">What we stand for</span>
            <h2 className="section-heading mt-2">Company values.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {values.map((v, i) => (
              <div key={v.id}>
                <div className="font-display text-3xl font-bold text-zinc-100 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-semibold text-zinc-900 text-base mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-20 bg-[#fafafa] border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-xl mb-12">
            <span className="section-label">The team</span>
            <h2 className="section-heading mt-2">Meet the founder.</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-navy-100 border border-navy-200 flex items-center justify-center overflow-hidden">
                {/* Portrait placeholder — replace with actual photo */}
                <div className="flex items-center justify-center w-full h-full bg-navy-900">
                  <span className="font-display font-bold text-2xl text-white">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-bold text-zinc-900">{founder.name}</h3>
              <p className="text-sm text-zinc-500 mt-0.5 mb-4">{founder.title}</p>
              <p className="text-zinc-600 leading-relaxed mb-6">{founder.bio}</p>

              <div className="flex items-center gap-3">
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                )}
                {founder.github && (
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200"
                  >
                    <Github size={14} /> GitHub
                  </a>
                )}
                <a
                  href={`mailto:${founder.email}`}
                  aria-label="Email"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200"
                >
                  <Mail size={14} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 lg:py-20 bg-white border-t border-zinc-100">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="section-label">Long-term vision</span>
            <h2 className="section-heading mt-2 mb-5">Where we're going.</h2>
            <div className="space-y-4 text-zinc-500 leading-relaxed">
              <p>
                Our long-term goal is straightforward: to be the go-to technical partner for growing
                businesses that want software built properly. Not the biggest agency. Not the cheapest
                option. The one that does good work, communicates honestly and delivers something
                that actually runs in production.
              </p>
              <p>
                We're particularly interested in AI/ML applications where the technology is practical
                rather than speculative — prediction, extraction, automation, classification.
                Problems where a well-trained model or a well-designed pipeline can create
                a real operational advantage for a business.
              </p>
              <p>
                We're building slowly and deliberately. Taking on work we can do well.
                Building a track record project by project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
