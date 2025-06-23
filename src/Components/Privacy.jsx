import React, { useContext } from 'react';
import { Darkmood, languageContext } from '../pages/Home';

export default function Privacy() {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  const texts = {
    ar: {
      title: 'سياسة الخصوصية:',
      content: `هذا هو المحتوى لصفحة السياسات. هنا يمكنك وصف سياساتك سياساتنا بالتفصيل . `
    },
    en: {
      title: 'Privacy Policy:',
      content: `This is the content for the policies page. Here you can describe your policies and our policies in detail. `
    }
  };

  const t = texts[language] || texts.en;
  const isArabic = language === 'ar';

  return (
    <div
      className={`flex flex-col h-fit items-end gap-[20px] rounded-xl border p-[20px]
        ${darkMode ? 'bg-gray-800 text-white border-gray-600 shadow-black' : 'bg-white text-black border-gray-200 shadow-gray-300'} shadow-xl`}
     
    >
      <p className='text-xl font-semibold'>{t.title}</p>

      <p className='text-wrap font-normal xs:text-xs text-justify'>
        {t.content}
      </p>
    </div>
  );
}
