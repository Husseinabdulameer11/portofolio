import React from 'react'
import { useLang } from '../i18n.jsx'

const icons = {
  phone: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 0 1-1.09 1A19 19 0 0 1 3 5.09 1 1 0 0 1 4 4h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L8.21 12.21a16 16 0 0 0 7.58 7.58l1.94-1.94a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1V21z"/></svg>
  ),
  linkedin: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37V16M8 8v8M8 8h0M12 12h0"/></svg>
  ),
  github: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.8c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
  ),
  email: (
    <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
  )
}

export default function Contact() {
  const { t } = useLang()
  const contact = {
    phone: '+47 401 90143',
    linkedin: 'https://www.linkedin.com/in/mrhussein11/',
    github: 'https://github.com/Husseinabdulameer11',
    email: 'husseinabdulameer11@gmail.com'
  }

  return (
    <section className="contact-creative">
      <h1 className="contact-title">{t('contact_title')}</h1>
      <div className="contact-list">
        <a className="contact-item" href={`tel:${contact.phone}`} target="_blank" rel="noopener">
          <span className="icon phone" />
          {icons.phone}
          <span className="contact-label">{t('phone')}</span>
          <span className="contact-value">{contact.phone}</span>
        </a>
        <a className="contact-item" href={contact.linkedin} target="_blank" rel="noopener">
          <span className="icon linkedin" />
          {icons.linkedin}
          <span className="contact-label">{t('linkedin')}</span>
          <span className="contact-value">LinkedIn</span>
        </a>
        <a className="contact-item" href={contact.github} target="_blank" rel="noopener">
          <span className="icon github" />
          {icons.github}
          <span className="contact-label">{t('github')}</span>
          <span className="contact-value">GitHub</span>
        </a>
        <a className="contact-item" href={`mailto:${contact.email}`} target="_blank" rel="noopener">
          <span className="icon email" />
          {icons.email}
          <span className="contact-label">{t('email')}</span>
          <span className="contact-value">{contact.email}</span>
        </a>
      </div>
    </section>
  )
}
