// import React, { useContext } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);

//   const texts = {
//     en: {
//       emailLabel: "Email",
//       emailPlaceholder: "Tasbehkhaled@gmail.com",
//       nameLabel: "Full Name",
//       namePlaceholder: "Tasbeh khaled",
//       saveBtn: "Save"
//     },
//     ar: {
//       emailLabel: "البريد الالكتروني",
//       emailPlaceholder: "Tasbehkhaled@gmail.com",
//       nameLabel: "الاسم كامل",
//       namePlaceholder: " تسبيح خالد",
//       saveBtn: "حفظ"
//     }
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   return (
//     <div className={`shadow w-full sm:w-[450px]  ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}
   
//     >
//       <div className='bg-yellow-500 rounded-full'>
//         <img src={logo} className='size-[125px]' />
//       </div>
      
//       <div className={`flex  gap-[20px] w-full justify-center`}>
//         <div className={`flex flex-col gap-[2px]  ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
//             {t.emailLabel}
//           </p>
//           <input
//             type="email"
//             placeholder={t.emailPlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//           />
//         </div>

//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>
//             {t.nameLabel}
//           </p>
//           <input
//             type="text"
//             placeholder={t.namePlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//           />
//         </div>
//       </div>

//       <div className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//         h-[50.1px] xs:w-[200px] w-[350px] text-white
//         flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
//         {t.saveBtn}
//       </div>
//     </div>
//   )
// }


// اللي بيدي 404
// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const [profileData, setProfileData] = useState({
//     id: '', // زيّدت id عشان نستخدمه من الـ GET
//     name: '',
//     email: '',
//     phone: '',
//     city: { name: '' },
//     image: '',
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const texts = {
//     en: {
//       emailLabel: 'Email',
//       emailPlaceholder: 'Tasbehkhaled@gmail.com',
//       nameLabel: 'Full Name',
//       namePlaceholder: 'Tasbeh khaled',
//       saveBtn: 'Save',
//     },
//     ar: {
//       emailLabel: 'البريد الالكتروني',
//       emailPlaceholder: 'Tasbehkhaled@gmail.com',
//       nameLabel: 'الاسم كامل',
//       namePlaceholder: 'تسبيح خالد',
//       saveBtn: 'حفظ',
//     },
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         console.log('الـ Token:', token ? 'موجود' : 'مش موجود');

//         if (!token) {
//           setError('مش لاقي توكن التحقق، هيروح لصفحة الدخول...');
//           window.location.href = '/login';
//           return;
//         }

//         const response = await fetch('/api/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: 'application/json',
//           },
//           credentials: 'include',
//         });

//         if (!response.ok) {
//           throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
//         }

//         const data = await response.json();
//         if (data.code === 'success') {
//           setProfileData({
//             id: data.data.id || '', // جيب الـ id من الـ GET
//             name: data.data.name || '',
//             email: data.data.email || '',
//             phone: data.data.phone || '',
//             city: { name: data.data.city?.name || '' },
//             image: data.data.image || logo,
//           });
//         } else {
//           setError(data.message || 'فشل جلب البيانات');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleChange = (field, value) => {
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       console.log('الـ Token للحفظ:', token ? 'موجود' : 'مش موجود');

//       if (!token) {
//         setError('مش لاقي توكن التحقق، هيروح لصفحة الدخول...');
//         window.location.href = '/login';
//         return;
//       }

//       const response = await fetch('/api/profile', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({
//           id: profileData.id, // زيّدت الـ id عشان السيرفر يعرف مين
//           name: profileData.name,
//           email: profileData.email,
//           phone: profileData.phone,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // جيب التفاصيل من الـ 422
//         throw new Error(`خطأ HTTP! الحالة: ${response.status} - ${errorData.message || JSON.stringify(errorData.errors)}`);
//       }

//       const data = await response.json();
//       if (data.code === 'success') {
//         alert('البيانات اتحدثت بنجاح!');
//       } else {
//         setError(data.message || 'فشل تحديث البيانات');
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading) {
//     return <div className="text-center">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div
//       className={`shadow w-full sm:w-[450px] ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}
//     >
//       <div className="bg-yellow-500 rounded-full">
//         <img src={profileData.image} alt="Profile" className="size-[125px] rounded-full object-cover" />
//       </div>
      
//       <div className={`flex gap-[20px] w-full justify-center`}>
//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
//             {t.emailLabel}
//           </p>
//           <input
//             type="email"
//             value={profileData.email}
//             onChange={(e) => handleChange('email', e.target.value)}
//             placeholder={t.emailPlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//           />
//         </div>

//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>
//             {t.nameLabel}
//           </p>
//           <input
//             type="text"
//             value={profileData.name}
//             onChange={(e) => handleChange('name', e.target.value)}
//             placeholder={t.namePlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//           />
//         </div>
//       </div>

//       <div
//         className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//         h-[50.1px] xs:w-[200px] w-[350px] text-white
//         flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}
//         onClick={handleSubmit}
//       >
//         {t.saveBtn}
//       </div>
//     </div>
//   );
// }



// import React, { useContext } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);

//   const texts = {
//     en: {
//       emailLabel: "Email",
//       emailPlaceholder: "Tasbehkhaled@gmail.com",
//       nameLabel: "Full Name",
//       namePlaceholder: "Tasbeh khaled",
//       saveBtn: "Save",
//       validation: {
//         emailRequired: "Email is required",
//         emailInvalid: "Invalid email address",
//         nameRequired: "Full name is required",
//         nameMin: "Name must be at least 3 characters",
//         nameMax: "Name must be 50 characters or less"
//       }
//     },
//     ar: {
//       emailLabel: "البريد الالكتروني",
//       emailPlaceholder: "Tasbehkhaled@gmail.com",
//       nameLabel: "الاسم كامل",
//       namePlaceholder: " تسبيح خالد",
//       saveBtn: "حفظ",
//       validation: {
//         emailRequired: "البريد الإلكتروني مطلوب",
//         emailInvalid: "عنوان بريد إلكتروني غير صالح",
//         nameRequired: "الاسم الكامل مطلوب",
//         nameMin: "يجب أن يكون الاسم 3 أحرف على الأقل",
//         nameMax: "يجب أن يكون الاسم 50 حرفًا أو أقل"
//       }
//     }
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   // Formik setup with Yup validation
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       fullName: ''
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email(t.validation.emailInvalid)
//         .required(t.validation.emailRequired),
//       fullName: Yup.string()
//         .min(3, t.validation.nameMin)
//         .max(50, t.validation.nameMax)
//         .required(t.validation.nameRequired)
//     }),
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         // API call to update profile
//         const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(values)
//         });
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         console.log('Profile updated successfully:', data);
//         // You might want to add a success notification here
//       } catch (error) {
//         console.error('Error updating profile:', error);
//         // You might want to add an error notification here
//       } finally {
//         setSubmitting(false);
//       }
//     }
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className={`shadow w-full sm:w-[450px]  ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}>
      
//       <div className='bg-yellow-500 rounded-full'>
//         <img src={logo} className='size-[125px]' alt="Profile" />
//       </div>
      
//       <div className={`flex gap-[20px] w-full justify-center`}>
//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
//             {t.emailLabel}
//           </p>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             placeholder={t.emailPlaceholder}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}
//               ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <div className={`text-red-500 text-xs ${isArabic ? 'text-right' : 'text-left'}`}>
//               {formik.errors.email}
//             </div>
//           ) : null}
//         </div>

//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>
//             {t.nameLabel}
//           </p>
//           <input
//             id="fullName"
//             name="fullName"
//             type="text"
//             placeholder={t.namePlaceholder}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.fullName}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}
//               ${formik.touched.fullName && formik.errors.fullName ? 'border-red-500' : ''}`}
//           />
//           {formik.touched.fullName && formik.errors.fullName ? (
//             <div className={`text-red-500 text-xs ${isArabic ? 'text-right' : 'text-left'}`}>
//               {formik.errors.fullName}
//             </div>
//           ) : null}
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={formik.isSubmitting}
//         className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//           h-[50.1px] xs:w-[200px] w-[350px] text-white
//           flex justify-center items-center shadow-lg cursor-pointer rounded-xl
//           ${formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
//       >
//         {formik.isSubmitting ? (
//           <span>{isArabic ? 'جاري الحفظ...' : 'Saving...'}</span>
//         ) : (
//           t.saveBtn
//         )}
//       </button>
//     </form>
//   );
// }



// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//   const fetchProfileData = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Accept': 'application/json',
//         },
//         credentials: 'include'
//       });
      
//       const data = await response.json();
      
//       if (data.code === 'unauthenticated') {
//         window.location.href = '/login';
//         return;
//       }
      
//       if (data.code === 'success') {
//         setProfileData(data.data);
//       } else {
//         setError(data.message || 'Failed to fetch profile data');
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProfileData();
// }, []);

//   const texts = {
//     en: {
//       emailLabel: "Email",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "Full Name",
//       namePlaceholder: "John Doe",
//       saveBtn: "Save"
//     },
//     ar: {
//       emailLabel: "البريد الالكتروني",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "الاسم كامل",
//       namePlaceholder: "محمد أحمد",
//       saveBtn: "حفظ"
//     }
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   if (loading) {
//     return (
//       <div className={`shadow w-full sm:w-[450px] ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//         p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}>
//         <div className="animate-pulse bg-gray-300 rounded-full h-[125px] w-[125px]"></div>
//         <div className="w-full space-y-4">
//           <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2"></div>
//           <div className="animate-pulse h-12 bg-gray-300 rounded"></div>
//           <div className="animate-pulse h-4 bg-gray-300 rounded w-1/2"></div>
//           <div className="animate-pulse h-12 bg-gray-300 rounded"></div>
//         </div>
//         <div className="animate-pulse h-12 bg-gray-300 rounded w-full max-w-[350px]"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className={`shadow w-full sm:w-[450px] ${darkMode ? 'shadow-gray-700 bg-gray-800 text-red-300' : 'shadow-gray-300 bg-white text-red-500'} 
//         p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className={`shadow w-full sm:w-[450px]  ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[50px] flex flex-col items-center rounded-xl`}>
      
//       <div className='bg-yellow-500 rounded-full'>
//         {profileData?.image ? (
//           <img src={profileData.image} className='size-[125px] rounded-full object-cover' alt="Profile" />
//         ) : (
//           <img src={logo} className='size-[125px]' alt="Default" />
//         )}
//       </div>
      
//       <div className={`flex gap-[20px] w-full justify-center`}>
//         <div className={`flex flex-col gap-[2px]  ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-400'}`}>
//             {t.emailLabel}
//           </p>
//           <input
//             type="email"
//             value={profileData?.email || ''}
//             placeholder={t.emailPlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//             readOnly
//           />
//         </div>

//         <div className={`flex flex-col gap-[2px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//           <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>
//             {t.nameLabel}
//           </p>
//           <input
//             type="text"
//             value={profileData?.name || ''}
//             placeholder={t.namePlaceholder}
//             className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//               w-full h-[53px] px-[10px] rounded-xl gap-[10px] cursor-pointer text-sm font-semibold
//               ${isArabic ? 'text-end' : 'text-start'}`}
//             readOnly
//           />
//         </div>
//       </div>

//       <div className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//         h-[50.1px] xs:w-[200px] w-[350px] text-white
//         flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
//         {t.saveBtn}
//       </div>
//     </div>
//   );
// };

// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: { name: '' }
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState('');

//   const texts = {
//     en: {
//       emailLabel: "Email",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "Full Name",
//       namePlaceholder: "John Doe",
//       phoneLabel: "Phone",
//       phonePlaceholder: "0123456789",
//       cityLabel: "City",
//       cityPlaceholder: "Cairo",
//       saveBtn: "Save",
//       saved: "Saved successfully!",
//     },
//     ar: {
//       emailLabel: "البريد الالكتروني",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "الاسم كامل",
//       namePlaceholder: "محمد أحمد",
//       phoneLabel: "رقم الهاتف",
//       phonePlaceholder: "0123456789",
//       cityLabel: "المدينة",
//       cityPlaceholder: "القاهرة",
//       saveBtn: "حفظ",
//       saved: "تم الحفظ بنجاح!",
//     }
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json',
//           },
//           credentials: 'include'
//         });

//         const data = await response.json();

//         if (data.code === 'unauthenticated') {
//           window.location.href = '/login';
//           return;
//         }

//         if (data.code === 'success') {
//           setProfileData(data.data);
//         } else {
//           setError(data.message || 'Failed to fetch profile data');
//         }
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleChange = (field, value) => {
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     setValidationErrors({ ...validationErrors, [field]: null });
//   };

//   const handleSubmit = async () => {
//     setSuccessMsg('');
//     setValidationErrors({});
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//           name: profileData.name,
//           email: profileData.email,
//           phone: profileData.phone,
//         }),
//       });

//       const data = await response.json();

//       if (data.code === 'success') {
//         setSuccessMsg(t.saved);
//       } else if (data.code === 'validation_error') {
//         setValidationErrors(data.errors);
//       } else {
//         setError(data.message || 'Unknown error');
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const InputField = ({ label, value, placeholder, field }) => (
//     <div className={`flex flex-col gap-[4px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//       <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>{label}</p>
//       <input
//         value={value || ''}
//         placeholder={placeholder}
//         onChange={(e) => handleChange(field, e.target.value)}
//         className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//           w-full h-[53px] px-[10px] rounded-xl text-sm font-semibold
//           ${isArabic ? 'text-end' : 'text-start'}`}
//       />
//       {validationErrors[field] && (
//         <p className="text-red-500 text-xs">{validationErrors[field][0]}</p>
//       )}
//     </div>
//   );

//   if (loading) {
//     return <div className="text-center">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className={`shadow w-full sm:w-[450px] ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[30px] flex flex-col items-center rounded-xl`}>

//       <div className='bg-yellow-500 rounded-full'>
//         <img
//           src={profileData?.image || logo}
//           alt="Profile"
//           className='size-[125px] rounded-full object-cover'
//         />
//       </div>

//       <div className={`flex flex-col gap-[15px] w-full items-center`}>
//         <InputField
//           label={t.nameLabel}
//           value={profileData.name}
//           placeholder={t.namePlaceholder}
//           field="name"
//         />
//         <InputField
//           label={t.emailLabel}
//           value={profileData.email}
//           placeholder={t.emailPlaceholder}
//           field="email"
//         />
//         <InputField
//           label={t.phoneLabel}
//           value={profileData.phone}
//           placeholder={t.phonePlaceholder}
//           field="phone"
//         />
//         <InputField
//           label={t.cityLabel}
//           value={profileData?.city?.name}
//           placeholder={t.cityPlaceholder}
//           field="city"
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//         h-[50.1px] xs:w-[200px] w-[350px] text-white
//         flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
//         {t.saveBtn}
//       </button>

//       {successMsg && (
//         <p className="text-green-500 text-sm mt-2">{successMsg}</p>
//       )}
//     </div>
//   );
// }


// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: { name: '' }
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState('');

//   const texts = {
//     en: {
//       emailLabel: "Email",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "Full Name",
//       namePlaceholder: "John Doe",
//       phoneLabel: "Phone",
//       phonePlaceholder: "0123456789",
//       cityLabel: "City",
//       cityPlaceholder: "Cairo",
//       saveBtn: "Save",
//       saved: "Saved successfully!",
//     },
//     ar: {
//       emailLabel: "البريد الالكتروني",
//       emailPlaceholder: "example@gmail.com",
//       nameLabel: "الاسم كامل",
//       namePlaceholder: "محمد أحمد",
//       phoneLabel: "رقم الهاتف",
//       phonePlaceholder: "0123456789",
//       cityLabel: "المدينة",
//       cityPlaceholder: "القاهرة",
//       saveBtn: "حفظ",
//       saved: "تم الحفظ بنجاح!",
//     }
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         console.log('Starting fetchProfileData...');
//         const token = localStorage.getItem('authToken');
//         console.log('Auth Token:', token ? 'Token exists' : 'No token found');

//         if (!token) {
//           console.warn('No auth token, redirecting to login');
//           window.location.href = '/login';
//           return;
//         }

//         console.log('Fetching profile data from API...');
//         const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json',
//           },
//           credentials: 'include'
//         });

//         console.log('Response status:', response.status);
//         console.log('Response headers:', [...response.headers.entries()]);

//         const data = await response.json();
//         console.log('API Response data:', data);

//         if (data.code === 'unauthenticated') {
//           console.warn('Unauthenticated response, redirecting to login');
//           window.location.href = '/login';
//           return;
//         }

//         if (data.code === 'success') {
//           console.log('Profile data fetched successfully:', data.data);
//           setProfileData(data.data);
//         } else {
//           console.error('API error:', data.message || 'Failed to fetch profile data');
//           setError(data.message || 'Failed to fetch profile data');
//         }
//       } catch (err) {
//         console.error('Fetch error:', err.message, err.stack);
//         setError(err.message);
//       } finally {
//         console.log('Fetch completed, setting loading to false');
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleChange = (field, value) => {
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     setValidationErrors({ ...validationErrors, [field]: null });
//   };

//   const handleSubmit = async () => {
//     setSuccessMsg('');
//     setValidationErrors({});
//     try {
//       console.log('Starting handleSubmit...');
//       const token = localStorage.getItem('authToken');
//       console.log('Auth Token for submit:', token ? 'Token exists' : 'No token found');

//       if (!token) {
//         console.warn('No auth token for submit, redirecting to login');
//         window.location.href = '/login';
//         return;
//       }

//       const payload = {
//         name: profileData.name,
//         email: profileData.email,
//         phone: profileData.phone,
//       };
//       console.log('Submitting payload:', payload);

//       const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/profile', {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       console.log('Submit response status:', response.status);
//       console.log('Submit response headers:', [...response.headers.entries()]);

//       const data = await response.json();
//       console.log('Submit API response data:', data);

//       if (data.code === 'success') {
//         console.log('Profile updated successfully');
//         setSuccessMsg(t.saved);
//       } else if (data.code === 'validation_error') {
//         console.warn('Validation errors:', data.errors);
//         setValidationErrors(data.errors);
//       } else {
//         console.error('Submit API error:', data.message || 'Unknown error');
//         setError(data.message || 'Unknown error');
//       }
//     } catch (err) {
//       console.error('Submit error:', err.message, err.stack);
//       setError(err.message);
//     }
//   };

//   const InputField = ({ label, value, placeholder, field }) => (
//     <div className={`flex flex-col gap-[4px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//       <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>{label}</p>
//       <input
//         value={value || ''}
//         placeholder={placeholder}
//         onChange={(e) => handleChange(field, e.target.value)}
//         className={`border ${darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-200 text-[#374957]'}
//           w-full h-[53px] px-[10px] rounded-xl text-sm font-semibold
//           ${isArabic ? 'text-end' : 'text-start'}`}
//       />
//       {validationErrors[field] && (
//         <p className="text-red-500 text-xs">{validationErrors[field][0]}</p>
//       )}
//     </div>
//   );

//   if (loading) {
//     return <div className="text-center">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className={`shadow w-full sm:w-[450px] ${darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'} 
//       p-[20px] xs:p-2 gap-[30px] flex flex-col items-center rounded-xl`}>

//       <div className='bg-yellow-500 rounded-full'>
//         <img
//           src={profileData?.image || logo}
//           alt="Profile"
//           className='size-[125px] rounded-full object-cover'
//         />
//       </div>

//       <div className={`flex flex-col gap-[15px] w-full items-center`}>
//         <InputField
//           label={t.nameLabel}
//           value={profileData.name}
//           placeholder={t.namePlaceholder}
//           field="name"
//         />
//         <InputField
//           label={t.emailLabel}
//           value={profileData.email}
//           placeholder={t.emailPlaceholder}
//           field="email"
//         />
//         <InputField
//           label={t.phoneLabel}
//           value={profileData.phone}
//           placeholder={t.phonePlaceholder}
//           field="phone"
//         />
//         <InputField
//           label={t.cityLabel}
//           value={profileData?.city?.name}
//           placeholder={t.cityPlaceholder}
//           field="city"
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className={`bg-[#7367F0] hover:bg-[#5d52d6] transition-colors
//         h-[50.1px] xs:w-[200px] w-[350px] text-white
//         flex justify-center items-center shadow-lg cursor-pointer rounded-xl`}>
//         {t.saveBtn}
//       </button>

//       {successMsg && (
//         <p className="text-green-500 text-sm mt-2">{successMsg}</p>
//       )}
//     </div>
//   );
// }



// import React, { useContext, useEffect, useState } from 'react';
// import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
// import { Darkmood, languageContext } from '../pages/Home';

// export default function Portofoilo() {
//   const { darkMode } = useContext(Darkmood);
//   const { language } = useContext(languageContext);

//   const [profileData, setProfileData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     city: { name: '' },
//     image: ''
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [successMsg, setSuccessMsg] = useState('');

//   const API_BASE_PATH = '/api';

//   const texts = {
//     en: {
//       emailLabel: 'Email',
//       emailPlaceholder: 'example@gmail.com',
//       nameLabel: 'Full Name',
//       namePlaceholder: 'John Doe',
//       phoneLabel: 'Phone',
//       phonePlaceholder: '0123456789',
//       cityLabel: 'City',
//       cityPlaceholder: 'Cairo',
//       saveBtn: 'Save',
//       saved: 'Saved successfully!',
//     },
//     ar: {
//       emailLabel: 'البريد الالكتروني',
//       emailPlaceholder: 'example@gmail.com',
//       nameLabel: 'الاسم كامل',
//       namePlaceholder: 'محمد أحمد',
//       phoneLabel: 'رقم الهاتف',
//       phonePlaceholder: '0123456789',
//       cityLabel: 'المدينة',
//       cityPlaceholder: 'القاهرة',
//       saveBtn: 'حفظ',
//       saved: 'تم الحفظ بنجاح!',
//     },
//   };

//   const t = texts[language] || texts.en;
//   const isArabic = language === 'ar';

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//           setError('مش لاقي توكن التحقق، سجل الدخول تاني.');
//           window.location.href = '/login';
//           return;
//         }

//         const url = `${API_BASE_PATH}/profile`;
//         const response = await fetch(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: 'application/json',
//           },
//           credentials: 'include',
//         });

//         if (!response.ok) {
//           throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
//         }

//         const data = await response.json();

//         if (data.code === 'unauthenticated') {
//           setError('الجلسة انتهت، سجل الدخول تاني.');
//           window.location.href = '/login';
//           return;
//         }

//         if (data.code === 'success') {
//           setProfileData(data.data);
//         } else {
//           setError(data.message || 'فشل جلب البيانات');
//         }
//       } catch (err) {
//         setError(
//           err.message.includes('Failed to fetch')
//             ? 'مش قادر أوصل للسيرفر، تفقد الإنترنت وجرب تاني.'
//             : err.message
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, []);

//   const handleChange = (field, value) => {
//     if (field === 'city') {
//       setProfileData((prev) => ({
//         ...prev,
//         city: { ...prev.city, name: value },
//       }));
//     } else {
//       setProfileData((prev) => ({
//         ...prev,
//         [field]: value,
//       }));
//     }

//     setValidationErrors((prev) => ({ ...prev, [field]: null }));
//   };

//   const handleSubmit = async () => {
//     setSuccessMsg('');
//     setValidationErrors({});
//     try {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setError('مش لاقي توكن التحقق، سجل الدخول تاني.');
//         window.location.href = '/login';
//         return;
//       }

//       const payload = {
//         name: profileData.name,
//         email: profileData.email,
//         phone: profileData.phone,
//       };

//     const response = await fetch(`${API_BASE_PATH}/profile`, {
//       method: 'PUT',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(payload),
//       credentials: 'include',
//     });

//     if (!response.ok) {
//       throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
//     }
//     const data = await response.json();

//       if (data.code === 'success') {
//         setSuccessMsg(t.saved);
//       } else if (data.code === 'validation_error') {
//         setValidationErrors(data.errors);
//       } else {
//         setError(data.message || 'خطأ غير معروف');
//       }
//     } catch (err) {
//       setError(
//         err.message.includes('Failed to fetch')
//           ? 'مش قادر أوصل للسيرفر، تفقد الإنترنت وجرب تاني.'
//           : err.message
//       );
//     }
//   };

//   const InputField = ({ label, value, placeholder, field }) => (
//     <div className={`flex flex-col gap-[4px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
//       <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>{label}</p>
//       <input
//         value={value || ''}
//         placeholder={placeholder}
//         onChange={(e) => handleChange(field, e.target.value)}
//         className={`border ${
//           darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-300 text-[#37474F]'
//         } w-full h-[53px] px-[10px] rounded-xl text-sm font-semibold ${isArabic ? 'text-end' : 'text-start'}`}
//       />
//       {validationErrors[field] && <p className="text-red-500 text-xs">{validationErrors[field][0]}</p>}
//     </div>
//   );

//   if (loading) {
//     return <div className="text-center">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div
//       className={`shadow w-full sm:w-[450px] ${
//         darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'
//       } p-[20px] xs:p-[2px] gap-[30px] flex flex-col items-center rounded-xl`}
//     >
//       <div className="bg-yellow-500 rounded-full">
//         <img
//           src={profileData?.image || logo}
//           alt="Profile"
//           className="size-[125px] rounded-full object-cover"
//         />
//       </div>

//       <div className="flex flex-col gap-[15px] w-full items-center">
//         <InputField
//           label={t.nameLabel}
//           value={profileData.name}
//           placeholder={t.namePlaceholder}
//           field="name"
//         />
//         <InputField
//           label={t.emailLabel}
//           value={profileData.email}
//           placeholder={t.emailPlaceholder}
//           field="email"
//         />
//         <InputField
//           label={t.phoneLabel}
//           value={profileData.phone}
//           placeholder={t.phonePlaceholder}
//           field="phone"
//         />
//         <InputField
//           label={t.cityLabel}
//           value={profileData.city?.name}
//           placeholder={t.cityPlaceholder}
//           field="city"
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="bg-[#7367F0] hover:bg-[#5d52d6] transition-colors h-[50.1px] xs:w-[200px] w-[350px] text-white flex justify-center items-center shadow-lg cursor-pointer rounded-xl"
//       >
//         {t.saveBtn}
//       </button>

//       {successMsg && <p className="text-green-500 text-sm mt-2">{successMsg}</p>}
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/WhatsApp_Image_2025-03-07_at_04.59.48_47734753-removebg-preview.png';
import { Darkmood, languageContext } from '../pages/Home';

export default function Portofoilo() {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    city: { name: '' },
    image: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const API_BASE_PATH = '/api';

  const texts = {
    en: {
      emailLabel: 'Email',
      emailPlaceholder: 'example@gmail.com',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      phoneLabel: 'Phone',
      phonePlaceholder: '0123456789',
      cityLabel: 'City',
      cityPlaceholder: 'Cairo',
      saveBtn: 'Save',
      saved: 'Saved successfully!',
    },
    ar: {
      emailLabel: 'البريد الالكتروني',
      emailPlaceholder: 'example@gmail.com',
      nameLabel: 'الاسم كامل',
      namePlaceholder: 'محمد أحمد',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '0123456789',
      cityLabel: 'المدينة',
      cityPlaceholder: 'القاهرة',
      saveBtn: 'حفظ',
      saved: 'تم الحفظ بنجاح!',
    },
  };

  const t = texts[language] || texts.en;
  const isArabic = language === 'ar';

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError('مش لاقي توكن التحقق، سجل الدخول تاني.');
          window.location.href = '/login';
          return;
        }

        const url = `${API_BASE_PATH}/profile`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
        }

        const data = await response.json();

        if (data.code === 'unauthenticated') {
          setError('الجلسة انتهت، سجل الدخول تاني.');
          window.location.href = '/login';
          return;
        }
        if (data.code === 'success') {
          setProfileData(data.data);
        } else {
          setError(data.message || 'فشل جلب البيانات');
        }
      } catch (err) {
        setError(
          err.message.includes('Failed to fetch')
            ? 'مش قادر أوصل للسيرفر، تفقد الإنترنت وجرب تاني.'
            : err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (field, value) => {
    if (field === 'city') {
      setProfileData((prev) => ({
        ...prev,
        city: { ...prev.city, name: value },
      }));
    } else {
      setProfileData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }

    setValidationErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleSubmit = async () => {
    setSuccessMsg('');
    setValidationErrors({});
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('مش لاقي توكن التحقق، سجل الدخول تاني.');
        window.location.href = '/login';
        return;
      }

      const payload = {
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
      };

      const response = await fetch(`${API_BASE_PATH}/profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
      }
      const data = await response.json();
      if (data.code === 'success') {
        setSuccessMsg(t.saved);
      } else if (data.code === 'validation_error') {
        setValidationErrors(data.errors);
      } else {
        setError(data.message || 'خطأ غير معروف');
      }
    } catch (err) {
      setError(
        err.message.includes('Failed to fetch')
          ? 'مش قادر أوصل للسيرفر، تفقد الإنترنت وجرب تاني.'
          : err.message
      );
    }
  };

  const InputField = ({ label, value, placeholder, field }) => (
    <div className={`flex flex-col gap-[4px] ${isArabic ? 'items-end' : 'items-start'} w-full max-w-[350px]`}>
      <p className={darkMode ? 'text-purple-300' : 'text-purple-400'}>{label}</p>
      <input
        value={value || ''}
        placeholder={placeholder}
        onChange={(e) => handleChange(field, e.target.value)}
        className={`border ${
          darkMode ? 'border-gray-600 bg-gray-700 text-gray-200' : 'border-gray-300 text-[#37474F]'
        } w-full h-[53px] px-[10px] rounded-xl text-sm font-semibold ${isArabic ? 'text-end' : 'text-start'}`}
      />
      {validationErrors[field] && <p className="text-red-500 text-xs">{validationErrors[field][0]}</p>}
    </div>
  );

  if (loading) {
    return <div className="text-center">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div
      className={`shadow w-full sm:w-[450px] ${
        darkMode ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-white'
      } p-[20px] xs:p-[2px] gap-[30px] flex flex-col items-center rounded-xl`}
    >
      <div className="bg-yellow-500 rounded-full">
        <img
          src={profileData?.image || logo}
          alt="Profile"
          className="size-[125px] rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-[15px] w-full items-center">
        <InputField
          label={t.nameLabel}
          value={profileData.name}
          placeholder={t.namePlaceholder}
          field="name"
        />
        <InputField
          label={t.emailLabel}
          value={profileData.email}
          placeholder={t.emailPlaceholder}
          field="email"
        />
        <InputField
          label={t.phoneLabel}
          value={profileData.phone}
          placeholder={t.phonePlaceholder}
          field="phone"
        />
        <InputField
          label={t.cityLabel}
          value={profileData.city?.name}
          placeholder={t.cityPlaceholder}
          field="city"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-[#7367F0] hover:bg-[#5d52d6] transition-colors h-[50.1px] xs:w-[200px] w-[350px] text-white flex justify-center items-center shadow-lg cursor-pointer rounded-xl"
      >
        {t.saveBtn}
      </button>

      {successMsg && <p className="text-green-500 text-sm mt-2">{successMsg}</p>}
    </div>
  );
}