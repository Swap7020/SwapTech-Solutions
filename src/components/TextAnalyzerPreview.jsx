/**
 * TextAnalyzerPreview — faithful recreation of the Advanced Text Analyzer UI
 * based on the actual application screenshot.
 */
export default function TextAnalyzerPreview({ compact = false }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border border-zinc-200 shadow-elevated select-none"
      aria-hidden="true"
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* ── Window chrome ── */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200">
        <span className="w-2 h-2 rounded-full bg-zinc-300" />
        <span className="w-2 h-2 rounded-full bg-zinc-300" />
        <span className="w-2 h-2 rounded-full bg-zinc-300" />
        <span className="ml-2 text-[9px] text-zinc-400 font-mono">advanced-text-analyzer.vercel.app</span>
      </div>

      {/* ── App navbar ── */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)' }}
      >
        <div className="flex items-center gap-2.5">
          {/* Logo icon */}
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.18)' }}
          >
            {/* </> icon simplified */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 700, fontSize: compact ? 11 : 13, lineHeight: 1.2 }}>
              Advanced Text Analyzer
            </div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 8, marginTop: 1 }}>
              FastAPI • React • Tailwind
            </div>
          </div>
        </div>

        {/* Dark mode toggle */}
        <div
          className="flex items-center justify-center rounded-full"
          style={{ width: 28, height: 28, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        className="px-5 py-4"
        style={{ background: '#f1f5f9' }}
      >
        {/* Card */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ background: 'white', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3">
            <div className="flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span style={{ fontWeight: 700, fontSize: compact ? 11 : 13, color: '#111827' }}>
                Enter Text
              </span>
            </div>
            <span style={{ fontSize: 10, color: '#6366f1', fontWeight: 500 }}>Load Sample</span>
          </div>

          {/* Textarea */}
          <div className="px-4 pb-3">
            <div
              className="w-full rounded-lg"
              style={{
                border: '1.5px solid #e5e7eb',
                background: 'white',
                height: compact ? 70 : 110,
                minHeight: compact ? 70 : 110,
              }}
            />
          </div>

          {/* Character / word count */}
          <div className="flex items-center justify-between px-5 pb-3">
            <span style={{ fontSize: 9, color: '#9ca3af' }}>Characters: 0</span>
            <span style={{ fontSize: 9, color: '#9ca3af' }}>Words: 0</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 px-5 pb-4">
            {/* Analyze */}
            <div
              className="flex items-center gap-1.5 rounded-lg"
              style={{
                background: '#4f46e5',
                color: 'white',
                fontSize: compact ? 9 : 11,
                fontWeight: 600,
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 7,
                paddingBottom: 7,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Analyze
            </div>
            {/* Copy */}
            <div
              className="flex items-center gap-1.5 rounded-lg"
              style={{
                background: '#16a34a',
                color: 'white',
                fontSize: compact ? 9 : 11,
                fontWeight: 600,
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 7,
                paddingBottom: 7,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </div>
            {/* Clear */}
            <div
              className="flex items-center gap-1.5 rounded-lg"
              style={{
                background: '#dc2626',
                color: 'white',
                fontSize: compact ? 9 : 11,
                fontWeight: 600,
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 7,
                paddingBottom: 7,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
              </svg>
              Clear
            </div>
          </div>

          {/* Tip */}
          <div
            className="text-center pb-4"
            style={{ fontSize: 9, color: '#6b7280' }}
          >
            💡 Tip: Press <strong>Ctrl</strong> + <strong>Enter</strong> to analyze instantly.
          </div>
        </div>
      </div>
    </div>
  )
}
