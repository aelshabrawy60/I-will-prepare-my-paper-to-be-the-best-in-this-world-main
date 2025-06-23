import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/WhatsApp_Image_2025-03-06_at_02.43.51_836acc1b-removebg-preview.png';
import Button from './Button';
import { IoIosLock } from "react-icons/io";
import { Darkmood, languageContext } from '../pages/Home';

export default function Question_four({ bookingData, onPaymentSuccess }) {
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const currentLang = language || 'en';

  const translations = {
    en: {
      cardNumber: "Card Number",
      cardPlaceholder: "2412 - 7152 - 3412 - 3456",
      cvv: "CVV",
      cvvPlaceholder: "327",
      expiryDate: "Expiry Date",
      expiryMonthPlaceholder: "09",
      expiryYearPlaceholder: "09",
      submitError: "Payment failed",
      processingPayment: "Processing payment..."
    },
    ar: {
      cardNumber: "رقم البطاقة",
      cardPlaceholder: "٢٤١٢ - ٧١٥٢ - ٣٤١٢ - ٣٤٥٦",
      cvv: "الرمز السري",
      cvvPlaceholder: "٣٢٧",
      expiryDate: "تاريخ الانتهاء",
      expiryMonthPlaceholder: "٠٩",
      expiryYearPlaceholder: "٠٩",
      submitError: "فشل الدفع",
      processingPayment: "جاري معالجة الدفع..."
    }
  };

  const t = translations[currentLang];

  // Validation schema
  const validationSchema = Yup.object().shape({
    card_number: Yup.string()
      .required(currentLang === 'ar' ? 'رقم البطاقة مطلوب' : 'Card number is required')
      .matches(
        /^[0-9]{4} - [0-9]{4} - [0-9]{4} - [0-9]{4}$/,
        currentLang === 'ar' ? 'يجب أن يكون رقم البطاقة صالحًا' : 'Must be a valid card number'
      ),
    cvc: Yup.string()
      .required(currentLang === 'ar' ? 'CVV مطلوب' : 'CVV is required')
      .matches(/^[0-9]{3}$/, currentLang === 'ar' ? 'يجب أن يكون CVV صالحًا' : 'Must be a valid CVV'),
    exp_month: Yup.string()
      .required(currentLang === 'ar' ? 'شهر الانتهاء مطلوب' : 'Expiry month is required')
      .matches(/^(0[1-9]|1[0-2])$/, currentLang === 'ar' ? 'يجب أن يكون شهرًا صالحًا' : 'Must be a valid month'),
    exp_year: Yup.string()
      .required(currentLang === 'ar' ? 'سنة الانتهاء مطلوبة' : 'Expiry year is required')
      .matches(/^[0-9]{2}$/, currentLang === 'ar' ? 'يجب أن تكون سنة صالحة' : 'Must be a valid year')
  });

  const formik = useFormik({
    initialValues: {
      card_number: '',
      cvc: '',
      exp_month: '',
      exp_year: '',
      token: 'tok_visa', // Default test token
      booking_id: bookingData?.id || '',
      amount: bookingData?.total_price || 0
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setError(null);
      
      try {
        const authToken = localStorage.getItem('authToken');
        const formData = new FormData();
        
        // Append all form values
        Object.keys(values).forEach(key => {
          formData.append(key, values[key]);
        });

        const response = await fetch(
          'https://lawngreen-walrus-394451.hostingersite.com/api/payment',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${authToken}`
            },
            body: formData
          }
        );

        const data = await response.json();
        if (response.ok && data.code === 'success') {
          if (onPaymentSuccess) {
            onPaymentSuccess(data.data);
          }
        } else {
          throw new Error(data.message || t.submitError);
        }
      } catch (error) {
        setError(error.message);
        console.error('Payment error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`p-[100px] xs:p-[50px] xs:w-[270px] flex items-center flex-col gap-[20px] ${
      darkMode ? 'bg-gray-800' : ''
    }`}>
      <div>
        <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cardNumber}</p>
        <div className='relative'>
          <input
            name="card_number"
            value={formik.values.card_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t.cardPlaceholder}
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[354px] xs:w-[250px] pl-[50px] h-[57px] rounded-xl outline-none text-lg`}
            type="text"
          />
          <img src={logo} alt="card-logo" className='w-[36px] top-[18px] absolute h-[24px]' />
        </div>
        {formik.touched.card_number && formik.errors.card_number && (
          <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
            {formik.errors.card_number}
          </div>
        )}
      </div>

      <div className='flex w-full xs:justify-center xs:gap-[60px] justify-between items-center'>
        <div>
          <p className={`text-xl ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.cvv}</p>
          <input
            name="cvc"
            value={formik.values.cvc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={t.cvvPlaceholder}
            type='text'
            className={`border-[1px] ${
              darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
            } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
          />
          {formik.touched.cvc && formik.errors.cvc && (
            <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
              {formik.errors.cvc}
            </div>
          )}
        </div>

        <div className='flex flex-col items-center'>
          <p className={`text-xl font-normal ${darkMode ? 'text-gray-100' : 'text-[#393343]'}`}>{t.expiryDate}</p>
          <div className='flex gap-[5px]'>
            <input
              name="exp_month"
              value={formik.values.exp_month}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t.expiryMonthPlaceholder}
              type='text'
              className={`border-[1px] ${
                darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
              } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
            <p className={`text-2xl ${darkMode ? 'text-gray-300' : ''}`}>/</p>
            <input
              name="exp_year"
              value={formik.values.exp_year}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t.expiryYearPlaceholder}
              type='text'
              className={`border-[1px] ${
                darkMode ? 'border-gray-600 bg-gray-700 text-gray-300' : 'border-black text-[#D0CFCE]'
              } w-[59px] outline-none text-center h-[42px] rounded-xl text-lg`}
            />
          </div>
          {(formik.touched.exp_month || formik.touched.exp_year) && 
            (formik.errors.exp_month || formik.errors.exp_year) && (
              <div className={`text-sm mt-1 ${darkMode ? 'text-red-400' : 'text-red-500'}`}>
                {formik.errors.exp_month || formik.errors.exp_year}
              </div>
            )}
        </div>
      </div>

      {error && (
        <div className={`text-sm p-2 rounded w-full text-center ${
          darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-600'
        }`}>
          {error}
        </div>
      )}

      <div className='xs:w-[270px]'>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? t.processingPayment : 'Pay Now'}
        </Button>
      </div>
    </form>
  );
}
