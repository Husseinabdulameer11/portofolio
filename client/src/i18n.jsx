import React, { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    home_title: 'About Me',
    projects_title: 'Projects',
    contact_title: 'Contact',
    read_more: 'Read more',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email'
  },
  no: {
    home_title: 'Om meg',
    projects_title: 'Prosjekter',
    contact_title: 'Kontakt',
    read_more: 'Les mer',
    phone: 'Telefon',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'E-post'
  },
  ar: {
    home_title: 'عني',
    projects_title: 'المشاريع',
    contact_title: 'اتصل بي',
    read_more: 'اقرأ المزيد',
    phone: 'الهاتف',
    linkedin: 'لينكدإن',
    github: 'جيت هب',
    email: 'البريد الإلكتروني'
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => translations[lang][key] || key
  useEffect(() => {
    // set document language and direction for accessibility and RTL support
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'ar' ? 'ar' : lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
