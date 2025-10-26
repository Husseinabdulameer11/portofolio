import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const { lang } = useLang()
  const [project, setProject] = useState(null)

  useEffect(() => {
    if (!id) return
  fetch(`https://portofolio-8whp.onrender.com/api/projects/${id}`)
      .then(r => r.json())
      .then(setProject)
      .catch((err) => console.error(err))
  }, [id])

  if (!project) return <div>Loading...</div>

  return (
    <article className="project-detail-page">
      <header className="project-header">
        <h1>{project.name}</h1>
      </header>
      <section className="project-description">
        <p>{(project.long && project.long[lang]) || project.long?.en}</p>
      </section>
      <section className="project-media">
        {project.media && project.media.map((m, i) => (
          m.type === 'image' ? (
            <img key={i} src={`/${m.src}`} alt={`${project.name} ${i}`} />
          ) : m.type === 'video' ? (
            <video key={i} controls src={m.src} />
          ) : null
        ))}
      </section>
      <section className="project-links">
        {project.links?.repo && <a href={project.links.repo} target="_blank" rel="noreferrer">Repo</a>}
        {project.links?.live && <a href={project.links.live} target="_blank" rel="noreferrer">Live</a>}
      </section>
    </article>
  )
}
