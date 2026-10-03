import { company } from '../config/company'

export default function Terms() {
  return (
    <section className="py-16 lg:py-20 bg-[#fafafa]">
      <div className="container-site max-w-3xl">
        <span className="section-label">Legal</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 mt-3 mb-3">
          Terms of Use
        </h1>
        <p className="text-sm text-zinc-400 mb-10">
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="bg-white rounded-2xl border border-zinc-100 p-8 lg:p-10 space-y-8 text-zinc-600 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">1. Acceptance of terms</h2>
            <p>
              By accessing the {company.name} website at {company.domain}, you agree to these terms
              of use. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">2. Use of the website</h2>
            <p>
              This website is provided for informational purposes. You may not use it for any
              unlawful purpose, or in any way that could damage or impair the site or interfere
              with other users.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">3. Intellectual property</h2>
            <p>
              All content on this website — including text, design, graphics and code — is the
              property of {company.name} unless otherwise stated. You may not reproduce or
              redistribute it without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">4. Disclaimer</h2>
            <p>
              The information on this website is provided in good faith but without warranties
              of any kind. {company.name} does not guarantee that the site will be uninterrupted,
              error-free or free from viruses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">5. Limitation of liability</h2>
            <p>
              {company.name} shall not be liable for any indirect or consequential loss arising
              from your use of, or inability to use, this website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">6. External links</h2>
            <p>
              This site may contain links to external websites. We are not responsible for the
              content or privacy practices of those sites.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">7. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to
              the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">8. Contact</h2>
            <p>
              Questions about these terms?{' '}
              <a href={`mailto:${company.email}`} className="text-link">
                {company.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
