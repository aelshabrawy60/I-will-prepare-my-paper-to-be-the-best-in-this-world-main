import React, { useContext } from 'react';
import { Countercontext } from '../pages/Home';
import { languageContext } from '../pages/Home';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

export default function Button() {
  const { counter, setCounter } = useContext(Countercontext);
  const { language } = useContext(languageContext); 

  const texts = {
    book: language === 'ar' ? 'احجز تذكرتك' : 'Book Ticket',
    continue: language === 'ar' ? 'المواصلة للدفع' : 'Continue to Payment',
    pay: language === 'ar' ? 'ادفع الآن' : 'Pay Now',
    download: language === 'ar' ? 'تحميل التذكرة' : 'Download Ticket'
  };

  return (
    <div
      onClick={() => setCounter(counter + 1)}
      className='bg-[#7367F0] h-[56.1px] text-white flex justify-center items-center shadow-lg cursor-pointer rounded-xl'>

      {counter === 0 || counter === 1 ? (
        <p className='w-[251.41px] text-center'>{texts.book}</p>
      ) : counter === 2 ? (
        <div className={`flex items-center justify-center text-center w-[251.41px] gap-[50px] ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <p>{texts.continue}</p>
          <FaLongArrowAltLeft className='text-2xl' />
        </div>
      ) : counter === 3 ? (
        <p className='font-semibold w-[360px] text-center'>{texts.pay}</p>
      ) : (
        <div className='flex w-[275px] h-[71px] justify-center items-center gap-[10px]'>
          <p className='font-semibold'>{texts.download}</p>
          <FaFileArrowDown className='text-xl' />
        </div>
      )}
    </div>
  );
}
