// import React, { useContext, useEffect, useState } from 'react';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { Show_DivContext, Darkmood, languageContext, Showcontext, TextContext } from '../pages/Home';
// import List_Choice from './List_Choice';

// export default function Confirm_Cancel() {
//   const [show_Choice, setShow_Choice] = useState(false);
//   const [comments, setComments] = useState('');
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const {setShow} = useContext(Showcontext)
//   const {text , setText} = useContext(TextContext)
//   const {setShow_Div} = useContext(Show_DivContext)
//   const isArabic = language === 'ar';


//   const texts = {
//     ar: {
//       reasonLabel: 'سبب الغاء الحجز',
//       selectReason: 'حدد السبب',
//       commentsLabel: 'تعليقات',
//       commentsPlaceholder: 'اكتب السبب هنا',
//       cancelTicket: 'الغاء التذكره',
//       reasonsList: [
//         'ظروف عائلية طارئة',
//         'تغيير مفاجئ في خطط السفر',
//         'أسباب شخصية أو ظروف غير متوقعة',
//         'حالة طبية طارئة أو مرض',
//         'التزامات عمل أو مواعيد جديدة',
//         'مشاكل مالية أو ميزانية غير كافية للسفر',
//       ],
//     },
//     en: {
//       reasonLabel: 'Reason for Cancellation',
//       selectReason: 'Select Reason',
//       commentsLabel: 'Comments',
//       commentsPlaceholder: 'Write your reason here',
//       cancelTicket: 'Cancel Ticket',
//       reasonsList: [
//         'Emergency family circumstances',
//         'Sudden change in travel plans',
//         'Personal reasons or unforeseen circumstances',
//         'Health emergency or illness',
//         'Work obligations or new commitments',
//         'Financial issues or insufficient budget for travel',
//       ],
//     },
//   };
//   useEffect(()=>{
//     if(language === 'ar'){
//       setText(texts.ar.selectReason);
//     }else{

//       setText( texts.en.selectReason);
//     }
//   },[language, setText]);
//   const t = texts[language] || texts.en;


//   return (
//     <div
//       className={`h-[568px] w-full   flex pb-[20px] flex-col items-center gap-[10px] justify-between font-semibold ${
//         darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'
//       }`}
//       dir={isArabic ? 'rtl' : 'ltr'}
//     >
//       <div className='flex p-[30px] flex-col items-center gap-[30px] w-full'>

//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.reasonLabel}</p>

//           <div
//             onClick={() => setShow_Choice(!show_Choice)}
//             className={`flex relative border ${
//               darkMode ? 'border-gray-600' : 'border-gray-200'
//             } h-[60px] justify-between p-[10px] ${
//               darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'
//             } rounded-xl gap-[10px] cursor-pointer items-center`}
//           >
//             <MdOutlineKeyboardArrowDown className={darkMode ? 'text-gray-300' : ''} />
//             <p className='text-sm'>
//               {text}
//             </p>

//             <div
//               className={`absolute w-full inset-0 rounded-xl ${
//                 darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'
//               } ${show_Choice ? 'animate__bounceInDown animate__animated z-10' : 'hidden'}`}
//             >
//               <List_Choice
//                 header={t.selectReason}
//                 li={t.reasonsList}
//               />
//             </div>
//           </div>
//         </div>

//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.commentsLabel}</p>
//           <textarea
//             value={comments}
//             onChange={(e) => setComments(e.target.value)}
//             placeholder={t.commentsPlaceholder}
//             className={`w-full h-[106px] p-[10px] rounded-xl border ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-white text-[#393343]'
//             } resize-none focus:outline-none`}
//           />
//         </div>

//       </div>

//       <button
//       onClick={()=>{
//                   setShow(false)
//                   setShow_Div(0)
//                 }}
//         className={`h-[56.1px] w-[90%]  flex justify-center items-center shadow-lg rounded-xl border cursor-pointer transition-colors ${
//           darkMode
//             ? 'text-red-400 border-red-400 hover:bg-gray-700'
//             : 'text-red-500 border-red-500 hover:bg-red-50'
//         }`}
//       >
//         <p className='font-semibold'>{t.cancelTicket}</p>
//       </button>
//     </div>
//   );
// }

// import React, { useContext, useEffect, useState } from 'react';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Show_DivContext, Darkmood, languageContext, Showcontext, TextContext } from '../pages/Home';
// import List_Choice from './List_Choice';

// export default function Confirm_Cancel() {
//   const [show_Choice, setShow_Choice] = useState(false);
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const { setShow } = useContext(Showcontext);
//   const { text, setText } = useContext(TextContext);
//   const { setShow_Div } = useContext(Show_DivContext);
//   const isArabic = language === 'ar';

//   const texts = {
//     ar: {
//       reasonLabel: 'سبب الغاء الحجز',
//       selectReason: 'حدد السبب',
//       commentsLabel: 'تعليقات',
//       commentsPlaceholder: 'اكتب السبب هنا',
//       cancelTicket: 'الغاء التذكره',
//       reasonsList: [
//         'ظروف عائلية طارئة',
//         'تغيير مفاجئ في خطط السفر',
//         'أسباب شخصية أو ظروف غير متوقعة',
//         'حالة طبية طارئة أو مرض',
//         'التزامات عمل أو مواعيد جديدة',
//         'مشاكل مالية أو ميزانية غير كافية للسفر',
//       ],
//     },
//     en: {
//       reasonLabel: 'Reason for Cancellation',
//       selectReason: 'Select Reason',
//       commentsLabel: 'Comments',
//       commentsPlaceholder: 'Write your reason here',
//       cancelTicket: 'Cancel Ticket',
//       reasonsList: [
//         'Emergency family circumstances',
//         'Sudden change in travel plans',
//         'Personal reasons or unforeseen circumstances',
//         'Health emergency or illness',
//         'Work obligations or new commitments',
//         'Financial issues or insufficient budget for travel',
//       ],
//     },
//   };

//   // Formik validation schema
//   const validationSchema = Yup.object().shape({
//     reason: Yup.string().required(isArabic ? 'الرجاء اختيار السبب' : 'Please select a reason'),
//     comments: Yup.string(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       reason: '',
//       comments: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch(
//           'https://lawngreen-walrus-394451.hostingersite.com/api/reasons',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setShow(false);
//           setShow_Div(0);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   });

//   useEffect(() => {
//     if (language === 'ar') {
//       setText(texts.ar.selectReason);
//     } else {
//       setText(texts.en.selectReason);
//     }
//   }, [language, setText]);

//   const t = texts[language] || texts.en;

//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className={`h-[568px] w-full flex pb-[20px] flex-col items-center gap-[10px] justify-between font-semibold ${
//         darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'
//       }`}
//       dir={isArabic ? 'rtl' : 'ltr'}
//     >
//       <div className='flex p-[30px] flex-col items-center gap-[30px] w-full'>
//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.reasonLabel}</p>

//           <div
//             onClick={() => setShow_Choice(!show_Choice)}
//             className={`flex relative border ${
//               darkMode ? 'border-gray-600' : 'border-gray-200'
//             } h-[60px] justify-between p-[10px] ${
//               darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'
//             } rounded-xl gap-[10px] cursor-pointer items-center`}
//           >
//             <MdOutlineKeyboardArrowDown className={darkMode ? 'text-gray-300' : ''} />
//             <p className='text-sm'>
//               {formik.values.reason || text}
//             </p>

//             <div
//               className={`absolute w-full inset-0 rounded-xl ${
//                 darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'
//               } ${show_Choice ? 'animate__bounceInDown animate__animated z-10' : 'hidden'}`}
//             >
//               <List_Choice
//                 header={t.selectReason}
//                 li={t.reasonsList}
//                 onSelect={(selectedReason) => {
//                   formik.setFieldValue('reason', selectedReason);
//                   setShow_Choice(false);
//                 }}
//               />
//             </div>
//           </div>
//           {formik.touched.reason && formik.errors.reason && (
//             <div className="text-red-500 text-sm">
//               {formik.errors.reason}
//             </div>
//           )}
//         </div>

//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.commentsLabel}</p>
//           <textarea
//             name="comments"
//             value={formik.values.comments}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder={t.commentsPlaceholder}
//             className={`w-full h-[106px] p-[10px] rounded-xl border ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-white text-[#393343]'
//             } resize-none focus:outline-none`}
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         className={`h-[56.1px] w-[90%] flex justify-center items-center shadow-lg rounded-xl border cursor-pointer transition-colors ${
//           darkMode
//             ? 'text-red-400 border-red-400 hover:bg-gray-700'
//             : 'text-red-500 border-red-500 hover:bg-red-50'
//         }`}
//       >
//         <p className='font-semibold'>{t.cancelTicket}</p>
//       </button>
//     </form>
//   );
// }



// import React, { useContext, useEffect, useState } from 'react';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Show_DivContext, Darkmood, languageContext, Showcontext, TextContext } from '../pages/Home';
// import List_Choice from './List_Choice';

// export default function Confirm_Cancel() {
//   const [show_Choice, setShow_Choice] = useState(false);
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const { setShow } = useContext(Showcontext);
//   const { setShow_Div } = useContext(Show_DivContext);
//   const isArabic = language === 'ar';

//   const texts = {
//     ar: {
//       reasonLabel: 'سبب الغاء الحجز',
//       selectReason: 'حدد السبب',
//       commentsLabel: 'تعليقات',
//       commentsPlaceholder: 'اكتب السبب هنا',
//       cancelTicket: 'الغاء التذكره',
//       reasonsList: [
       
//       ],
//     },
//     en: {
//       reasonLabel: 'Reason for Cancellation',
//       selectReason: 'Select Reason',
//       commentsLabel: 'Comments',
//       commentsPlaceholder: 'Write your reason here',
//       cancelTicket: 'Cancel Ticket',
//       reasonsList: [
//         'Change of Plans',
//         'Found Better Option',
//         'Personal Emergency',
//         'Financial Issues',
//         'Travel Restrictions',
//         'Health Concerns',
//         'Schedule Conflict',
//         'Weather Conditions'
//       ],
//     },
//   };

//   // Formik validation schema
//   const validationSchema = Yup.object().shape({
//     reason: Yup.string().required(isArabic ? 'الرجاء اختيار السبب' : 'Please select a reason'),
//     comments: Yup.string(),
//   });

//   const formik = useFormik({
//     initialValues: {
//       reason: '',
//       comments: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         const response = await fetch(
//           'https://lawngreen-walrus-394451.hostingersite.com/api/reasons',
//           {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(values),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setShow(false);
//           setShow_Div(0);
//         } else {
//           console.error(data.message);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   });

//   const t = texts[language] || texts.en;

//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className={`h-[568px] w-full flex pb-[20px] flex-col items-center gap-[10px] justify-between font-semibold ${
//         darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'
//       }`}
//       dir={isArabic ? 'rtl' : 'ltr'}
//     >
//       <div className='flex p-[30px] flex-col items-center gap-[30px] w-full'>
//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.reasonLabel}</p>

//           <div
//             onClick={() => setShow_Choice(!show_Choice)}
//             className={`flex relative border ${
//               darkMode ? 'border-gray-600' : 'border-gray-200'
//             } h-[60px] justify-between p-[10px] ${
//               darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'
//             } rounded-xl gap-[10px] cursor-pointer items-center`}
//           >
//             <MdOutlineKeyboardArrowDown className={darkMode ? 'text-gray-300' : ''} />
//             <p className='text-sm'>
//               {formik.values.reason || t.selectReason}
//             </p>

//             <div
//               className={`absolute w-full inset-0 rounded-xl ${
//                 darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-200 bg-white'
//               } ${show_Choice ? 'animate__bounceInDown animate__animated z-10' : 'hidden'}`}
//             >
//               <List_Choice
//                 header={t.selectReason}
//                 li={t.reasonsList}
//                 onSelect={(selectedReason) => {
//                   formik.setFieldValue('reason', selectedReason);
//                   setShow_Choice(false);
//                 }}
//               />
//             </div>
//           </div>
//           {formik.touched.reason && formik.errors.reason && (
//             <div className="text-red-500 text-sm">
//               {formik.errors.reason}
//             </div>
//           )}
//         </div>

//         <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
//           <p className='text-lg self-end'>{t.commentsLabel}</p>
//           <textarea
//             name="comments"
//             value={formik.values.comments}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder={t.commentsPlaceholder}
//             className={`w-full h-[106px] p-[10px] rounded-xl border ${
//               darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-white text-[#393343]'
//             } resize-none focus:outline-none`}
//           />
//         </div>
//       </div>

//       <button
//         type="submit"
//         className={`h-[56.1px] w-[90%] flex justify-center items-center shadow-lg rounded-xl border cursor-pointer transition-colors ${
//           darkMode
//             ? 'text-red-400 border-red-400 hover:bg-gray-700'
//             : 'text-red-500 border-red-500 hover:bg-red-50'
//         }`}
//       >
//         <p className='font-semibold'>{t.cancelTicket}</p>
//       </button>
//     </form>
//   );
// };

import React, { useContext, useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Darkmood, languageContext, Showcontext, Show_DivContext } from '../pages/Home';

export default function Confirm_Cancel() {
  const [show_Choice, setShow_Choice] = useState(false);
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);
  const { setShow } = useContext(Showcontext);
  const { setShow_Div } = useContext(Show_DivContext);
  const isArabic = language === 'ar';

  const texts = {
    ar: {
      reasonLabel: 'سبب الغاء الحجز',
      selectReason: 'حدد السبب',
      commentsLabel: 'تعليقات',
      commentsPlaceholder: 'اكتب السبب هنا',
      cancelTicket: 'الغاء التذكره',
      reasonsList: [
        'تغيير في الخطط',
        'العثور على خيار أفضل',
        'ظروف شخصية طارئة',
        'مشاكل مالية',
        'قيود سفر',
        'مشاكل صحية',
        'تعارض في المواعيد',
        'ظروف جوية'
      ],
    },
    en: {
      reasonLabel: 'Reason for Cancellation',
      selectReason: 'Select Reason',
      commentsLabel: 'Comments',
      commentsPlaceholder: 'Write your reason here',
      cancelTicket: 'Cancel Ticket',
      reasonsList: [
        'Change of Plans',
        'Found Better Option',
        'Personal Emergency',
        'Financial Issues',
        'Travel Restrictions',
        'Health Concerns',
        'Schedule Conflict',
        'Weather Conditions'
      ],
    },
  };

  const validationSchema = Yup.object().shape({
    reason: Yup.string().required(isArabic ? 'الرجاء اختيار السبب' : 'Please select a reason'),
    comments: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      reason: '',
      comments: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Submitted values:', values);
      setShow(false);
      setShow_Div(0);
    },
  });

  const t = texts[language] || texts.en;

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`h-[568px] w-full flex pb-[20px] flex-col items-center gap-[10px] justify-between font-semibold ${
        darkMode ? 'bg-gray-800 text-white' : 'text-[#393343]'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='flex p-[30px] flex-col items-center gap-[30px] w-full'>
        <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
          <p className='text-lg self-end'>{t.reasonLabel}</p>

          <div className="relative">
            <div
              onClick={() => setShow_Choice(!show_Choice)}
              className={`flex border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              } h-[60px] justify-between p-[10px] ${
                darkMode ? 'bg-gray-700 text-gray-200' : 'text-[#374957]'
              } rounded-xl gap-[10px] cursor-pointer items-center`}
            >
              <MdOutlineKeyboardArrowDown className={`transition-transform ${show_Choice ? 'rotate-180' : ''}`} />
              <p className='text-sm truncate'>
                {formik.values.reason || t.selectReason}
              </p>
            </div>

            {show_Choice && (
              <div 
                className={`absolute z-50 w-full mt-1 max-h-60 overflow-auto ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                } border rounded-xl shadow-lg`}
                onClick={(e) => e.stopPropagation()}
              >
                {t.reasonsList.map((reason, index) => (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer ${
                      darkMode 
                        ? 'hover:bg-gray-600' 
                        : 'hover:bg-gray-100'
                    } ${
                      formik.values.reason === reason 
                        ? (darkMode ? 'bg-gray-600' : 'bg-gray-100') 
                        : ''
                    }`}
                    onClick={() => {
                      formik.setFieldValue('reason', reason);
                      setShow_Choice(false);
                    }}
                  >
                    {reason}
                  </div>
                ))}
              </div>
            )}
          </div>
          {formik.touched.reason && formik.errors.reason && (
            <div className="text-red-500 text-sm">
              {formik.errors.reason}
            </div>
          )}
        </div>

        <div className='flex flex-col gap-[10px] w-full max-w-[327px] xs:max-w-[270px]'>
          <p className='text-lg self-end'>{t.commentsLabel}</p>
          <textarea
            name="comments"
            value={formik.values.comments}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t.commentsPlaceholder}
            className={`w-full h-[106px] p-[10px] rounded-xl border ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-gray-200 bg-white text-[#393343]'
            } resize-none focus:outline-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`h-[56.1px] w-[90%] flex justify-center items-center shadow-lg rounded-xl border cursor-pointer transition-colors ${
          darkMode
            ? 'text-red-400 border-red-400 hover:bg-gray-700'
            : 'text-red-500 border-red-500 hover:bg-red-50'
        }`}
      >
        <p className='font-semibold'>{t.cancelTicket}</p>
      </button>
    </form>
  );
}