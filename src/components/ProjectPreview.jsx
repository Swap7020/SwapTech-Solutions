/**
 * ProjectPreview — resolves the correct preview component for a project
 * based on project.previewComponent field.
 */
import MyDriverPreview from './MyDriverPreview'
import TextAnalyzerPreview from './TextAnalyzerPreview'

const previewMap = {
  MyDriverPreview,
  TextAnalyzerPreview,
}

export default function ProjectPreview({ project, compact = false }) {
  const Component = previewMap[project.previewComponent]
  if (!Component) return null
  return <Component compact={compact} />
}
