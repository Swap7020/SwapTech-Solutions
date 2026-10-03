import { Link } from 'react-router-dom'
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react'
import { company } from '../config/company'

const footerServices = [
  { label: 'Web Application Development', to: '/services/web-development' },
  { label: 'Custom Software', to: '/services/custom-software' },
  { label: 'AI & Machine Learning', to: '/services/ai-ml' },
  { label: 'Generative AI', to: '/services/generative-ai' },
  { label: 'Data Analytics', to: '/services/data-analytics' },
  { label: 'Automation', to: '/services/automation' },
  { label: 'Backend & APIs', to: '/services/backend-api' },
]

const footerCompany = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white mt-auto">
      {/* Main footer */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-lg text-white text-sm font-bold font-display">
                ST
              </span>
              <span className="font-display font-semibold text-white text-sm">
                SwapTech Solutions
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mt-4 max-w-xs">
              Technology that solves real business problems.
            </p>
            <p className="text-zinc-500 text-xs mt-3">
              {company.location}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {company.linkedin && (
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {company.github && (
                <a
                  href={company.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <Github size={16} />
                </a>
              )}
              <a
                href={`mailto:${company.email}`}
                aria-label="Email"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {footerCompany.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
              Get in touch
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">
              Have a project in mind? We'd like to hear about it.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-zinc-300 transition-colors duration-150"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </Link>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${company.email}`}
                className="block text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors duration-150"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
