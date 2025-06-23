import React, { useContext, useState } from 'react';
import logo from '../assets/snapedit_1740958952578-removebg-preview.png';
import { FaArrowLeftLong } from "react-icons/fa6";
import { languageContext, Showcontext } from '../pages/Home';
import logo3 from '../assets/Annotation 2025-06-18 015139.png';
import { useNavigate } from 'react-router-dom';
import Steps from './Steps'; // Import your Steps component

export default function Curds({ data }) {
    const { setShow } = useContext(Showcontext);
    const { language } = useContext(languageContext);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const texts = {
        arrival: { en: "Arrival", ar: "الوصول" },
        departure: { en: "Departure", ar: "ميعاد التحرك" },
        currency: { en: "EGP", ar: "جنية" }
    };

    const handleAIClick = () => {
        navigate('/ai');
    };

    const handleButtonClick = () => {
        setIsModalOpen(true);
        setShow(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setShow(false);
    };

    const formatTime = (datetime) => {
        const date = new Date(datetime);
        return date.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        });
    };

    const cleanStationName = (name) => {
        return name.trim().toLowerCase().startsWith("station ")
            ? name.slice(8).trim()
            : name;
    };

    return (
        <>
            <div className='relative'>
                <div className='absolute top-0 right-0 z-10 cursor-pointer' onClick={handleAIClick}>
                    <img src={logo3} className='w-[40px]' alt="AI Page" />
                </div>

                <img src={logo} className='w-[400px]' alt="" />

                <div className='absolute flex flex-row-reverse justify-end p-[10px] pt-[15px] xs:pt-[10px] gap-[50px] items-center inset-0'>
                    <div className='flex flex-col self-start'>
                        <div className='flex gap-[100px] xs:gap-[90px] w-[61.91217803955078] h-[18.441925048828125]'>
                            <div className={`flex items-end ${language === 'ar' ? 'flex-col' : 'flex-col-reverse'} max-w-[100px] xs:max-w-[80px]`}>
                                <p className='text-[25.29px] font-Almarai font-bold xs:text-[20px] text-[#564DB4]'>
                                    {formatTime(data.arrival_time)}
                                </p>
                                <p className='font-Almarai font-normal text-[14px] text-[#9D9D9D] xs:text-[10px]'>
                                    {texts.arrival[language]}
                                </p>
                                <p className='font-Almarai font-bold text-[16.86px] text-[#404040] xs:text-[13px] text-center break-words leading-tight'>
                                    {cleanStationName(data.arrival_station.name)}
                                </p>
                            </div>

                            <div className={`flex items-end ${language === 'ar' ? 'flex-col' : 'flex-col-reverse'} max-w-[100px] xs:max-w-[80px]`}>
                                <p className='text-[25.29px] font-Almarai font-bold text-[#564DB4] xs:text-[20px]'>
                                    {formatTime(data.departure_time)}
                                </p>
                                <p className='font-Almarai font-normal text-[14px] text-[#9D9D9D] xs:text-[10px]'>
                                    {texts.departure[language]}
                                </p>
                                <p className='font-Almarai font-bold text-[16.86px] text-[#404040] xs:text-[13px] text-center break-words leading-tight'>
                                    {cleanStationName(data.departure_station.name)}
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col xs:gap-2 xs:pt-1 gap-[10px] xs:items-start items-end pt-[10px]'>
                            {data.classes.map((cls, idx) => (
                                <div key={idx} className='flex justify-between xs:gap-[25px] xs:justify-start w-[248px] h-[12px]'>
                                    <p className='font-Almarai font-bold text-[12px]'>
                                        {cls.price}
                                    </p>
                                    <p className='font-Almarai font-normal text-[12px] text-[#000000]'>
                                        {cls.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        onClick={handleButtonClick}
                        className='flex items-center p-[15.43px] xs:h-[90%] h-[152.8px] w-[44.963172912597656] rounded-[16.86px] justify-center cursor-pointer bg-[#7367F0]'
                    >
                        <FaArrowLeftLong className='text-white' />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 w-full bg-black bg-opacity-50 flex justify-center z-50"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="absolute top-[10%]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Steps id={data.id || data.train_id || 'default'} onClose={handleCloseModal} />
                    </div>
                </div>
            )}
        </>
    );
}