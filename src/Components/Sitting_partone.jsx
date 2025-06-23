import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ActiveContext, Darkmood, languageContext } from '../pages/Home'
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png'
import logo1 from '../assets/WhatsApp Image 2025-03-08 at 01.27.10_7c27d063.jpg'
import logo2 from '../assets/egypt-flag-logo-vector-removebg-preview.png'
import { BsPersonCircle } from "react-icons/bs";
import { IoMdBookmarks } from "react-icons/io";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { MdWbSunny, MdModeNight } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const API_BASE_PATH = '/api'; // Replace this with your actual base path

// Loading Skeleton Component
const LoadingSkeleton = ({ darkMode }) => (
  <div className={`flex sm:w-[230px] ${darkMode ? 'bg-gray-800' : 'bg-white'} flex-col h-[550px] items-center shadow-lg shadow-gray-600 rounded-2xl gap-[10px] xs:w-[70px] xs:p-2 p-[10px] animate-pulse`}>
    {/* Profile Section Skeleton */}
    <div className='flex xs:self-center self-start items-center xs:flex-col gap-2'>
      <div className={`size-[53px] rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      <div className='flex flex-col xs:hidden gap-1'>
        <div className={`h-4 w-24 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`h-3 w-32 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
    </div>

    {/* Menu Items Skeleton */}
    {[...Array(4)].map((_, index) => (
      <div key={index} className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl xs:justify-center gap-[10px] items-center`}>
        <div className={`h-4 w-16 rounded xs:hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`size-6 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
    ))}

    {/* Language Section Skeleton */}
    <div className={`flex border border-gray-200 w-full xs:justify-center justify-between p-[10px] rounded-xl gap-[10px] items-center`}>
      <div className='flex w-full xs:justify-end items-center gap-2'>
        <div className={`w-[29px] h-[18px] rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`h-4 w-16 rounded xs:hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className={`h-4 w-12 rounded xs:hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`size-6 rounded xs:hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
    </div>

    {/* Divider */}
    <div className={`h-[0.5px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

    {/* Theme Toggle Skeleton */}
    <div className='flex flex-col w-full justify-end p-[10px] gap-[10px] items-center'>
      <div className='flex gap-[6px] justify-end w-full items-center'>
        <div className={`h-3 w-16 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        <div className={`size-6 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      </div>
      <div className={`flex xs:flex-col w-full justify-center p-[10px] rounded-xl gap-[10px] items-center ${darkMode ? 'bg-gray-700' : 'bg-[#F0F0F0]'}`}>
        <div className={`h-[32px] xs:w-fit w-[140px] rounded-xl ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
        <div className={`h-[32px] xs:w-fit w-[140px] rounded-xl ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  </div>
);

// Error Display Component
const ErrorDisplay = ({ error, darkMode, onRetry }) => (
  <div className={`flex sm:w-[230px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#374957]'} flex-col h-[550px] items-center justify-center shadow-lg shadow-gray-600 rounded-2xl gap-4 xs:w-[70px] xs:p-2 p-[10px]`}>
    <div className={`text-red-500 text-4xl mb-2`}>⚠️</div>
    <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} xs:hidden`}>
      {error}
    </p>
    <button
      onClick={onRetry}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors xs:hidden ${
        darkMode 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'
      }`}
    >
      Retry
    </button>
  </div>
);

export default function Sitting_partone() {
  const { active, setActive } = useContext(ActiveContext);
  const { darkMode, setDarkMode } = useContext(Darkmood);
  const { language, setLanguage } = useContext(languageContext);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      setError('');
      
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('Missing auth token.');
        navigate('/login');
        return;
      }

      const response = await fetch(`${API_BASE_PATH}/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.code === 'unauthenticated') {
        setError('Session expired. Please log in again.');
        navigate('/login');
      } else if (data.code === 'success') {
        setProfileData(data.data);
      } else {
        setError(data.message || 'Failed to load data.');
      }
    } catch (err) {
      setError(err.message || 'Unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [navigate, retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  const texts = {
    name: { ar: " تسبيح خالد", en: "tasbeh khaled" },
    profile: { ar: "الملف الشخصي", en: "Profile" },
    booking: { ar: "الحجز", en: "Booking" },
    languageLabel: { ar: "اللغه", en: "Language" },
    privacy: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
    logout: { ar: "تسجيل الخروج", en: "Logout" },
    colorMode: { ar: "لون الموقع", en: "Site Color" },
    dark: { ar: "غامق", en: "Dark" },
    light: { ar: "فاتح", en: "Light" },
    logoutConfirmTitle: { ar: "هل أنت متأكد؟", en: "Are you sure?" },
    logoutConfirmText: { ar: "لن تتمكن من التراجع عن هذا!", en: "You won't be able to revert this!" },
    logoutConfirmButton: { ar: "نعم، تسجيل الخروج!", en: "Yes, logout!" },
    logoutCancelButton: { ar: "إلغاء", en: "Cancel" },
    logoutSuccessTitle: { ar: "تم تسجيل الخروج!", en: "Logged out!" },
    logoutSuccessText: { ar: "لقد تم تسجيل خروجك بنجاح.", en: "You have been logged out successfully." }
  };

  // Show loading skeleton while fetching data
  if (loading) {
    return <LoadingSkeleton darkMode={darkMode} />;
  }

  // Show error state with retry option
  if (error) {
    return <ErrorDisplay error={error} darkMode={darkMode} onRetry={handleRetry} />;
  }

  const userName = profileData?.name || texts.name[language];
  const userEmail = profileData?.email || "email@example.com";
  const userImage = profileData?.image || logo;

  return (
    <div className={`flex sm:w-[230px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-[#374957]'} flex-col h-[550px] items-center shadow-lg shadow-gray-600 rounded-2xl gap-[10px] xs:w-[70px] xs:p-2 p-[10px]`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='flex xs:self-center self-start items-center xs:flex-col gap-2'>
        <div className='bg-yellow-500 rounded-full border-blue-600 border-[1px]'>
          <img 
            src={userImage} 
            className='size-[53px] object-cover rounded-full' 
            alt="user"
            onError={(e) => {
              e.target.src = logo; // Fallback to default logo if image fails to load
            }}
          />
        </div>
        <div className='flex flex-col xs:hidden'>
          <p className='font-semibold xs:text-sm sm:text-sm text-lg'>{userName}</p>
          <p className={`text-sm xs:text-xs sm:text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-[#535763]'}`}>{userEmail}</p>
        </div>
      </div>

      <div
        onClick={() => setActive(0)}
        className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl xs:justify-center gap-[10px] cursor-pointer items-center ${active === 0 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl xs:hidden'>{texts.profile[language]}</p>
        <BsPersonCircle className='text-2xl' />
      </div>

      <div
        onClick={() => setActive(1)}
        className={`flex border border-gray-200 w-full justify-end p-[10px] rounded-xl xs:justify-center gap-[10px] cursor-pointer items-center ${active === 1 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl xs:hidden'>{texts.booking[language]}</p>
        <IoMdBookmarks className='text-2xl' />
      </div>

      <div className={`flex border border-gray-200 w-full xs:justify-center justify-between p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <div className='flex w-full xs:justify-end items-center'>
          {language === 'en' ?
            <img src={logo1} alt="flag" className='w-[29px] h-[18px]' />
            :
            <img src={logo2} alt="flag" className='size-[59px]' />
          }
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={`font-semibold sm:w-[70px] xs:hidden ${darkMode ? 'text-gray-300 bg-gray-800' : 'text-[#535763]'}`}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-xl sm:text-sm xs:hidden'>{texts.languageLabel[language]}</p>
          <FaAcquisitionsIncorporated className='text-2xl xs:hidden' />
        </div>
      </div>

      <div
        onClick={() => setActive(2)}
        className={`flex border border-gray-200 w-full justify-end xs:justify-center p-[10px] rounded-xl gap-[10px] cursor-pointer items-center ${active === 2 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-white hover:bg-gray-700' : 'text-[#374957]'}`}>
        <p className='text-xl xs:hidden'>{texts.privacy[language]}</p>
        <MdOutlinePrivacyTip className='text-2xl' />
      </div>

      <div
        onClick={() => {
          Swal.fire({
            title: texts.logoutConfirmTitle[language],
            text: texts.logoutConfirmText[language],
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: texts.logoutConfirmButton[language],
            cancelButtonText: texts.logoutCancelButton[language],
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: texts.logoutSuccessTitle[language],
                text: texts.logoutSuccessText[language],
                icon: "success",
                timer: 1000,
                showConfirmButton: false
              }).then(() => {
                navigate('/Login');
              });
            }
          });
        }}
        className={`flex border border-gray-200 w-full justify-end p-[10px] xs:justify-center rounded-xl gap-[10px] cursor-pointer items-center ${active === 3 ? 'text-white bg-[#7367F0]' : darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-[#FF1212]'}`}>
        <p className='text-xl xs:hidden'>{texts.logout[language]}</p>
        <FaSignOutAlt className='text-2xl' />
      </div>

      <div className={`h-[0.5px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></div>

      <div className={`flex flex-col w-full justify-end p-[10px] gap-[10px] items-center ${darkMode ? 'text-white' : 'text-[#374957]'}`}>
        <div className='flex gap-[6px] justify-end w-full items-center'>
          <p className='text-xs xs:text-center font-semibold'>{texts.colorMode[language]}</p>
          <FaRegQuestionCircle className='text-2xl' />
        </div>
        <div className={`flex xs:flex-col w-full justify-center p-[10px] rounded-xl gap-[10px] items-center ${darkMode ? 'bg-gray-700' : 'bg-[#F0F0F0]'}`}>
          <div
            onClick={() => setDarkMode(true)}
            className={`flex h-[32px] cursor-pointer justify-center p-[5px] xs:w-fit w-[140px] rounded-xl gap-[10px] duration-500 items-center ${darkMode ? 'bg-gray-600 text-white' : ''}`}>
            <p className='font-semibold xs:hidden'>{texts.dark[language]}</p>
            <MdModeNight className='text-2xl' />
          </div>

          <div
            onClick={() => setDarkMode(false)}
            className={`flex justify-center h-[32px] p-[5px] cursor-pointer xs:w-fit w-[140px] rounded-2xl gap-[10px] duration-500 items-center ${darkMode ? 'text-white' : 'bg-white'}`}>
            <p className='font-semibold xs:hidden'>{texts.light[language]}</p>
            <MdWbSunny className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}