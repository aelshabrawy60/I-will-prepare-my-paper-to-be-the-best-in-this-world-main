// import React, { useContext } from "react";
// import homeImage from "../assets/image 1.png"; 
// import { Darkmood, languageContext } from "../pages/Home";

// const Home = () => {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext); // 'en' for English, 'ar' for Arabic

//   const texts = {
//     title1: {
//       en: "A ",
//       ar: "طريقة "
//     },
//     highlighted1: {
//       en: "fast and easy way",
//       ar: "سريعة وسهلة "
//     },
//     highlighted3: {
//       en: "to book",
//       ar: "  "
//     },
//     title2: {
//       en: " your ",
//       ar: "لحجز "
//     },
//     highlighted2: {
//       en: "train seat",
//       ar: "مكانك في "
//     },
//     title3: {
//       en: "",
//       ar: "القطار"
//     },
//     description1: {
//       en: "Plan smart and travel better. Seka puts Egypt's",
//       ar: "خطط بذكاء وسافر بشكل أفضل. سكه تجعل شبكة"
//     },
//     description2: {
//       en: "train network at your fingertips.",
//       ar: "القطارات في مصر بين يديك."
//     }
//   };

//   return (
//     <section 
//       id="Home" 
//       className={`flex flex-col md:flex-row pr-[20px] items-center justify-between ${
//         darkMode ? 'bg-gray-900' : ''
//       }`}
  
//     >
//       <div 
//         className={`w-full flex  relative`}
//       >
//         <div className="relative w-full">
//           <img 
//             src={homeImage} 
//             alt="Train Booking" 
//             className="max-w-full h-auto" 
//             style={{ 
//               maskImage: language === 'ar' 
//                 ? 'linear-gradient(to left, rgba(0,0,0,1) 75%, rgba(0,0,0,0))'
//                 : 'linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0))',
//               WebkitMaskImage: language === 'ar'
//                 ? 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0))'
//                 : 'linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0))',
//               marginRight: language === 'ar' ? '0' : '',
//               marginLeft: language === 'ar' ? '0' : ''
//             }}
//           />
//         </div>
//       </div>

//       <div 
//         className={` w-full md:w-1/2 text-start  p-4 ${
//           darkMode ? '' : ''
//         }`}
//       >
//         <h1 className={`text-2xl text-nowrap md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//           {texts.title1[language]}
//           <span style={{ color: '#7367F0' }}>{texts.highlighted1[language]} </span> {texts.highlighted3[language]}
//         </h1>
       
//         <h1 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//           {texts.title2[language]}
//           <span style={{ color: '#7367F0' }}>{texts.highlighted2[language]}</span>
//           {texts.title3[language]}
//         </h1>
//         <p className={`mt-4 text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
//           {texts.description1[language]}
//         </p>
//         <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
//           {texts.description2[language]}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import homeImage from "../assets/image 1.png"; 
import { Darkmood, languageContext } from "../pages/Home";

const Home = () => {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  // Formik validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(language === 'ar' ? 'البريد الإلكتروني غير صالح' : 'Invalid email address')
      .required(language === 'ar' ? 'مطلوب' : 'Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://lawngreen-walrus-394451.hostingersite.com/api/home',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        if (response.ok) {
          alert(language === 'ar' ? 'شكراً لتسجيلك!' : 'Thank you for subscribing!');
          formik.resetForm();
        } else {
          alert(data.message || (language === 'ar' ? 'حدث خطأ' : 'An error occurred'));
        }
      } catch (error) {
        console.error('Error:', error);
        alert(language === 'ar' ? 'حدث خطأ في الاتصال' : 'Connection error');
      }
    },
  });

  const texts = {
    title1: {
      en: "A ",
      ar: "طريقة "
    },
    highlighted1: {
      en: "fast and easy way",
      ar: "سريعة وسهلة "
    },
    highlighted3: {
      en: "to book",
      ar: "  "
    },
    title2: {
      en: " your ",
      ar: "لحجز "
    },
    highlighted2: {
      en: "train seat",
      ar: "مكانك في "
    },
    title3: {
      en: "",
      ar: "القطار"
    },
    description1: {
      en: "Plan smart and travel better. Seka puts Egypt's",
      ar: "خطط بذكاء وسافر بشكل أفضل. سكه تجعل شبكة"
    },
    description2: {
      en: "train network at your fingertips.",
      ar: "القطارات في مصر بين يديك."
    },
    newsletter: {
      en: "Subscribe to our newsletter",
      ar: "اشترك في نشرتنا البريدية"
    },
    emailPlaceholder: {
      en: "Your email address",
      ar: "بريدك الإلكتروني"
    },
    subscribe: {
      en: "Subscribe",
      ar: "اشتراك"
    }
  };

  return (
    <section 
      id="Home" 
      className={`flex flex-col md:flex-row pr-[20px] items-center justify-between ${
        darkMode ? 'bg-gray-900' : ''
      }`}
    >
      <div className={`w-full flex relative`}>
        <div className="relative w-full">
          <img 
            src={homeImage} 
            alt="Train Booking" 
            className="max-w-full h-auto" 
            style={{ 
              maskImage: language === 'ar' 
                ? 'linear-gradient(to left, rgba(0,0,0,1) 75%, rgba(0,0,0,0))'
                : 'linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0))',
              WebkitMaskImage: language === 'ar'
                ? 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0))'
                : 'linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0))',
              marginRight: language === 'ar' ? '0' : '',
              marginLeft: language === 'ar' ? '0' : ''
            }}
          />
        </div>
      </div>

      <div className={`w-full md:w-1/2 text-start p-4 ${darkMode ? '' : ''}`}>
        <h1 className={`text-2xl text-nowrap md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {texts.title1[language]}
          <span style={{ color: '#7367F0' }}>{texts.highlighted1[language]} </span> {texts.highlighted3[language]}
        </h1>
       
        <h1 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {texts.title2[language]}
          <span style={{ color: '#7367F0' }}>{texts.highlighted2[language]}</span>
          {texts.title3[language]}
        </h1>
        <p className={`mt-4 text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          {texts.description1[language]}
        </p>
        <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          {texts.description2[language]}
        </p>

      
       
      </div>
    </section>
  );
};

export default Home;