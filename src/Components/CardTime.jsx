// import React, { useContext, useState } from 'react'
// import { Darkmood, TimeContext } from '../pages/Home'
// import { time_boket } from '../assets/assets'

// export default function CardTime() {
//    const [active , setActive] = useState(0)
//  const { darkMode } = useContext(Darkmood) 
//  const {setTime} = useContext(TimeContext)
 
//   return (
//     <>
//     {
//       time_boket.map((el,index)=>{
//         return(
//             <div
//             onClick={()=>{
//               console.log(el.Time);
              
//               setActive(index);
//               setTime(el.Time)
//             }}
//             key={el.id}
//             className={` 
//                 shadow-lg shadow-gray-500 flex cursor-pointer  rounded-lg
//               justify-center  ${darkMode ? "#4F46E5" : "#7367F0"} w-[63px] h-[34px] pl-[10px]  flex-col
//                 ${active === index ? 'bg-[#7367F0]' : 'bg-[#D4D0FA]'}
//               `}
//               >
//                   <p className='text-sm text-white'>{el.Time}</p>
                
//               </div>

//         )
//       })

//     }
//     </>
//   )
// }


import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import { Darkmood, TimeContext } from '../pages/Home'
import { time_boket } from '../assets/assets'

export default function CardTime() {
  const [active, setActive] = useState(0)
  const { darkMode } = useContext(Darkmood)
  const { setTime } = useContext(TimeContext)

  // Formik integration (hidden)
  const formik = useFormik({
    initialValues: {
      selectedTime: null
    },
    onSubmit: async (values) => {
      if (!values.selectedTime) return
      
      try {
        const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            time: values.selectedTime.Time
          }),
        })
        
        const data = await response.json()
        console.log('Time submitted:', data)
      } catch (error) {
        console.error('Submission error:', error)
      }
    },
  })

  const handleTimeClick = (timeObj, index) => {
    console.log(timeObj.Time)
    setActive(index)
    setTime(timeObj.Time)
    
    // Update Formik and submit
    formik.setFieldValue('selectedTime', timeObj)
    formik.handleSubmit()
  }

  return (
    <>
      {time_boket.map((el, index) => {
        return (
          <div
            onClick={() => handleTimeClick(el, index)}
            key={el.id}
            className={` 
              shadow-lg shadow-gray-500 flex cursor-pointer rounded-lg
              justify-center ${darkMode ? "#4F46E5" : "#7367F0"} w-[63px] h-[34px] pl-[10px] flex-col
              ${active === index ? 'bg-[#7367F0]' : 'bg-[#D4D0FA]'}
            `}
          >
            <p className='text-sm text-white'>{el.Time}</p>
          </div>
        )
      })}
    </>
  )
}