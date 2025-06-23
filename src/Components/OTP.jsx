import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import otpImage from "../assets/otp.png";
import loginImage from "../assets/image.png";
import { languageContext } from "../pages/Home";

const OTP = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { language } = useContext(languageContext);
  const [time, setTime] = useState(90);
  const [otp, setOtp] = useState(["", "", "", ""]);

  // النصوص للغتين
  const texts = {
    en: {
      otpVerification: "OTP Verification",
      sentCode: "We've sent a code to Example@gmail.com",
      otpCode: "OTP Code",
      resendCode: "Resend Code to",
      resendNow: "Resend Now",
      verify: "Verify",
    },
    ar: {
      otpVerification: "التحقق من رمز التحقق",
      sentCode: "تم إرسال رمز إلى Example@gmail.com",
      otpCode: "رمز التحقق",
      resendCode: "إعادة إرسال الرمز إلى",
      resendNow: "أعد الإرسال الآن",
      verify: "تأكيد",
    },
  };

  const langTexts = texts[language] || texts.en;

  const handleVerify = () => {
    navigate("/changepass");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (time === 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`min-h-screen ${darkMode ? "bg-[#181929] text-gray-100" : "bg-[#F1F0FE] text-gray-800"}`}
    >
      
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
      
        <div className="hidden lg:flex lg:w-1/2 h-full">
          <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

       
        <div className="w-full min-h-[80vh] py-20 lg:py-20 lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? "bg-[#262832]" : "bg-[#F1F0FE]"}`}>
           
            <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
              {langTexts.otpVerification}
            </h2>

            <p className={`text-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              {langTexts.sentCode}
            </p>

            <div className="flex justify-center mb-6">
              <img src={otpImage} alt="OTP Verification" className="object-contain" />
            </div>

          
            <p className={`text-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{langTexts.otpCode}</p>

           
            <div className="flex justify-self-center mb-8 space-x-7">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-input-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  maxLength="1"
                  className={`w-10 h-12 text-2xl text-center rounded-lg border-2 ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white focus:border-[#7B61FF]"
                      : "bg-white border-gray-300 focus:border-[#7B61FF]"
                  } focus:outline-none`}
                />
              ))}
            </div>

          
            <div className={`flex justify-center items-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <p className="mr-12">{langTexts.resendCode}</p>
              <div
                className={`font-medium ${
                  time > 0 ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-[#7B61FF] cursor-pointer"
                }`}
              >
                {time > 0 ? (
                  `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
                ) : (
                  <span onClick={() => setTime(90)}>{langTexts.resendNow}</span>
                )}
              </div>
            </div>

         
            <button
              type="button"
              onClick={handleVerify}
              className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md"
            >
              {langTexts.verify}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;


// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import otpImage from "../assets/otp.png";
// import loginImage from "../assets/image.png";
// import { languageContext } from "../pages/Home";

// const OTP = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();
//   const { language } = useContext(languageContext);
//   const [time, setTime] = useState(90);

//   const texts = {
//     en: {
//       otpVerification: "OTP Verification",
//       sentCode: "We've sent a code to Example@gmail.com",
//       otpCode: "OTP Code",
//       resendCode: "Resend Code to",
//       resendNow: "Resend Now",
//       verify: "Verify",
//       invalidOtp: "OTP must be 4 digits.",
//       errorMsg: "Invalid OTP. Please try again.",
//     },
//     ar: {
//       otpVerification: "التحقق من رمز التحقق",
//       sentCode: "تم إرسال رمز إلى Example@gmail.com",
//       otpCode: "رمز التحقق",
//       resendCode: "إعادة إرسال الرمز إلى",
//       resendNow: "أعد الإرسال الآن",
//       verify: "تأكيد",
//       invalidOtp: "رمز التحقق يجب أن يكون 4 أرقام.",
//       errorMsg: "رمز غير صحيح، حاول مرة أخرى.",
//     },
//   };

//   const langTexts = texts[language] || texts.en;

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     if (time === 0) return;
//     const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
//     return () => clearInterval(interval);
//   }, [time]);

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   const formik = useFormik({
//     initialValues: {
//       otp: ["", "", "", ""],
//     },
//     validationSchema: Yup.object({
//       otp: Yup.array()
//         .of(Yup.string().matches(/^[0-9]$/, "Must be a digit"))
//         .length(4)
//         .test("complete", langTexts, (arr) => arr.every((val) => val !== "")),
//     }),
//     onSubmit: async (values, { setSubmitting, setErrors }) => {
//       const code = values.otp.join("");
//       try {
//         const response = await fetch("https://lawngreen-walrus-394451.hostingersite.com/api/validate-otp", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ otp: code }),
//         });

//         const data = await response.json();

//         if (response.ok && data.success) {
//           navigate("/changepass");
//         } else {
//           setErrors({ otp:  langTexts});
//         }
//       } catch (err) {
//         setErrors({ otp: langTexts });
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   const handleChange = (e, index) => {
//     const value = e.target.value;
//     if (/[^0-9]/.test(value)) return;
//     const otpArray = [...formik.values.otp];
//     otpArray[index] = value;
//     formik.setFieldValue("otp", otpArray);

//     if (value && index < 3) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//   };

//   return (
//     <div dir={language === "ar" ? "rtl" : "ltr"} className={`min-h-screen ${darkMode ? "bg-[#181929] text-gray-100" : "bg-[#F1F0FE] text-gray-800"}`}>
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
//       >
//         {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//       </button>

//       <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
//         <div className="hidden lg:flex lg:w-1/2 h-full">
//           <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
//         </div>

//         <div className="w-full min-h-[80vh] py-20 lg:py-20 lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
//           <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? "bg-[#262832]" : "bg-[#F1F0FE]"}`}>
//             <h2 className={`text-3xl font-bold mb-2 text-center ${darkMode ? "text-white" : "text-gray-800"}`}>
//               {langTexts.otpVerification}
//             </h2>

//             <p className={`text-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//               {langTexts.sentCode}
//             </p>

//             <div className="flex justify-center mb-6">
//               <img src={otpImage} alt="OTP Verification" className="object-contain" />
//             </div>

//             <p className={`text-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//               {langTexts.otpCode}
//             </p>

//             <form onSubmit={formik.handleSubmit}>
//               <div className="flex justify-center mb-4 space-x-4 rtl:space-x-reverse">
//                 {formik.values.otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`otp-input-${index}`}
//                     type="text"
//                     maxLength="1"
//                     value={digit}
//                     onChange={(e) => handleChange(e, index)}
//                     className={`w-10 h-12 text-2xl text-center rounded-lg border-2 ${
//                       darkMode
//                         ? "bg-[#2E2F3E] border-[#2E2F3E] text-white focus:border-[#7B61FF]"
//                         : "bg-white border-gray-300 focus:border-[#7B61FF]"
//                     } focus:outline-none`}
//                   />
//                 ))}
//               </div>

//               {formik.errors.otp && (
//                 <div className="text-red-500 text-center text-sm mb-4">{formik.errors.otp}</div>
//               )}

//               <div className={`flex justify-center items-center mb-8 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                 <p className="mr-12">{langTexts.resendCode}</p>
//                 <div
//                   className={`font-medium ${
//                     time > 0 ? (darkMode ? "text-gray-400" : "text-gray-600") : "text-[#7B61FF] cursor-pointer"
//                   }`}
//                 >
//                   {time > 0 ? (
//                     `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
//                   ) : (
//                     <span onClick={() => setTime(90)}>{langTexts.resendNow}</span>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={formik.isSubmitting}
//                 className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md"
//               >
//                 {langTexts.verify}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTP;
