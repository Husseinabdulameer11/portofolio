import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ProjectDetail from '../components/ProjectDetail'
import { useLang } from '../i18n.jsx'

export default function Projects() {
  const { id } = useParams()
  const { t } = useLang()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/api/projects')
      .then(r => r.json())
      .then(setProjects)
      .catch(err => console.error(err))
  }, [])

  if (id) {
    return <ProjectDetail />
  }

  return (
    <section>
      <h1>{t('projects_title')}</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
