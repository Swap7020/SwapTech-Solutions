import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, Github, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectPreview from '../components/ProjectPreview'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const colorMap = {
  blue: 'bg-blue-50',
  navy: 'bg-[#f0f3f8]',
}

export default function Work() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-16 lg:py-20">
        <div className="container-site">
          <span className="section-label">Selected Work</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mt-3 mb-5 max-w-2xl">
            Projects we've built.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed">
            Real projects — from deployed applications to ML pipelines. We only show work we can discuss openly.
          </p>
        </div>
      </section>

      {/* Featured projects — large layout */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="container-site space-y-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2">
            Featured
          </h2>

          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={0}
            >
              <Link
                to={`/work/${project.id}`}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center p-7 lg:p-10 rounded-2xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-card transition-all duration-300"
              >
                {/* Info */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-xs text-zinc-300 border-l border-zinc-200 pl-3">
                        {project.year}
                      </span>
                    )}
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-medium text-green-700">
                        <span className="w-1 h-1 rounded-full bg-green-500" />
                        Live
                      </span>
                    )}
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-zinc-500 leading-relaxed mb-5 text-sm lg:text-base">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links row */}
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                      View case study <ArrowUpRight size={14} />
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
                      >
                        <Github size={13} /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
                      >
                        <ExternalLink size={13} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  {project.usePreview ? (
                    <div className="w-full overflow-hidden rounded-xl border border-zinc-100 shadow-subtle">
                      <ProjectPreview project={project} compact />
                    </div>
                  ) : (
                    <div className={`aspect-[4/3] rounded-xl border border-zinc-100 overflow-hidden flex items-center justify-center ${colorMap[project.color] || 'bg-zinc-50'}`}>
                      {project.image ? (
                        <img src={project.image} alt={project.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="text-center p-8">
                          <div className="font-display font-bold text-5xl text-zinc-200 mb-2">{project.title[0]}</div>
                          <div className="text-xs text-zinc-400">{project.tagline}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other projects — compact grid */}
      <section className="py-14 lg:py-16 bg-white border-t border-zinc-100">
        <div className="container-site">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
            More projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                custom={i % 3}
              >
                <Link
                  to={`/work/${project.id}`}
                  className="group flex flex-col h-full p-5 rounded-xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-card transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-50 border border-green-100 text-[9px] font-medium text-green-700">
                          <span className="w-1 h-1 rounded-full bg-green-500" />
                          Live
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-400 font-medium">{project.year}</span>
                  </div>

                  <h3 className="font-semibold text-zinc-900 text-sm mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-500">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] text-zinc-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-50">
                    <span className="flex items-center gap-1 text-xs font-medium text-blue-600 group-hover:gap-1.5 transition-all duration-200">
                      Details <ArrowUpRight size={11} />
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
                      >
                        <Github size={11} /> GitHub
                      </a>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#fafafa] border-t border-zinc-100 text-center">
        <div className="container-site">
          <p className="text-zinc-500 text-base mb-5 max-w-md mx-auto">
            Building something? We'd like to hear about it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-medium text-sm rounded-lg hover:bg-navy-800 transition-colors"
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
