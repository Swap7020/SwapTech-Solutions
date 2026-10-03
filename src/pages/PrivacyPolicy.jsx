import { company } from '../config/company'

export default function PrivacyPolicy() {
  return (
    <section className="py-16 lg:py-20 bg-[#fafafa]">
      <div className="container-site max-w-3xl">
        <span className="section-label">Legal</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 mt-3 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-400 mb-10">
          Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="bg-white rounded-2xl border border-zinc-100 p-8 lg:p-10 space-y-8 text-zinc-600 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">1. Who we are</h2>
            <p>
              {company.name} ("SwapTech", "we", "us") is a software development company based in{' '}
              {company.location}. This policy explains how we collect, use and protect your information
              when you use our website at {company.domain}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">2. Information we collect</h2>
            <p className="mb-3">
              We collect information you provide directly, including:
            </p>
            <ul className="space-y-1.5 list-none pl-0">
              {[
                'Name, email address and phone number (when you submit an enquiry)',
                'Company name and project details (if provided)',
                'Technical information about your browser and device (via analytics, if configured)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">3. How we use your information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-1.5">
              {[
                'Respond to your enquiries and project requests',
                'Communicate about potential or ongoing projects',
                'Understand how our website is used (aggregate analytics only)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">4. Data sharing</h2>
            <p>
              We do not sell, trade or rent your personal information. We do not share your
              information with third parties except where required to process your request
              (for example, form submission services) or where required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">5. Data retention</h2>
            <p>
              We retain enquiry and contact information only as long as necessary for the
              purposes described above. If you'd like your information removed, contact us
              at {company.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">6. Cookies</h2>
            <p>
              This website may use cookies for analytics purposes if an analytics provider
              is configured. No marketing or advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">7. Your rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your
              personal information. Contact us at{' '}
              <a href={`mailto:${company.email}`} className="text-link">
                {company.email}
              </a>{' '}
              for any such requests.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-zinc-900 mb-3">8. Contact</h2>
            <p>
              For privacy-related questions, email{' '}
              <a href={`mailto:${company.email}`} className="text-link">
                {company.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
