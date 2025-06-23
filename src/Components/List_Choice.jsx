import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Darkmood, TextContext } from '../pages/Home';

export default function List_Choice({li , header} ) {
  const {darkMode} = useContext(Darkmood)
 const {text , setText} = useContext(TextContext) 

  return (
    <ul className={`rounded-xl p-[20px] flex flex-col gap-[20px] w-full shadow ${
      darkMode ? 'shadow-gray-700 bg-gray-700 text-white' : 'shadow-gray-300 bg-white'
    }`}>
      <li className='flex items-center justify-between'>
        <MdOutlineKeyboardArrowDown className={darkMode ? 'text-gray-300' : ''} />
        <p className='text-sm'>{text}</p>
      </li>
      {
        li.map((el, index) => {
          
          return(
            <React.Fragment key={index}>
              <li
              onClick={()=>{
                setText(el);
                console.log(el);
                
              }}
              className={darkMode ? 'hover:bg-gray-600 p-2 rounded' : 'hover:bg-gray-100 p-2 rounded'}>
                {el}
              </li>
              {index < li.length - 1 && (
                <li className={`w-full h-[1px] ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}></li>
              )}
            </React.Fragment>
          )
        })
      }
    </ul>
  )
}