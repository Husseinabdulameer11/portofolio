import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Home() {
  const { t, lang } = useLang()
  const aboutTexts = {
    en: 'I build beautiful, fast web experiences — React, Node and Express. Browse my projects and get in touch.',
    no: 'Jeg bygger vakre, raske webløsninger — React, Node og Express. Se på prosjektene mine og ta kontakt.',
    ar: 'أبني تجارب ويب جميلة وسريعة — React و Node و Express. تصفح مشاريعي وتواصل معي.'
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="eyebrow">Designer • Developer</div>
          <h1 className="hero-title">Designing for
            <br />
            Amazing People
          </h1>
          <p className="hero-sub">{aboutTexts[lang]}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#contact">Hire Me</a>
            <div className="clients">1K+ Clients</div>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-card">
            <img src="/hussein.jpeg" alt="Profile" />
          </div>
        </div>
      </div>

      {/* Ribbon removed as requested */}
    </section>
  )
}
