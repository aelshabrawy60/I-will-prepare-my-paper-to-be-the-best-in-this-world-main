import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import logo from '../assets/Sekka Logo.png';
import logo1 from '../assets/WhatsApp_Image_2025-03-06_at_01.40.08_46add58a-removebg-preview.png'; // متاح
import logo2 from '../assets/WhatsApp_Image_2025-03-06_at_01.41.53_fb3296b9-removebg-preview.png'; // تم الاختيار
import logo3 from '../assets/WhatsApp_Image_2025-03-06_at_01.42.19_a918c74f-removebg-preview.png'; // تم الحجز
import { languageContext } from '../pages/Home';
import axios from 'axios';

export default function Question_three({ onSeatSelect, numberOfSeats = 1 , id}) {
  const { language } = useContext(languageContext);
  const currentLang = language || 'en';
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const [allSeats, setAllSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextSeatId, setNextSeatId] = useState(100); // Starting ID for available seats

  const translations = {
    en: {
      chooseSeat: "Choose your seat",
      reserved: "Reserved",
      available: "Available",
      selected: "Selected",
      class: "Economy Class",
      rows: ["A", "B", "C", "D"],
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      loading: "Loading seats...",
      error: "Error loading seats",
      confirm: "Confirm Selection"
    },
    ar: {
      chooseSeat: "اختر مقعدك",
      reserved: "تم الحجز",
      available: "متاح",
      selected: "تم الاختيار",
      class: "الدرجة الاقتصادية",
      rows: ["أ", "ب", "ج", "د"],
      numbers: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
      loading: "جاري تحميل المقاعد...",
      error: "خطأ في تحميل المقاعد",
      confirm: "تأكيد الاختيار"
    }
  };

  const t = translations[currentLang];

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('authToken');
        const response = await axios.get(
          `https://lawngreen-walrus-394451.hostingersite.com/api/seats/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          }
        );
        
        if (response.data.code === 'success') {
          // Store seats by ID
          const fetchedSeats = {};
          response.data.data.forEach(railcar => {
            if (railcar.seats) {
              railcar.seats.forEach(seat => {
                fetchedSeats[seat.id] = {
                  id: seat.id,
                  available: seat.available === 1
                };
              });
            }
          });
          
          setAllSeats(fetchedSeats);
        } else {
          setError('Failed to fetch seats data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching seats');
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, []);

  // Get seat info for a position
  const getSeatForPosition = (position) => {
    const rowIndex = t.rows.indexOf(position[0]);
    const colIndex = parseInt(position[1]) - 1;
    const seatId = (rowIndex * t.numbers.length) + colIndex + 1;
    
    // If seat exists in API data, use that availability
    if (allSeats[seatId]) {
      return {
        id: seatId,
        available: allSeats[seatId].available
      };
    }
    
    // If seat doesn't exist in API data, it means it's available
    return {
      id: seatId,
      available: true
    };
  };

  const handleSeatClick = (position) => {
    const seatInfo = getSeatForPosition(position);
    
    // Don't allow clicking unavailable seats
    if (!seatInfo.available) return;
    
    const seatId = seatInfo.id;
    
    setSelectedSeatIds(prev => {
      const isSelected = prev.includes(seatId);
      let updated;

      if (isSelected) {
        // If already selected, remove it
        updated = prev.filter(id => id !== seatId);
      } else if (prev.length < numberOfSeats) {
        // If not at max seats, add it
        updated = [...prev, seatId];
      } else {
        // If at max seats, replace the oldest selection
        updated = [...prev.slice(1), seatId];
      }

      // Notify parent component of selection change
      if (onSeatSelect) {
        onSeatSelect(updated);
      }

      return updated;
    });
  };

  const renderSeat = (row, number) => {
    const position = `${row}${number}`;
    const seatInfo = getSeatForPosition(position);
    const isAvailable = seatInfo.available;
    const isSelected = selectedSeatIds.includes(seatInfo.id);

    let seatLogo = logo1; // Available
    if (!isAvailable) seatLogo = logo3; // Reserved
    if (isSelected) seatLogo = logo2; // Selected

    return (
      <img 
        key={position}
        src={seatLogo} 
        className={`w-[38px] h-[27px] ${isAvailable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        onClick={() => handleSeatClick(position)}
        alt={isAvailable ? (isSelected ? 'selected' : 'available') : 'reserved'}
      />
    );
  };

  const handleConfirmClick = () => {
    if (selectedSeatIds.length === numberOfSeats && onSeatSelect) {
      onSeatSelect(selectedSeatIds);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-[400px]">{t.loading}</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-[400px] text-red-500">{t.error}: {error}</div>;
  }

  // For debugging
  console.log("Selected seat IDs:", selectedSeatIds);
  console.log("All seats from API:", allSeats);

  return (
    <div className='flex xs:w-[270px] relative w-full xs:flex-col xs:items-center gap-[80px] p-[20px]'>
      <div className='flex h-[555px] xs:h-[325px] xs:w-[200px] w-[275px] items-center flex-col justify-between'>
        <div className='flex flex-col gap-[30px] items-center'>
          <img src={logo} alt="logo" />
          <p className='text-lg font-semibold text-gray-500'>{t.chooseSeat}</p>
          <div className='flex xs:justify-center xs:gap-[20px] w-[249px] justify-between'>
            <div className='flex flex-col items-center'>
              <img src={logo3} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.reserved}</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={logo1} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.available}</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={logo2} className='w-[38px] h-[27px]' />
              <p className='text-xs text-gray-400'>{t.selected}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-300 xs:hidden absolute left-[40%] top-[60px] w-[0.8px] h-[478px]'></div>

      <div className='flex xs:w-[270px] flex-col w-[430px] border border-gray-300 rounded-3xl p-[20px] gap-[20px] items-center'>
        <h1 className='font-normal text-xl'>{t.class}</h1>
        <div className='flex justify-between w-full'>
          {t.rows.map((row) => (
            <div key={row} className='flex flex-col items-center gap-[10px]'>
              <p className='text-xl'>{row}</p>
              {t.numbers.map((number) => renderSeat(row, number))}
            </div>
          ))}

          <div className='flex flex-col pt-[44px] items-center gap-[12px]'>
            {t.numbers.map((num, idx) => (
              <p key={idx}>{num}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
