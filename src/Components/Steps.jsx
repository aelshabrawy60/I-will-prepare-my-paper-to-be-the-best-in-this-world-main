import React, { useContext, useState } from 'react'
import { Countercontext, Darkmood, Showcontext } from '../pages/Home'
import { useNavigate } from 'react-router-dom'
import { TbXboxXFilled } from "react-icons/tb";
import Question_one from './Question_one'
import Button from './Button'
import Question_tow from './Question_tow'
import Question_three from './Question_three'
import Question_four from './Question_four'
import Question_five from './Question_five'

export default function Steps({id, onClose}) {
  const {counter , setCounter} = useContext(Countercontext)
  const {setShow} =  useContext(Showcontext)
  const [bookData, setBookData] = useState(null)
  const [paymentData, setPaymentData] = useState(null)
  const { darkMode } = useContext(Darkmood);
  const navigate = useNavigate()
  return (
   
    

    <>
    <TbXboxXFilled
        onClick={()=>{
          onClose()
          setCounter(0)
        }}
          className='absolute text-5xl
         text-gray-300 hover:text-blue-500
         duration-300 xs:right-[-10px] xs:top-[-40px]
        top-[-40px]  right-[-40px]
         cursor-pointer' />
    <div className={`p-[20px] 
    rounded-[50px]  flex flex-col items-center
      shadow-md relative  gap-[50px] max-h-[80vh] overflow-y-auto overflow-x-hidden
    ${darkMode ? 'bg-gray-800' : 'bg-white'}
    `}>
        
        {
          counter === 0 ?
          <Question_one id={id}/>
         :
          counter === 1 ?
          <Question_tow id={id} onBookSubmit={setBookData}/>
         :
          counter === 2 ?
          <Question_four 
            bookingData={bookData}
            onPaymentSuccess={(data) => {
              setPaymentData(data);
              setCounter(3);
            }}
          />
         :
          <Question_five 
            bookingData={bookData}
            paymentData={paymentData}
          />
        }
        {
       counter === 0 && 
       <Button />
        }
    </div>
  </>
  
  )
}
