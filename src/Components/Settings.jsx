import React, { useContext } from 'react'

import { ActiveContext, Darkmood, Show_DivContext, Showcontext } from '../pages/Home';
import Portofoilo from './Portofoilo';
import Booket from './Booket';
import { TbXboxXFilled } from "react-icons/tb";
import Cancel_Boket from './Cancel_Boket';
import Confirm_Cancel from './Confirm_Cancel';
import Privacy from './Privacy';
import { useNavigate } from 'react-router-dom';
import Sitting_partone from './Sitting_partone';


export default function Settings() {
  const {active } = useContext(ActiveContext)
  const {show,setShow} = useContext(Showcontext)
  const {show_Div,setShow_Div} = useContext(Show_DivContext)
  const {darkMode} = useContext(Darkmood)
   
  return (
    <div className={`flex relative sm:gap-[0px]  
    w-full xs:w-[300px] xs:gap-1 sm:p-0  justify-between gap-[50px] xs:p-0 p-[20px] ${darkMode ? 'bg-gray-900' : ''}`}>
        <div className={` w-[100%] flex  justify-center sm:p-0  xs:pl-0  p-[10px] ${darkMode ? 'bg-gray-900' : ''}`}>
            {
              active === 0 ?
             
                <Portofoilo/>

              :
              active === 1 ? 
              <div className='self-center  flex justify-center'>
                <Booket/>

              </div>
              :
              active === 2 ? 
              <Privacy/>
              :
              ''
            }
             {show &&  active === 1 &&  (
          <div
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="fixed overflow-y-auto top-[0px] right-0 left-0 xs:top-0 xs:right-0 bg-black h-screen  bg-opacity-50 flex justify-center items-center z-50">
              <div className={` absolute    shadow shadow-gray-400 border rounded-2xl  ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                 <TbXboxXFilled
                         onClick={()=>{
                           setShow(false)
                           setShow_Div(0)
                         }}
                           className='absolute text-5xl text-gray-300 hover:text-blue-500 duration-300 top-[-40px] xs:right-[-20px] xs:top-[-55px] right-[-40px] cursor-pointer' />
                    {
                      show_Div === 0 ?
                      <Cancel_Boket/>
                      :
                      <div className='w-[320px] sm:w-[400px]'>
                        <Confirm_Cancel/>

                      </div>
                    }
              </div>
            </div>
          )}
        </div>
        
      <Sitting_partone/>
    </div>
  )
}