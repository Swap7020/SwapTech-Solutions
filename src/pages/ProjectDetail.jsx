import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ChevronRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectPreview from '../components/ProjectPreview'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project || project.placeholder) {
    return (
      <div className="container-site py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-zinc-900 mb-4">Project details unavailable</h1>
        <p className="text-zinc-500 mb-6">This project isn't publicly listed yet.</p>
        <Link to="/work" className="btn-primary">Back to Work</Link>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-zinc-100 py-12 lg:py-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-400 mb-8">
            <Link to="/" className="hover:text-zinc-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/work" className="hover:text-zinc-600 transition-colors">Work</Link>
            <ChevronRight size={12} />
            <span className="text-zinc-600">{project.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
                {project.year && (
                  <span className="text-xs text-zinc-300 border-l border-zinc-200 pl-3">{project.year}</span>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
                {project.title}
              </h1>
              <p className="text-zinc-500 leading-relaxed mb-4">{project.tagline}</p>

              {/* External links */}
              <div className="flex items-center flex-wrap gap-2 mb-5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-all duration-200"
                  >
                    <Github size={13} /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-900 text-white text-xs font-medium hover:bg-navy-800 transition-all duration-200"
                  >
                    <ExternalLink size={13} /> Live App
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project visual */}
            <div className={`aspect-[16/10] rounded-xl border border-zinc-100 overflow-hidden ${
              project.usePreview ? '' : (project.color === 'blue' ? 'bg-blue-50' : 'bg-navy-50')
            }`}>
              {project.usePreview ? (
                <ProjectPreview project={project} />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display font-bold text-6xl text-zinc-200">
                    {project.title[0]}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case study content */}
      <section className="py-14 lg:py-18 bg-[#fafafa]">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="font-display text-xl font-bold text-zinc-900 mb-3">Overview</h2>
                <p className="text-zinc-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Problem */}
              {project.problem && (
                <div>
                  <h2 className="font-display text-xl font-bold text-zinc-900 mb-3">The challenge</h2>
                  <p className="text-zinc-600 leading-relaxed">{project.problem}</p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="font-display text-xl font-bold text-zinc-900 mb-3">What we built</h2>
                  <p className="text-zinc-600 leading-relaxed">{project.solution}</p>
                </div>
              )}

              {/* Outcome */}
              {project.outcome && (
                <div className="p-6 rounded-xl bg-white border border-zinc-200">
                  <h2 className="font-semibold text-zinc-900 text-sm uppercase tracking-wider mb-2 text-zinc-400">
                    Outcome
                  </h2>
                  <p className="text-zinc-700 leading-relaxed">{project.outcome}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-5">
                <div className="rounded-xl border border-zinc-200 bg-white p-5 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                    Project details
                  </h3>
                  {project.year && (
                    <div>
                      <span className="text-xs text-zinc-400 font-medium">Year</span>
                      <p className="text-sm text-zinc-700 mt-0.5">{project.year}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-xs text-zinc-400 font-medium">Category</span>
                    <p className="text-sm text-zinc-700 mt-0.5">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 font-medium">Technologies</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-100 text-xs text-zinc-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-between p-5 rounded-xl bg-navy-900 text-white hover:bg-navy-800 transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-sm">Build something similar?</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Get in touch.</div>
                  </div>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-t border-zinc-100 py-6">
        <div className="container-site">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={14} /> All work
          </Link>
        </div>
      </div>
    </>
  )
}
