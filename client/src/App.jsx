import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { LanguageProvider, useLang } from './i18n.jsx'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function Header() {
  const { lang, setLang, t } = useLang()
  return (
    <header className="site-header">
      <div className="brand">MGR</div>
      <nav>
        <Link to="/">{t('home_title')}</Link>
        <Link to="/projects">{t('projects_title')}</Link>
        <Link to="/contact">{t('contact_title')}</Link>
      </nav>
      <div className="lang-switch">
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">EN</option>
          <option value="no">NO</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </LanguageProvider>
  )
}
