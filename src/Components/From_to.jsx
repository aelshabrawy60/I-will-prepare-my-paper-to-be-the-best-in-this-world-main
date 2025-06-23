import React, { useContext } from 'react'
import { Darkmood, languageContext } from '../pages/Home'

export default function From_to({from, to}) {
  const { darkMode } = useContext(Darkmood)
  const { language } = useContext(languageContext)

  const translations = {
    from: {
      en: "From",
      ar: "من"
    },
    to: {
      en: "To",
      ar: "إلى"
    },
    cairo: {
      en: "Cairo",
      ar: "القاهرة"
    },
    alexandria: {
      en: "Alexandria",
      ar: "الإسكندرية"
    }
  }

  return (
    <div className='flex gap-[15px]'>
      <div className='flex font-normal flex-col items-center'>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>
          {translations.from[language]}
        </p>
        <p className={darkMode ? 'text-white' : ''}>
          {from}
        </p>
      </div>
      <div className='flex items-center'>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} size-2 rounded-full`}></div>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} w-[103px] h-[2px] rounded-full`}></div>
        <div className={`${darkMode ? 'bg-gray-300' : 'bg-black'} size-2 rounded-full`}></div>
      </div>
      <div className='flex font-normal flex-col items-center'>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : ''}`}>
          {translations.to[language]}
        </p>
        <p className={darkMode ? 'text-white' : ''}>
          {to}
        </p>
      </div>
    </div>
  )
}
