import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] py-20">
      <div className="text-center px-6">
        <p className="font-mono text-sm text-zinc-400 mb-4">404</p>
        <h1 className="font-display text-3xl font-bold text-zinc-900 mb-3">
          Page not found.
        </h1>
        <p className="text-zinc-500 text-base mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-medium rounded-lg hover:bg-navy-800 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
