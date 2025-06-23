import React, { useContext, useEffect, useState } from 'react';
import { PiClockCountdownLight } from "react-icons/pi";
import { LuBusFront } from "react-icons/lu";
import { FaTrainSubway } from "react-icons/fa6";
import From_to from './From_to';
import { Darkmood, languageContext } from '../pages/Home';

export default function Question_one({ id }) {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format time to 24-hour
  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Format date
  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const day = date.getDate();
    const month = date.toLocaleString(language === 'ar' ? 'ar-EG' : 'en-US', { month: 'short' });
    return { day, month };
  };

  // Fetch API data
  useEffect(() => {
    const fetchTripData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await fetch(`https://lawngreen-walrus-394451.hostingersite.com/api/trip/${id}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch trip data');
        const data = await response.json();
        setTripData(data.data.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTripData();
  }, [id]);

  const texts = {
    currency: {
      en: "EGP",
      ar: "جنية"
    },
    loading: {
      en: "Loading trip data...",
      ar: "جاري تحميل بيانات الرحلة..."
    },
    error: {
      en: "Error loading trip data:",
      ar: "حدث خطأ أثناء تحميل بيانات الرحلة:"
    }
  };

  if (loading) {
    return <div className={`p-5 w-[500px] xs:w-[270px] text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'}`}>
      <p>{texts.loading[language]}</p>
    </div>;
  }

  if (error) {
    return <div className={`p-5 w-[500px] xs:w-[270px] text-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'}`}>
      <p>{texts.error[language]} {error}</p>
    </div>;
  }

  const { departure_station, arrival_station, departure_time,arraival_time, train, classes } = tripData;
  const { day, month } = formatDate(departure_time);

  return (
    <div className={`p-5 w-[500px] xs:w-[270px] gap-[20px] flex flex-col items-center ${darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'}`} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      <From_to from={departure_station.name} to={arrival_station.name} />

      <div className='flex xs:gap-[3px] gap-[32px]'>
        <div className={`w-[97px] flex items-center justify-center h-[48px] rounded-md gap-[15px] ${darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'}`}>
          <p>{formatTime(departure_time)}</p>
          <PiClockCountdownLight className={`text-lg ${darkMode ? 'text-gray-300' : 'text-white'}`} />
        </div>

        <div className={`w-[97px] flex items-center justify-center h-[48px] rounded-md gap-[5px] ${darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'}`}>
          <p>{day}</p>
          <p>{month}</p>
        </div>

        <div className={`w-[97px] h-[48px] flex items-center justify-center rounded-md gap-[15px] ${darkMode ? 'bg-gray-700' : 'bg-[#DED9FF]'}`}>
          <div className={`relative flex items-center justify-center ${language === 'ar' ? 'right-2' : 'left-2'}`}>
            <div className={`flex justify-center items-center size-[32px] rounded-full ${darkMode ? 'bg-gray-600' : 'bg-[#7367F0]'}`}>
              <LuBusFront className='text-white' />
            </div>
            <div className={`flex justify-center absolute ${language === 'ar' ? 'left-[20px]' : 'right-[20px]'} items-center size-[32px] rounded-full ${darkMode ? 'bg-gray-600' : 'bg-[#7367F0]'}`}>
              <FaTrainSubway className='text-white' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col gap-[50px]'>
        <div className='flex flex-col w-full xs:gap-[15px] gap-[10px]'>
          <h1 className='font-bold text-xl'>{train.name}</h1>
          <div className='flex flex-col xs:gap-[10px]'>
            {classes.map((cls, idx) => (
              <div key={idx} className='flex xs:gap-[20px] xs:justify-center font-semibold justify-between'>
                <p>{cls.name}</p>
                <p>{cls.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
