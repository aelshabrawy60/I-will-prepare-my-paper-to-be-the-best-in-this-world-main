import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/Sekka logo.png';
import logo1 from '../assets/WhatsApp_Image_2025-03-07_at_03.40.46_97a1ec4c-removebg-preview.png';
import { FaCheck } from "react-icons/fa";
import { FaTrainTram } from "react-icons/fa6";
import { Darkmood, languageContext } from '../pages/Home';

export default function Question_five({ bookingData, paymentData }) {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);
  const [ticketData, setTicketData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 2,
    seconds: 10
  });

  // Generate ticket on component mount
  useEffect(() => {
    const generateTicket = async () => {
      if (!bookingData?.id) {
        setError('No booking data available');
        setLoading(false);
        return;
      }

      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch(
          `https://lawngreen-walrus-394451.hostingersite.com/api/tickets/generate/${bookingData.id}`,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${authToken}`
            }
          }
        );

        const data = await response.json();
        if (response.ok && data.code === 'success') {
          setTicketData(data.data.data);
        } else {
          throw new Error(data.message || 'Failed to generate ticket');
        }
      } catch (error) {
        setError(error.message);
        console.error('Ticket generation error:', error);
      } finally {
        setLoading(false);
      }
    };

    generateTicket();
  }, [bookingData?.id]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        seconds -= 1;
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        
        if (hours < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Language texts
  const downloadTicket = () => {
    if (ticketData?.qr_code_data) {
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(ticketData.qr_code_data)}`;
      fetch(qrCodeUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `ticket-${ticketData.id}.png`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        });
    }
  };

  const texts = {
    en: {
      ticketSuccess: "Ticket generated successfully",
      firstClass: "First class AC",
      expiresIn: "Expires in",
      hours: "h",
      minutes: "min",
      seconds: "sec",
      at: "at",
      loading: "Generating your ticket...",
      error: "Error generating ticket:",
      downloadTicket: "Download Ticket"
    },
    ar: {
      ticketSuccess: "تم إنشاء التذكرة بنجاح",
      firstClass: "درجة اولي مكيف",
      expiresIn: "ينتهي خلال",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      at: "على بعد",
      loading: "جاري إنشاء التذكرة...",
      error: "خطأ في إنشاء التذكرة:",
      downloadTicket: "تحميل التذكرة"
    }
  };

  const t = texts[language] || texts.en;

  if (loading) {
    return (
      <div className={`flex justify-center items-center h-64 ${
        darkMode ? 'text-gray-100' : 'text-[#393343]'
      }`}>
        <div className="text-xl">{t.loading}</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex justify-center items-center h-64 ${
        darkMode ? 'text-red-400' : 'text-red-600'
      }`}>
        <div className="text-xl">{t.error} {error}</div>
      </div>
    );
  }

  // Format time (e.g., 02 instead of 2)
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className={`flex xs:w-[270px] xs:flex-col xs:gap-[55px] xs:items-center relative w-full gap-[40px] p-[20px] ${
      darkMode ? 'bg-gray-800' : ''
    }`}>
      <div className='flex xs:h-[400px] h-[555px] w-[275px] items-center flex-col justify-between'>
        <div className='flex flex-col gap-[30px] items-center'>
          <img src={logo} alt="logo" />
          <div className={`flex items-center justify-center w-[103px] h-[103px] rounded-full ${
            darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
          }`}>
            <FaCheck className='text-4xl text-white' />
          </div>
          <p className={`text-lg font-semibold ${
            darkMode ? 'text-purple-400' : 'text-[#7367F0]'
          }`}>
            {t.ticketSuccess}
          </p>
        </div>
      </div>
      
      <div className={`${
        darkMode ? 'bg-gray-600' : 'bg-gray-300'
      } xs:hidden absolute left-[42%] top-[60px] w-[0.8px] h-[478px]`}></div>

      <div className={`w-[382px] xs:w-[300px] rounded-2xl flex gap-[50px] ${
        darkMode ? 'bg-gray-700 shadow-gray-800' : 'bg-white shadow-xl'
      } p-[20px] flex-col items-center ${
        darkMode ? 'text-gray-100' : 'text-[#393343]'
      }`}>
        <div className='flex w-full xs:justify-center xs:gap-[50px] items-center justify-between'>
          <div className='flex items-end xs:h-[50px] gap-[10px]'>
            <p className='text-3xl'>
              {ticketData?.booking?.time || bookingData?.time || "14:02"}
            </p>
            <p className='text-xs font-normal'>{t.at} 23m</p>
          </div>
          <div className={`${
            darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
          } shadow cursor-pointer rounded-xl p-[10px] xs:gap-0 xs:text-center ${
            darkMode ? 'text-gray-100' : 'text-gray-50'
          } flex items-center gap-[10px]`}>
            <p className='text-sm xs:text-xs'>{t.firstClass}</p>
            <FaTrainTram />
          </div>
        </div>

        <div className={`flex border-b-2 p-[20px] border-dashed w-full ${
          darkMode ? 'border-purple-500' : 'border-blue-600'
        } relative flex-col`}>
          <div className='flex text-2xl justify-between'>
            <p>{ticketData?.booking?.booking_items[0]?.seat?.name?.en || bookingData?.from_station?.name || "From"}</p>
            <p>{ticketData?.booking?.total_price ? `${ticketData.booking.total_price} EGP` : "Price"}</p>
          </div>
        </div>
        
        {ticketData?.qr_code_data ? (
          <div className='bg-white p-4 rounded-lg flex flex-col items-center gap-4'>
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ticketData.qr_code_data)}`}
              alt="QR Code" 
              className='w-[200px] h-[200px]'
            />
            <button
              onClick={downloadTicket}
              className={`px-4 py-2 rounded-lg text-white font-medium ${
                darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-[#7367F0] hover:bg-[#6257e0]'
              } transition-colors`}
            >
              {t.downloadTicket}
            </button>
          </div>
        ) : (
          <img src={logo1} alt="ticket placeholder" className='w-[230px] h-auto' />
        )}
        
        <div className={`flex justify-center gap-[40px] text-sm w-full ${
          darkMode ? 'text-gray-300' : 'text-[#393343]'
        }`}>
          <p>{t.expiresIn}</p>
          <p>
            {ticketData?.booking?.date 
              ? `${ticketData.booking.date} ${ticketData.booking.time}`
              : `${formatTime(timeLeft.hours)} ${t.hours} ${formatTime(timeLeft.minutes)} ${t.minutes} ${formatTime(timeLeft.seconds)} ${t.seconds}`
            }
          </p>
        </div>
      </div>
    </div>
  );
}
