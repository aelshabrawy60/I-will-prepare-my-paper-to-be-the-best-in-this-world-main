// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import homeImage from "../assets/Sekka Logo.png"; 
// import { Darkmood, show_Div_Sitting_context } from '../pages/Home';
// import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg';
// import { FaList } from "react-icons/fa6";
// import logo from '../assets/WhatsApp_Image_2025-04-18_at_04.07.13_e9a3b56d-removebg-preview.png';
// import { HiXMark } from "react-icons/hi2";

// export default function Navpar() {
//   const { show_Div_Sitting, setShow_Div_Sitting } = useContext(show_Div_Sitting_context);
//   const [small_div, setSmall_div] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className={`bg-gray-800 text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-50 sticky top-0`}>
//       {/* شاشات كبيرة فقط (1024px فما فوق) */}
//       <div className='hidden lg:flex w-full relative font-Inter font-medium text-[18px] justify-between items-center px-8 py-3'>
//         <Link to={'/'} className="flex w-[200px] justify-start">
//           <img src={homeImage} alt="Train Booking" className="max-w-full h-auto" />
//         </Link>

//         <div className="flex gap-8">
//           {['Home', 'TimeTable', 'Booking-us', 'About', 'Contact-us'].map((item) => (
//             <Link to={'/'} key={item}>
//               <button
//                 onClick={() => scrollToSection(item)}
//                 className="text-white hover:text-blue-400 transition-colors"
//               >
//                 {item.replace('-us', '')}
//               </button>
//             </Link>
//           ))}
//           <Link to={'/settings'} className="text-white hover:text-blue-400 transition-colors">
//             Settings
//           </Link>
//         </div>

//         <div className='flex items-center gap-6'>
//           <div className='flex gap-2 items-center'>
//             <img src={logo1} className='w-7 h-5' alt="language" />
//             <select className='bg-gray-800 text-sm cursor-pointer focus:outline-none'>
//               <option value="">English</option>
//               <option value="">Arabic</option>
//             </select>
//           </div>
//           <div className='w-px h-12 bg-white'></div>
//           <button
//             onClick={() => setShow_Div_Sitting(!show_Div_Sitting)}
//             className='flex cursor-pointer items-center gap-3'
//           >
//             <img className='w-14 h-14 rounded-full' src={logo} alt="profile" />
//             <p className='text-white text-sm'>
//               Tasbeh<br />khaled
//             </p>
//           </button>
//         </div>
//       </div>

//       {/* شاشات متوسطة وصغيرة (أقل من 1024px) */}
//       <div className='lg:hidden p-4 w-full relative font-Inter font-medium text-[18px] flex justify-between items-center'>
//         <Link to={'/'} className="flex w-[120px] justify-start">
//           <img src={homeImage} alt="Train Booking" className="h-auto max-h-[50px]" />
//         </Link>
        
//         <button 
//           onClick={() => setSmall_div(!small_div)}
//           className="p-2 focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {!small_div ? (
//             <FaList className='text-2xl text-gray-500 hover:text-gray-400 transition-colors' />
//           ) : (
//             <HiXMark className='text-3xl text-red-500 hover:text-red-400 transition-colors' />
//           )}
//         </button>

//         {/* القائمة المنسدلة */}
//         {small_div && (
//           <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setSmall_div(false)}></div>
//         )}
//         <div className={`bg-gray-800 w-[280px] h-screen fixed top-0 right-0 z-50 shadow-2xl flex flex-col gap-4 p-6 transition-transform duration-300 ${
//           small_div ? 'translate-x-0' : 'translate-x-full'
//         }`}>
//           <button 
//             onClick={() => setSmall_div(false)}
//             className="self-end p-2 focus:outline-none"
//           >
//             <HiXMark className='text-2xl text-red-500 hover:text-red-400' />
//           </button>
          
//           {['Home', 'TimeTable', 'Booking-us', 'About', 'Contact-us'].map((item) => (
//             <Link 
//               to="/" 
//               key={item}
//               onClick={() => {
//                 scrollToSection(item);
//                 setSmall_div(false);
//               }}
//               className="text-white hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors text-lg"
//             >
//               {item.replace('-us', '')}
//             </Link>
//           ))}
          
//           <Link 
//             to="/settings" 
//             onClick={() => setSmall_div(false)}
//             className="text-white hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors text-lg mt-4"
//           >
//             Settings
//           </Link>
          
//           <div className='flex items-center gap-10 mb-auto pt-6 border-t border-grey-700'>
//             <div className='flex gap-2 items-center'>
//               <img src={logo1} className='w-7 h-5' alt="language" />
//               <select className='bg-gray-800 text-white text-sm cursor-pointer focus:outline-none'>
//                 <option value="">English</option>
//                 <option value="">Arabic</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../assets/Sekka Logo.png"; 
import { Darkmood, languageContext, show_Div_Sitting_context } from '../pages/Home';
import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg';
import logo2 from '../assets/egypt-flag-logo-vector-removebg-preview.png'
import { FaList } from "react-icons/fa6";
import logo from '../assets/WhatsApp_Image_2025-04-18_at_04.07.13_e9a3b56d-removebg-preview.png';
import { HiXMark } from "react-icons/hi2";

const API_BASE_PATH = '/api'; // change this to your API

export default function Navpar() {
  const { show_Div_Sitting, setShow_Div_Sitting } = useContext(show_Div_Sitting_context);
  const [small_div, setSmall_div] = useState(false);
  const { language, setLanguage } = useContext(languageContext);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const navItems = [
    { id: 'Home', key: 'home' },
    { id: 'Booking-us', key: 'booking' },
    { id: 'About', key: 'about' },
    { id: 'Contact-us', key: 'contact' }
  ];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) return;

        const res = await fetch(`${API_BASE_PATH}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          credentials: 'include',
        });

        const data = await res.json();
        if (data.code === 'success') {
          setUserName(data.data.name);
        } else {
          setUserName(language === 'ar' ? 'الضيف' : 'Guest');
        }
      } catch (err) {
        setError(err.message);
        setUserName(language === 'ar' ? 'الضيف' : 'Guest');
      }
    };
    fetchUser();
  }, [language]);

  const translations = {
    en: {
      home: "Home",
      timetable: "TimeTable",
      booking: "Booking",
      about: "About",
      contact: "Contact",
      settings: "Settings",
    },
    ar: {
      home: "الرئيسية",
      timetable: "جدول الحجز",
      booking: "الحجز",
      about: "من نحن",
      contact: "اتصل بنا",
      settings: "الإعدادات",
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`bg-gray-800 text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] z-50 sticky top-0`}>
      {/* Desktop */}
      <div className={`hidden lg:flex w-full relative font-Inter font-medium text-[18px] justify-between items-center px-5 py-1`}>
        <Link to='/' className={`flex w-[200px] justify-${language === 'ar' ? 'end' : 'start'}`}>
          <img src={homeImage} alt="Train Booking" className="max-w-full h-auto" />
        </Link>

        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link to='/' key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-300 transition-colors"
              >
                {translations[language][item.key]}
              </button>
            </Link>
          ))}
          <Link to='/settings' className="text-white hover:text-purple-300 transition-colors">
            {translations[language].settings}
          </Link>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex items-center'>
            {language === 'en' ? (
              <img src={logo1} alt="flag" className='w-[29px] h-[18px]' />
            ) : (
              <img src={logo2} alt="flag" className='size-[59px] pt-1' />
            )}
            <select 
              className='bg-gray-800 text-sm cursor-pointer focus:outline-none'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          <div className='w-px h-12 bg-white'></div>
          <button
            onClick={() => setShow_Div_Sitting(!show_Div_Sitting)}
            className='flex cursor-pointer items-center gap-3'
          >
            <img className='w-14 h-14 rounded-full' src={logo} alt="profile" />
            <p className='text-white text-sm'>
              {userName || (language === 'ar' ? 'جار التحميل...' : 'Loading...')}
            </p>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`lg:hidden p-4 w-full relative font-Inter font-medium text-[18px] flex justify-between items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
        <Link to='/' className={`flex w-[120px] justify-${language === 'ar' ? 'end' : 'start'}`}>
          <img src={homeImage} alt="Train Booking" className="h-auto max-h-[50px]" />
        </Link>

        <button onClick={() => setSmall_div(!small_div)} className="p-2">
          {!small_div && <FaList className='text-2xl text-gray-500 hover:text-gray-400' />}
        </button>

        {small_div && <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={() => setSmall_div(false)}></div>}

        <div className={`bg-gray-800 w-[280px] h-screen fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} z-50 shadow-2xl flex flex-col gap-4 p-6 transition-transform duration-300 ${small_div ? 'translate-x-0' : language === 'ar' ? '-translate-x-full' : 'translate-x-full'}`}>
          <button onClick={() => setSmall_div(false)} className={`self-${language === 'ar' ? 'start' : 'end'} p-2`}>
            <HiXMark className='text-2xl text-red-500 hover:text-red-400' />
          </button>

          {navItems.map((item) => (
            <Link to="/" key={item.id} onClick={() => { scrollToSection(item.id); setSmall_div(false); }} className="text-white hover:bg-gray-700 px-4 py-3 rounded-lg text-lg">
              {translations[language][item.key]}
            </Link>
          ))}

          <Link to="/settings" onClick={() => setSmall_div(false)} className="text-white hover:bg-gray-700 px-4 py-3 rounded-lg text-lg mt-4">
            {translations[language].settings}
          </Link>

          <div className='flex items-center gap-10 pt-6 border-t border-grey-700 mt-auto'>
            <div className='flex items-center'>
              {language === 'en' ? (
                <img src={logo1} alt="flag" className='w-[29px] h-[18px]' />
              ) : (
                <img src={logo2} alt="flag" className='size-[59px] pt-1 xs:ml-2' />
              )}
              <select
                className='bg-gray-800 text-white text-sm cursor-pointer focus:outline-none'
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
