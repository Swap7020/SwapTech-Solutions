/**
 * MyDriverPreview — faithful recreation of the MyDriver customer-facing
 * landing page, based on the actual application screenshot.
 * Rendered as JSX so no external image file is required.
 */
export default function MyDriverPreview({ compact = false }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-zinc-200 shadow-elevated select-none"
      aria-hidden="true"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* ── Window chrome ── */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
        <span className="w-2 h-2 rounded-full bg-zinc-600" />
        <span className="w-2 h-2 rounded-full bg-zinc-600" />
        <span className="w-2 h-2 rounded-full bg-zinc-600" />
        <span className="ml-2 text-[9px] text-zinc-400 font-mono">mydriver.app</span>
      </div>

      {/* ── Navbar ── */}
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ background: '#1e1f2e' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded-md"
            style={{ width: 26, height: 26, background: '#4f6af5' }}
          >
            {/* Car icon — simplified */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l1.5-4.5h11L19 13" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <rect x="3" y="13" width="18" height="5" rx="1.5" stroke="white" strokeWidth="1.8"/>
              <circle cx="7.5" cy="18.5" r="1.5" fill="white"/>
              <circle cx="16.5" cy="18.5" r="1.5" fill="white"/>
            </svg>
          </div>
          <span style={{ color: '#4f9cf9', fontWeight: 700, fontSize: 13 }}>MyDriver</span>
        </div>

        {/* Nav right */}
        <div className="flex items-center gap-3">
          {/* Sun icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <span style={{ color: '#e5e7eb', fontSize: 11, fontWeight: 500 }}>Login</span>
          <div
            className="flex items-center justify-center rounded-lg px-3 py-1"
            style={{ background: '#4f6af5', color: 'white', fontSize: 11, fontWeight: 600 }}
          >
            Get Started
          </div>
        </div>
      </div>

      {/* ── Hero section ── */}
      <div
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3a4fd7 0%, #4f6af5 40%, #5b7af8 70%, #3a4fd7 100%)',
          paddingTop: compact ? 24 : 36,
          paddingBottom: compact ? 24 : 36,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Subtle star/dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Headline */}
        <div className="relative z-10">
          <h1
            style={{
              color: 'white',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 2,
              fontSize: compact ? 22 : 28,
              letterSpacing: '-0.02em',
            }}
          >
            Your Car.
          </h1>
          <h1
            style={{
              color: '#fbbf24',
              fontWeight: 800,
              lineHeight: 1.15,
              fontSize: compact ? 22 : 28,
              letterSpacing: '-0.02em',
              marginBottom: compact ? 8 : 12,
            }}
          >
            Our Driver.
          </h1>

          {/* Subheading */}
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: compact ? 9 : 11,
              lineHeight: 1.6,
              maxWidth: 320,
              margin: '0 auto',
              marginBottom: compact ? 14 : 20,
            }}
          >
            Hire a verified professional driver for your personal vehicle — for
            emergencies, late nights, or whenever you need one.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-3">
            <div
              className="rounded-lg flex items-center justify-center"
              style={{
                background: '#fbbf24',
                color: '#1a1a2e',
                fontWeight: 700,
                fontSize: compact ? 9 : 11,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 7,
                paddingBottom: 7,
              }}
            >
              Get Started Free
            </div>
            <div
              className="rounded-lg flex items-center justify-center"
              style={{
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.4)',
                color: 'white',
                fontWeight: 600,
                fontSize: compact ? 9 : 11,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 7,
                paddingBottom: 7,
              }}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        className="grid grid-cols-3 divide-x"
        style={{
          background: 'white',
          borderTop: '1px solid #f4f4f5',
          divideColor: '#f4f4f5',
        }}
      >
        {[
          { value: '500+',  label: 'Verified Drivers'  },
          { value: '10K+',  label: 'Rides Completed'   },
          { value: '4.8★',  label: 'Average Rating'    },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center"
            style={{
              paddingTop: compact ? 10 : 14,
              paddingBottom: compact ? 10 : 14,
              borderRight: i < 2 ? '1px solid #f4f4f5' : 'none',
            }}
          >
            <span
              style={{
                color: '#3a4fd7',
                fontWeight: 800,
                fontSize: compact ? 13 : 17,
                letterSpacing: '-0.01em',
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                color: '#71717a',
                fontSize: compact ? 7 : 9,
                marginTop: 2,
                fontWeight: 500,
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
