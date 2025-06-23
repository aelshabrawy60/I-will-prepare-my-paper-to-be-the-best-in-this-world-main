import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ActiveContext, Darkmood, languageContext, show_Div_Sitting_context } from '../pages/Home';
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg';
import logo2 from '../assets/egypt-flag-logo-vector-removebg-preview.png';
import { BsPersonCircle } from "react-icons/bs";
import { IoMdBookmarks } from "react-icons/io";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdWbSunny, MdModeNight } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const API_BASE_PATH = '/api'; // Replace this with your real API base path

export default function Sitting_part_two() {
  const { active, setActive } = useContext(ActiveContext);
  const { darkMode, setDarkMode } = useContext(Darkmood);
  const { show_Div_Sitting, setShow_Div_Sitting } = useContext(show_Div_Sitting_context);
  const { language, setLanguage } = useContext(languageContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfile = async () => {
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
          setUserData({ name: data.data.name, email: data.data.email });
        } else {
          setUserData({ name: language === 'ar' ? 'الضيف' : 'Guest', email: '' });
        }
      } catch (err) {
        setUserData({ name: language === 'ar' ? 'الضيف' : 'Guest', email: '' });
      }
    };

    fetchProfile();
  }, [language]);

  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

  const texts = {
    profile: { en: "Profile", ar: "الملف الشخصي" },
    bookings: { en: "Bookings", ar: "الحجز" },
    language: { en: "Language", ar: "اللغه" },
    privacy: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    logout: { en: "Logout", ar: "تسجيل الخروج" },
    theme: { en: "Theme Color", ar: "لون الموقع" },
    dark: { en: "Dark", ar: "غامق" },
    light: { en: "Light", ar: "فاتح" },
    logoutConfirm: {
      title: { en: "Are you sure?", ar: "هل أنت متأكد؟" },
      text: { en: "You won't be able to revert this!", ar: "لن تتمكن من التراجع عن هذا!" },
      confirm: { en: "Yes, logout!", ar: "نعم، تسجيل الخروج!" },
      cancel: { en: "Cancel", ar: "إلغاء" },
      success: { en: "Logged out!", ar: "تم تسجيل الخروج!" },
      successText: { en: "You have been logged out successfully.", ar: "لقد تم تسجيل خروجك بنجاح." }
    }
  };

  return (
    <div className={`flex xs:w-[300px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#374957]'} flex-col h-[550px] items-center shadow-lg shadow-gray-300 rounded-2xl gap-[10px] p-[10px]`}>
      
      <div className='flex self-start items-center gap-2'>
        <div className='bg-yellow-500 rounded-full border-blue-600 border-[1px]'>
          <img src={logo} className='size-[53px]' />
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-lg'>{userData.name || '...'}</p>
          <p className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-[#535763]'}`}>
            {userData.email || ''}
          </p>
        </div>
      </div>

      <Link to="/settings" onClick={() => { setShow_Div_Sitting(false); setActive(0); }} className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 0 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl'>{texts.profile[language]}</p>
        <BsPersonCircle className='text-2xl'/>
      </Link>

      <Link to="/settings" onClick={() => { setShow_Div_Sitting(false); setActive(1); }} className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 1 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl'>{texts.bookings[language]}</p>
        <IoMdBookmarks className='text-2xl'/>
      </Link>

      <div onClick={toggleLanguage} className={`flex border border-gray-200 w-full justify-between p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <div className='flex w-full items-center'>
          <MdOutlineKeyboardArrowDown />
          <p className='font-semibold text-lg'>{language === 'en' ? 'English' : 'العربية'}</p>
          {
            language === 'en' ?
            <img src={logo1} alt="flag" className='w-[29px] h-[18px]' />
            :
            <img src={logo2} alt="flag" className='size-[59px]' />
          }
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-xl'>{texts.language[language]}</p>
          <FaAcquisitionsIncorporated className='text-2xl'/>
        </div>
      </div>

      <Link to="/settings" onClick={() => { setShow_Div_Sitting(false); setActive(2); }} className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 2 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl'>{texts.privacy[language]}</p>
        <MdOutlinePrivacyTip className='text-2xl'/>
      </Link>

      <div onClick={() => {
        setShow_Div_Sitting(false);
        Swal.fire({
          title: texts.logoutConfirm.title[language],
          text: texts.logoutConfirm.text[language],
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: texts.logoutConfirm.confirm[language],
          cancelButtonText: texts.logoutConfirm.cancel[language],
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: texts.logoutConfirm.success[language],
              text: texts.logoutConfirm.successText[language],
              icon: "success",
              timer: 1000,
              showConfirmButton: false
            }).then(() => {
              navigate('/Login');
            });
          }
        });
      }} className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 3 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-[#FF1212]'}`}>
        <p className='text-xl'>{texts.logout[language]}</p>
        <FaSignOutAlt className='text-2xl'/>
      </div>

      <div className={`h-[0.5px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

      <div className={`flex flex-col w-full justify-end p-[10px] gap-[10px] items-center ${darkMode ? 'text-white' : 'text-[#374957]'}`}>
        <div className='flex gap-[6px] justify-end w-full items-center'>
          <p className='text-xs font-semibold'>{texts.theme[language]}</p>
          <FaRegQuestionCircle className='text-2xl'/>
        </div>
        <div className={`flex w-full justify-center p-[10px] rounded-xl gap-[10px] items-center ${darkMode ? 'bg-gray-700' : 'bg-[#F0F0F0]'}`}>
          <div onClick={() => { setShow_Div_Sitting(false); setDarkMode(true); }} className={`flex h-[32px] cursor-pointer justify-center p-[5px] w-[140px] rounded-xl gap-[10px] duration-500 items-center ${darkMode ? 'bg-gray-600 text-white' : ''}`}>
            <p className='font-semibold'>{texts.dark[language]}</p>
            <MdModeNight className='text-2xl' />
          </div>
          <div onClick={() => { setShow_Div_Sitting(false); setDarkMode(false); }} className={`flex justify-center h-[32px] p-[5px] cursor-pointer w-[140px] rounded-2xl gap-[10px] duration-500 items-center ${darkMode ? 'text-white' : 'bg-white'}`}>
            <p className='font-semibold'>{texts.light[language]}</p>
            <MdWbSunny className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
}
