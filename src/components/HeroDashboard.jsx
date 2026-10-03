/**
 * HeroDashboard — a stylised product/dashboard interface
 * representing an application built by SwapTech Solutions.
 * This is intentionally designed to look like a real internal product UI.
 */
export default function HeroDashboard() {
  return (
    <div className="relative w-full max-w-lg xl:max-w-xl mx-auto select-none" aria-hidden="true">
      {/* Outer window frame */}
      <div className="rounded-2xl border border-zinc-200 bg-white shadow-elevated overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-100">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="ml-3 text-xs text-zinc-400 font-mono">analytics.swaptechapp.io</span>
        </div>

        {/* Dashboard layout */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-40 border-r border-zinc-100 py-4 bg-white">
            <div className="px-4 mb-4">
              <div className="h-6 w-20 rounded bg-zinc-100" />
            </div>
            {['Dashboard', 'Analytics', 'Pipelines', 'API Status', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2.5 px-4 py-2 text-xs ${
                  i === 0
                    ? 'text-navy-900 bg-navy-50 border-r-2 border-navy-800 font-medium'
                    : 'text-zinc-400'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-navy-800' : 'bg-zinc-200'}`} />
                {item}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 min-w-0">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs font-semibold text-zinc-700">Overview</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Sep 4, 2026 · 09:42 AM</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-medium text-green-700">
                  <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  All systems
                </span>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'API Calls', value: '14.2k', change: '+8.1%', up: true },
                { label: 'ML Jobs', value: '342', change: '+12%', up: true },
                { label: 'Uptime', value: '99.8%', change: 'stable', up: null },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-zinc-100 p-2.5 bg-zinc-50">
                  <div className="text-[9px] text-zinc-400 font-medium uppercase tracking-wider">{m.label}</div>
                  <div className="text-sm font-bold text-zinc-800 mt-0.5">{m.value}</div>
                  <div className={`text-[9px] mt-0.5 font-medium ${
                    m.up === true ? 'text-green-600' : m.up === false ? 'text-red-500' : 'text-zinc-400'
                  }`}>
                    {m.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="rounded-lg border border-zinc-100 bg-white p-3 mb-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold text-zinc-600">Request Volume</span>
                <span className="text-[9px] text-zinc-400">Last 7 days</span>
              </div>
              {/* SVG bar chart */}
              <svg viewBox="0 0 200 48" className="w-full h-10" preserveAspectRatio="none">
                {[28, 38, 32, 44, 36, 48, 42].map((h, i) => (
                  <rect
                    key={i}
                    x={i * 28 + 4}
                    y={48 - h}
                    width="18"
                    height={h}
                    rx="2"
                    fill={i === 5 ? '#2563eb' : '#e4e4e7'}
                  />
                ))}
              </svg>
              <div className="flex justify-between mt-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <span key={i} className="text-[8px] text-zinc-300 w-6 text-center">{d}</span>
                ))}
              </div>
            </div>

            {/* Pipeline status */}
            <div className="space-y-1.5">
              {[
                { name: 'Data Ingestion', status: 'running', color: 'bg-blue-500' },
                { name: 'ML Training', status: 'completed', color: 'bg-green-500' },
                { name: 'API Deploy', status: 'queued', color: 'bg-zinc-300' },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between py-1.5 px-2.5 rounded-md bg-zinc-50 border border-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${p.color} ${p.status === 'running' ? 'animate-pulse' : ''}`} />
                    <span className="text-[10px] text-zinc-600 font-medium">{p.name}</span>
                  </div>
                  <span className={`text-[9px] font-medium uppercase tracking-wider ${
                    p.status === 'running' ? 'text-blue-600' :
                    p.status === 'completed' ? 'text-green-600' : 'text-zinc-400'
                  }`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle glow — very restrained */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-blue-100 blur-3xl rounded-full opacity-40 pointer-events-none" />
    </div>
  )
}
