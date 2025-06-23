import React, { useContext } from 'react';
import logo from '../assets/snapedit_1740958952578-removebg-preview.png';
import { languageContext, Showcontext } from '../pages/Home';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Card_Booket() {
  const { setShow } = useContext(Showcontext);
  const { language } = useContext(languageContext);

  const texts = {
    ar: {
      arrival: "الوصول",
      departureTime: "ميعاد التحرك",
      from: "الاسكندريه",
      to: "الاقصر",
      price: "150جنية",
      class: "الدرجة الاولى    مكيفة الهواء"
    },
    en: {
      arrival: "Arrival",
      departureTime: "Departure Time",
      from: "Alexandria",
      to: "Luxor",
      price: "150 EGP",
      class: "First Class - Air Conditioned"
    }
  };

  const t = texts[language] || texts.en;

  return (
    <div className='relative xs:w-[200px]'>
      <img src={logo} className='w-[228px] xs:w-[100%] h-[151px]' />
      
      <div className={`absolute flex items-center inset-0 p-[10px] pt-[15px] xs:gap-0 gap-[10px] flex-row-reverse`}>
        
        <div className='flex flex-col gap-[20px] self-start'>
          <div className='flex gap-[25px] xs:gap-[5px]'>
            <div className='flex items-end flex-col'>
              <p className='text-lg font-Almarai font-bold text-[#564DB4] xs:text-sm'>14:31</p>
              <p className='font-Almarai font-normal text-[10px] text-[#9D9D9D]'>{t.arrival}</p>
              <p className='font-Almarai font-bold text-[16.86px] text-[#404040] xs:text-sm'>{t.to}</p>
            </div>

            <div className='flex items-end flex-col'>
              <p className='text-lg font-Almarai font-bold text-[#564DB4] xs:text-sm'>14:05</p>
              <p className='font-Almarai font-normal text-[10px] text-[#9D9D9D]'>{t.departureTime}</p>
              <p className='font-Almarai font-bold text-[16.86px] text-[#404040] xs:text-sm'>{t.from}</p>
            </div>
          </div>

          <div className='flex xs:justify-center xs:gap-[2px] justify-between w-full h-[12px]'>
            <p className='font-Almarai font-bold text-[12px]'>{t.price}</p>
            <p className='font-Almarai font-normal text-[12px] text-[#000000] xs:text-wrap xs:text-center xs:w-[100px] xs:text-[10px]'>
              {t.class}
            </p>
          </div>
        </div>

        <div className='xs:pr-2 h-full'>
          <div
            onClick={() => setShow(true)}
            className='flex items-center justify-center cursor-pointer bg-[#7367F0] rounded-[16.86px] p-[8.43px] h-[98%] w-[34.96px]'
          >
            <FaArrowLeftLong className='text-white' />
          </div>
        </div>

      </div>
    </div>
  );
}
