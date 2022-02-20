import { useContext } from 'react'
import { TranslationsContext } from './TranslationProvider'
import Translations from './Translations'

const useTranslations = () => {
  const { language, setLanguage } = useContext(TranslationsContext)

  return {
    t: Translations[language],
    changeLanguage: (lang) => setLanguage(lang),
  }
}

export default useTranslations
