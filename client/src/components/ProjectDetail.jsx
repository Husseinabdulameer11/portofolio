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

  const [carouselIndex, setCarouselIndex] = useState(0);
  if (!project) return <div>Loading...</div>;

  // Find the first image as logo
  const logo = project.media?.find(m => m.type === 'image');
  // All media for carousel
  const carouselMedia = project.media || [];

  const prev = () => setCarouselIndex((i) => (i === 0 ? carouselMedia.length - 1 : i - 1));
  const next = () => setCarouselIndex((i) => (i === carouselMedia.length - 1 ? 0 : i + 1));

  return (
    <article className="project-detail-page">
      <header className="project-header">
        <h1>{project.name}</h1>
      </header>
      <section className="project-top-row">
        {logo && (
          <div className="project-logo">
            <img src={`/${logo.src}`} alt={project.name + ' logo'} />
          </div>
        )}
        <div className="project-description">
          <p>{(project.long && project.long[lang]) || project.long?.en}</p>
        </div>
      </section>
      {carouselMedia.length > 0 && (
        <section className="project-carousel">
          <button className="carousel-btn" onClick={prev}>&lt;</button>
          <div className="carousel-media">
            {carouselMedia[carouselIndex].type === 'image' ? (
              <img src={`/${carouselMedia[carouselIndex].src}`} alt={project.name + ' media'} />
            ) : (
              <video controls src={`/${carouselMedia[carouselIndex].src}`} />
            )}
          </div>
          <button className="carousel-btn" onClick={next}>&gt;</button>
        </section>
      )}
      <section className="project-links">
        {project.links?.repo && <a href={project.links.repo} target="_blank" rel="noreferrer">Repo</a>}
        {project.links?.live && <a href={project.links.live} target="_blank" rel="noreferrer">Live</a>}
      </section>
    </article>
  );
}
