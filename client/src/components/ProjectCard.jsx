import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function ProjectCard({ project }) {
  const { lang, t } = useLang()
  const short = (project.short && project.short[lang]) || project.short?.en || ''
  // Use the first image in project.media if available
  const image = project.media?.find(m => m.type === 'image')?.src
  return (
    <article className="project-card">
      {image && (
        <div className="project-thumb">
          <img src={image} alt={project.name} />
        </div>
      )}
      <h3>{project.name}</h3>
      <p className="short-desc">{short}</p>
      {project.comingSoon ? (
        <span className="project-link coming-soon" style={{background: 'linear-gradient(90deg,#e0e0e0,#bdbdbd)', color: '#888', cursor: 'not-allowed'}}>
          {t('coming_soon') || 'Coming Soon'}
        </span>
      ) : (
        <Link className="project-link" to={`/projects/${project.id}`}>{t('read_more')}</Link>
      )}
    </article>
  )
}
