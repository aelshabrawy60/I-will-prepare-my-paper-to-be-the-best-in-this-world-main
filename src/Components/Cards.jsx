// import React, { useContext, useState } from 'react'
// import { cards_boket } from '../assets/assets';
// import { HistoryContext, languageContext } from '../pages/Home';

// export default function Cards() {
//   const [active, setActive] = useState(0);
//   const { setHistory } = useContext(HistoryContext);
//   const { language } = useContext(languageContext); 

//   return (
//     <>
//       {cards_boket.map((el, index) => {
//         return (
//           <div
//             key={el.id}
//             onClick={() => {
//               setActive(index);
//               setHistory(el.DayNumber + el.month.en); 
//             }}
//             className={` 
//               shadow-lg shadow-gray-500 flex cursor-pointer rounded-lg
//               justify-center pl-[10px] flex-col
//               ${active === index ? 'bg-[#7367F0] w-[71px] h-[70px]' : 'bg-[#D4D0FA] w-[86px] h-[74px]'}
//             `}
//           >
//             <p className='text-sm text-white'>
//               {el.DayName[language]}
//             </p>
//             <p className='text-sm text-white'>
//               <span className='text-lg font-semibold'>{el.DayNumber} </span>
//               {el.month[language]}
//             </p>
//           </div>
//         )
//       })}
//     </>
//   )
// }


import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { cards_boket } from '../assets/assets';
import { HistoryContext, languageContext } from '../pages/Home';

export default function Cards() {
  const [active, setActive] = useState(0);
  const { setHistory } = useContext(HistoryContext);
  const { language } = useContext(languageContext);

  // Formik integration (hidden - no visual changes)
  const formik = useFormik({
    initialValues: {
      selectedDate: null,
    },
    onSubmit: async (values) => {
      if (!values.selectedDate) return;
      
      try {
        const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            day: values.selectedDate.DayNumber,
            month: values.selectedDate.month.en,
            dayName: values.selectedDate.DayName[language],
          }),
        });
        
        const data = await response.json();
        console.log('Booking submitted:', data);
      } catch (error) {
        console.error('Booking error:', error);
      }
    },
  });

  const handleCardClick = (card, index) => {
    setActive(index);
    setHistory(card.DayNumber + card.month.en);
    
    // Update Formik value and submit automatically
    formik.setFieldValue('selectedDate', card);
    formik.handleSubmit();
  };

  return (
    <>
      {cards_boket.map((el, index) => (
        <div
          key={el.id}
          onClick={() => handleCardClick(el, index)}
          className={` 
            shadow-lg shadow-gray-500 flex cursor-pointer rounded-lg
            justify-center pl-[10px] flex-col
            ${active === index ? 'bg-[#7367F0] w-[71px] h-[70px]' : 'bg-[#D4D0FA] w-[86px] h-[74px]'}
          `}
        >
          <p className='text-sm text-white'>
            {el.DayName[language]}
          </p>
          <p className='text-sm text-white'>
            <span className='text-lg font-semibold'>{el.DayNumber} </span>
            {el.month[language]}
          </p>
        </div>
      ))}
    </>
  );
};