// import React, { useContext, useState } from 'react'
// import From_to from './From_to'
// import Cards from './Cards'
// import CardTime from './CardTime'
// import { RxCounterClockwiseClock } from "react-icons/rx";
// import { FaTrainSubway } from "react-icons/fa6";
// import { IoIosArrowDown } from "react-icons/io";
// import List_Choice from './List_Choice';
// import { Darkmood, HistoryContext, languageContext, TextContext, TimeContext } from '../pages/Home';

// export default function Question_tow() {
//     const [value, setValue] = useState(1)
//     const [showList, setShowList] = useState(false)

//     const { text } = useContext(TextContext)
//     const { darkMode } = useContext(Darkmood)
//     const { time } = useContext(TimeContext)
//     const { history } = useContext(HistoryContext)
//     const { language } = useContext(languageContext)

//     // الترجمة حسب اللغة
//     const translations = {
//         degree: {
//             en: "Degree",
//             ar: "الدرجة"
//         },
//         options: {
//             en: ["Regular", "First Class", "Second Class"],
//             ar: ["عادي", "أولى مميز", "ثاني مميز"]
//         }
//     }

//     return (
//         <div className={`flex flex-col xs:w-[270px] gap-[50px] items-center w-full ${
//             darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'
//         }`}>
//             <From_to />

//             <div>
//                 <div className="overflow-x-auto xs:w-[300px] p-[20px] w-[587px] scrollbar-none">
//                     <div className="flex w-[800px] gap-[20px] items-center">
//                         <Cards />
//                     </div>
//                 </div>
//                 <div className="overflow-x-auto p-[20px] xs:w-[300px] w-[587px] scrollbar-none">
//                     <div className="flex w-[800px] gap-[20px] items-center">
//                         <CardTime/>
//                     </div>
//                 </div>
//             </div>

//             <div className='flex xs:flex-col xs:items-end w-full gap-[20px]'>
//                 <div className={`w-[104.09px] xs:justify-center xs:gap-[10px] xs:w-fit flex items-center justify-between rounded-lg h-[49.88px] pr-[10px] pl-[10px] ${
//                     darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
//                 }`}>
//                     <p className={darkMode ? 'text-gray-100' : 'text-purple-900'}>{time}</p>
//                     <RxCounterClockwiseClock className={darkMode ? 'text-gray-300' : 'text-white'} />
//                 </div>
//                 <div className={`w-[135.9px] flex items-center xs:justify-center xs:gap-[10px] xs:w-fit rounded-lg h-[49.88px] justify-between pr-[10px] pl-[10px] ${
//                     darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
//                 }`}>
//                     <p className={darkMode ? 'text-gray-100' : 'text-purple-900'}>{history}</p>
//                     <RxCounterClockwiseClock className={darkMode ? 'text-gray-300' : 'text-white'} />
//                 </div>
//                 <div className={`w-[135.9px] flex items-center rounded-lg h-[49.88px] xs:justify-center xs:gap-[10px] xs:w-fit justify-between pr-[10px] pl-[10px] ${
//                     darkMode ? 'bg-gray-700' : 'bg-[#D4D0FA]'
//                 }`}>
//                     <div
//                         onClick={() => setValue(value - 1)}
//                         className={`size-[30px] border-gray-400 border-[1px] text-5xl flex items-center justify-center cursor-pointer shadow-md pb-2 rounded ${
//                             darkMode ? 'bg-gray-600 text-gray-100' : 'bg-white text-purple-900'
//                         }`}
//                     >
//                         -
//                     </div>
//                     <p className={`font-semibold text-xl ${darkMode ? 'text-gray-100' : ''}`}>{value}</p>
//                     <div
//                         onClick={() => setValue(value + 1)}
//                         className={`size-[30px] border-gray-400 border-[1px] text-3xl flex items-center justify-center cursor-pointer shadow-md pb-1 rounded ${
//                             darkMode ? 'bg-gray-600 text-white' : 'bg-purple-500 text-white'
//                         }`}
//                     >
//                         +
//                     </div>
//                 </div>
//             </div>

//             <div className='flex flex-col gap-[20px] items-center w-full'>
//                 <p className={`text-2xl xs:pr-0 pr-[70px] font-semibold self-end ${
//                     darkMode ? 'text-purple-400' : 'text-[#7367F0]'
//                 }`}>
//                     {translations.degree[language]}
//                 </p>
//                 <div
//                     onClick={() => setShowList(!showList)}
//                     className={`flex flex-row-reverse relative justify-between items-center rounded-xl xs:w-[300px] w-[419px] h-[45px] pr-[10px] pl-[10px] cursor-pointer ${
//                         darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-150'
//                     } border-[0.5px]`}
//                 >
//                     <div className='flex gap-[10px]'>
//                         <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-200'}`}>
//                             {text}
//                         </p>
//                         <div className={`size-[30px] rounded-full flex items-center justify-center ${
//                             darkMode ? 'bg-purple-600' : 'bg-[#7367F0]'
//                         }`}>
//                             <FaTrainSubway className='text-white' />
//                         </div>
//                     </div>
//                     <IoIosArrowDown className={darkMode ? 'text-purple-400' : 'text-[#7367F0]'} />

//                     {showList && (
//                         <div className={`absolute w-full inset-0 rounded-xl font-semibold z-10 ${
//                             darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-400'
//                         } border mt-[50px] shadow-lg`}>
//                             <List_Choice
//                                 header={translations.options[language][1]} 
//                                 li={translations.options[language]}
//                                 darkMode={darkMode}
//                             />
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import From_to from './From_to';
import Cards from './Cards';
import CardTime from './CardTime';
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaTrainSubway } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import List_Choice from './List_Choice';
import { Countercontext, Darkmood, HistoryContext, languageContext, TextContext, TimeContext } from '../pages/Home';
import BookingCard from './BookingCard';

// Validation schema
const bookingSchema = Yup.object().shape({
  from_station_id: Yup.number().when('$tripLoaded', {
    is: true,
    then: () => Yup.number().required('Departure station is required'),
    otherwise: () => Yup.number()
  }),
  destination_station_id: Yup.number().when('$tripLoaded', {
    is: true,
    then: () => Yup.number().required('Arrival station is required'),
    otherwise: () => Yup.number()
  }),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  adult_count: Yup.number()
    .min(1, 'At least 1 adult passenger is required')
    .max(10, 'Maximum 10 passengers allowed')
    .required('Number of adult passengers is required'),
  children_count: Yup.number()
    .min(0, 'Children count cannot be negative')
    .max(10, 'Maximum 10 children allowed')
    .required('Number of children is required'),
  class_id: Yup.number().when('$tripLoaded', {
    is: true,
    then: () => Yup.number().required('Class type is required'),
    otherwise: () => Yup.number()
  }),
  schedule_id: Yup.number().when('$tripLoaded', {
    is: true,
    then: () => Yup.number().required('Schedule is required'),
    otherwise: () => Yup.number()
  }),
  railcar_id: Yup.number().when('$tripLoaded', {
    is: true,
    then: () => Yup.number().required('Railcar is required'),
    otherwise: () => Yup.number()
  }),
  seats: Yup.array().of(Yup.number()).when('$tripLoaded', {
    is: true,
    then: () => Yup.array().of(Yup.number()).min(1, 'At least one seat must be selected'),
    otherwise: () => Yup.array().of(Yup.number())
  })
});

export default function Question_tow({ id, onBookSubmit }) {
  const { setCounter } = useContext(Countercontext);
  const [showList, setShowList] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { text } = useContext(TextContext);
  const { darkMode } = useContext(Darkmood);
  const { time } = useContext(TimeContext);
  const { history } = useContext(HistoryContext);
  const { language } = useContext(languageContext);

  // Fetch trip data on component mount
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

    if (id) {
      fetchTripData();
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      from_station_id: tripData?.departure_station?.id || '',
      destination_station_id: tripData?.arrival_station?.id || '',
      date: '',
      time: time || '',
      adult_count: 1,
      children_count: 0,
      class_id: tripData?.classes?.[0]?.id || '',
      schedule_id: id || '',
      railcar_id: tripData?.train?.id || '',
      seats: [1]
    },
    validationSchema: bookingSchema,
    validationContext: { tripLoaded: !!tripData },
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      // Validate that we have all required data
      if (!tripData) {
        setSubmitError('Trip data not loaded. Please wait and try again.');
        return;
      }

      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        const token = localStorage.getItem('authToken');
        
        // Prepare form data
        const formData = new FormData();
        formData.append('time', values.time);
        formData.append('date', values.date);
        formData.append('adult_count', values.adult_count);
        formData.append('children_count', values.children_count);
        formData.append('schedule_id', values.schedule_id);
        formData.append('class_id', values.class_id);
        formData.append('railcar_id', values.railcar_id);
        formData.append('from_station_id', values.from_station_id);
        formData.append('destination_station_id', values.destination_station_id);
        
        // Add seats
        values.seats.forEach((seat, index) => {
          formData.append(`seats[${index}]`, seat);
        });

        const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/bookings', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          },
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit booking');
        }

        const data = await response.json();
        setSubmitSuccess(true);
        console.log('Booking successful:', data);
      } catch (error) {
        setSubmitError(error.message);
        console.error('Booking error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  // Initialize form values when trip data is loaded
  useEffect(() => {
    if (tripData && !formik.values.from_station_id) {
      // Set station IDs
      formik.setValues({
        ...formik.values,
        from_station_id: tripData.departure_station.id,
        destination_station_id: tripData.arrival_station.id,
        schedule_id: tripData.id,
        railcar_id: tripData.train.id,
        class_id: tripData.classes?.[0]?.id || '',
        seats: [1] // Default seat
      });
      
      // Set departure time and date
      if (tripData.departure_time) {
        const departureDate = new Date(tripData.departure_time);
        formik.setFieldValue('date', departureDate.toISOString().split('T')[0]);
        formik.setFieldValue('time', departureDate.toTimeString().slice(0, 5));
      }
      
      // Update validation context
      formik.setFieldTouched('from_station_id', false);
      formik.setFieldTouched('destination_station_id', false);
      formik.setFieldTouched('class_id', false);
      formik.setFieldTouched('schedule_id', false);
      formik.setFieldTouched('railcar_id', false);
      formik.setFieldTouched('seats', false);
    }
  }, [tripData]);

  // Handle passenger count changes
  const handleAdultCountChange = (newValue) => {
    formik.setFieldValue('adult_count', Math.max(1, newValue));
    updateSeats(Math.max(1, newValue), formik.values.children_count);
  };

  const handleChildrenCountChange = (newValue) => {
    formik.setFieldValue('children_count', Math.max(0, newValue));
    updateSeats(formik.values.adult_count, Math.max(0, newValue));
  };

  // Update seats based on passenger count
  const updateSeats = (adults, children) => {
    const totalPassengers = adults + children;
    const currentSeats = formik.values.seats;
    
    if (currentSeats.length < totalPassengers) {
      // Add more seats if needed
      const newSeats = [...currentSeats];
      for (let i = currentSeats.length; i < totalPassengers; i++) {
        newSeats.push(i + 1); // Default seat numbers
      }
      formik.setFieldValue('seats', newSeats);
    } else if (currentSeats.length > totalPassengers) {
      // Remove excess seats
      formik.setFieldValue('seats', currentSeats.slice(0, totalPassengers));
    }
  };

  // Handle class selection
  const handleClassSelect = (selectedClass) => {
    const classObj = tripData?.classes?.find(cls => cls.name === selectedClass);
    if (classObj) {
      formik.setFieldValue('class_id', classObj.id);
    }
    setShowList(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className={`flex justify-center items-center h-64 ${
        darkMode ? 'text-gray-100' : 'text-[#393343]'
      }`}>
        <div className="text-xl">Loading trip data...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`flex justify-center items-center h-64 ${
        darkMode ? 'text-red-400' : 'text-red-600'
      }`}>
        <div className="text-xl">Error: {error}</div>
      </div>
    );
  }

  // No trip data
  if (!tripData) {
    return (
      <div className={`flex justify-center items-center h-64 ${
        darkMode ? 'text-gray-100' : 'text-[#393343]'
      }`}>
        <div className="text-xl">No trip data available</div>
      </div>
    );
  }

  // الترجمة حسب اللغة
  const translations = {
    degree: {
      en: "Class",
      ar: "الدرجة"
    },
    adults: {
      en: "Adults",
      ar: "البالغين"
    },
    children: {
      en: "Children",
      ar: "الأطفال"
    },
    from: {
      en: "From",
      ar: "من"
    },
    to: {
      en: "To", 
      ar: "إلى"
    },
    train: {
      en: "Train",
      ar: "القطار"
    },
    price: {
      en: "Price",
      ar: "السعر"
    }
  };

  const totalPassengers = formik.values.adult_count + formik.values.children_count;

  // Submit Button with better validation
  const canSubmit = tripData && 
    formik.values.from_station_id && 
    formik.values.destination_station_id && 
    formik.values.date && 
    formik.values.time && 
    formik.values.class_id && 
    formik.values.railcar_id && 
    formik.values.seats.length > 0;

  return (
    <form onSubmit={formik.handleSubmit} className={`flex flex-col xs:w-[270px] gap-[50px] items-center w-full ${
      darkMode ? 'bg-gray-800 text-gray-100' : 'text-[#393343]'
    }`}>
     
      <BookingCard 
        scheduleData={tripData} 
        onBookingSuccess={(data) => {
          onBookSubmit(data);
          setCounter(2); // Advance to payment step after successful booking
        }}
      />

  

      {/* Submission status messages */}
      {submitError && (
        <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
          {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="text-green-500 text-center p-4 bg-green-100 rounded-lg">
          Booking submitted successfully!
        </div>
      )}
    </form>
  );
}
