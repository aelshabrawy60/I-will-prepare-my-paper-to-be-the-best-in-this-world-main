// import React from 'react'

// export default function register() {
//   return (
//     <div>register</div>
//   )
// }

// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import registerImage from "../assets/image.png";
// import logoImage from "../assets/Sekka Logo.png";
// import GoogleImage from "../assets/google.png";

// const Register = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-[#181929] text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
//       >
//         {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//       </button>

//       <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
//         {/* Image Section - Hidden on mobile */}
//         <div className="hidden lg:flex lg:w-1/2 h-full">
//           <img 
//             src={registerImage} 
//             alt="Register Illustration" 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
//           <div className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-' : 'bg-'}`}>
//             {/* Logo */}
//             <div className="flex justify-center mb-8">
//               <img 
//                 src={logoImage} 
//                 alt="Logo" 
//                 className="h-24 object-contain"
//               />
//             </div>

//             {/* Title */}
//             <h2 className={`text-3xl font-bold-300  mb-8 text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>
//               Register
//             </h2>

//             {/* Name Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="username"
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'}`}
//                   placeholder="Name"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"></path>
//                     <path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             {/* Email Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="Email"
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'}`}
//                   placeholder="Email"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="currentColor"></path>
//                     <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   id="password"
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'}`}
//                   placeholder="Password"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="currentColor"></path>
//                     <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//                 <span
//                   className="absolute right-4 top-4 cursor-pointer text-gray-500"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>
//             </div>

//             {/* Confirm Password Field */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   id="confirmPassword"
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'}`}
//                   placeholder="Confirm Password"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="currentColor"></path>
//                     <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//                 <span
//                   className="absolute right-4 top-4 cursor-pointer text-gray-500"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>
//             </div>

//             {/* Register Button */}
//             <button 
//               type="submit" 
//               className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md mb-6"
//             >
//               Register
//             </button>

//             {/* Login Link */}
//             <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               Do You Have an account?{" "}
//               <Link 
//                 to="/login"
//                 className="text-[#7B61FF] underline hover:text-[#6a50e6] font-medium"
//               >
//                 Login
//               </Link>
//             </p>

//             {/* Google Button */}
//             <button 
//               type="button"
//               className={`w-full flex items-center justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} transition duration-200`}
//             >
//               <img src={GoogleImage} alt="Google Logo" className="h-5 w-5 mr-2" />
//               <span>Google</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import registerImage from "../assets/image.png";
// import logoImage from "../assets/Sekka Logo.png";
// import GoogleImage from "../assets/google.png";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password_confirmation: ""
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrors({});

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, formData);
      
//       // Handle successful registration
//       console.log("Registration successful:", response.data);
      
//       // Store token if needed
//       if (response.data.data.token) {
//         localStorage.setItem('authToken', response.data.data.token);
//       }
      
//       // Redirect user
//       navigate('/profile');
//     } catch (error) {
//       if (error.response && error.response.status === 422) {
//         // Handle validation errors
//         setErrors(error.response.data.errors || {});
//       } else {
//         // Handle other errors
//         console.error("Registration error:", error);
//         setErrors({ general: "An error occurred during registration. Please try again." });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-[#181929] text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
//       >
//         {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
//       </button>

//       <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
//         {/* Image Section - Hidden on mobile */}
//         <div className="hidden lg:flex lg:w-1/2 h-full">
//           <img 
//             src={registerImage} 
//             alt="Register Illustration" 
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
//           <form onSubmit={handleSubmit} className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-' : 'bg-'}`}>
//             {/* Logo */}
//             <div className="flex justify-center mb-8">
//               <img 
//                 src={logoImage} 
//                 alt="Logo" 
//                 className="h-24 object-contain"
//               />
//             </div>

//             {/* Title */}
//             <h2 className={`text-3xl font-bold-300 mb-8 text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>
//               Register
//             </h2>

//             {/* Display general errors */}
//             {errors.general && (
//               <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                 {errors.general}
//               </div>
//             )}

//             {/* Name Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'} ${errors.name ? 'border-red-500' : ''}`}
//                   placeholder="Name"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="currentColor"></path>
//                     <path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//               </div>
//               {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
//             </div>

//             {/* Email Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'} ${errors.email ? 'border-red-500' : ''}`}
//                   placeholder="Email"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path opacity="0.4" d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z" fill="currentColor"></path>
//                     <path d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//               </div>
//               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
//             </div>

//             {/* Password Field */}
//             <div className="mb-6 relative">
//               <div className="relative">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'} ${errors.password ? 'border-red-500' : ''}`}
//                   placeholder="Password"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="currentColor"></path>
//                     <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//                 <span
//                   className="absolute right-4 top-4 cursor-pointer text-gray-500"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>
//               {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>}
//             </div>

//             {/* Confirm Password Field */}
//             <div className="mb-8 relative">
//               <div className="relative">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   id="password_confirmation"
//                   name="password_confirmation"
//                   value={formData.password_confirmation}
//                   onChange={handleChange}
//                   className={`w-full p-4 pl-12 rounded-lg border ${darkMode ? 'bg-[#2E2F3E] border-[#2E2F3E] text-white' : 'bg-white border-gray-300'} ${errors.password_confirmation ? 'border-red-500' : ''}`}
//                   placeholder="Confirm Password"
//                   required
//                 />
//                 <span className={`absolute left-4 top-4 text-[#7B61FF]`}>
//                   <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="currentColor"></path>
//                     <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="currentColor"></path>
//                   </svg>
//                 </span>
//                 <span
//                   className="absolute right-4 top-4 cursor-pointer text-gray-500"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>
//               {errors.password_confirmation && <p className="text-red-500 text-sm mt-1">{errors.password_confirmation[0]}</p>}
//             </div>

//             {/* Register Button */}
//             <button 
//               type="submit" 
//               className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md mb-6 disabled:opacity-50"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Registering...' : 'Register'}
//             </button>

//             {/* Login Link */}
//             <p className={`text-center mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               Do You Have an account?{" "}
//               <Link 
//                 to="/login"
//                 className="text-[#7B61FF] underline hover:text-[#6a50e6] font-medium"
//               >
//                 Login
//               </Link>
//             </p>

//             {/* Google Button */}
//             <button 
//               type="button"
//               className={`w-full flex items-center justify-center py-3 px-4 rounded-lg border ${darkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} transition duration-200`}
//             >
//               <img src={GoogleImage} alt="Google Logo" className="h-5 w-5 mr-2" />
//               <span>Google</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import registerImage from "../assets/image.png";
import logoImage from "../assets/Sekka Logo.png";
import GoogleImage from "../assets/google.png";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Form validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain uppercase, lowercase, number and special character"
      ),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Formik initialization
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `https://lawngreen-walrus-394451.hostingersite.com/api/register`,
          values
        );

        // Store token and redirect
        if (response.data.data.token) {
          localStorage.setItem("authToken", response.data.data.token);
          navigate("/");
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          // Convert Laravel validation errors to Formik format
          const errors = error.response.data.errors || {};
          const formattedErrors = {};
          Object.keys(errors).forEach((key) => {
            formattedErrors[key] = errors[key][0];
          });
          formik.setErrors(formattedErrors);
        } else {
          formik.setErrors({
            general: "An error occurred during registration. Please try again.",
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#181929] text-gray-100" : "bg-[#F1F0FE] text-gray-800"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-[#7B61FF] text-white shadow-lg z-10"
      >
        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {/* Image Section - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 h-full">
          <img
            src={registerImage}
            alt="Register Illustration"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <form
            onSubmit={formik.handleSubmit}
            className={`w-full max-w-md p-8 rounded-2xl shadow-xl ${
              darkMode ? "bg-[#2E2F3E]" : "bg-white"
            }`}
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={logoImage}
                alt="Logo"
                className="h-24 object-contain"
              />
            </div>

            {/* Title */}
            <h2
              className={`text-3xl font-bold mb-8 text-left ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Register
            </h2>

            {/* Display general errors */}
            {formik.errors.general && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {formik.errors.general}
              </div>
            )}

            {/* Name Field */}
            <div className="mb-6 relative">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-4 pl-12 rounded-lg border ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white"
                      : "bg-white border-gray-300"
                  } ${
                    formik.touched.name && formik.errors.name
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Name"
                />
                <span className="absolute left-4 top-4 text-[#7B61FF]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>


            {/* Email Field */}
            <div className="mb-6 relative">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-4 pl-12 rounded-lg border ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white"
                      : "bg-white border-gray-300"
                  } ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Email"
                />
                <span className="absolute left-4 top-4 text-[#7B61FF]">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M22.5061 16.1243C22.5061 18.7966 20.2935 20.9612 17.5375 20.9708H17.5276H7.73843C4.99232 20.9708 2.75 18.8157 2.75 16.1434V16.1339C2.75 16.1339 2.75593 11.8946 2.76383 9.76246C2.76482 9.36209 3.23896 9.13796 3.56198 9.38699C5.90901 11.1925 10.1062 14.4845 10.1586 14.5276C10.8599 15.0726 11.7489 15.3801 12.6577 15.3801C13.5665 15.3801 14.4555 15.0726 15.1569 14.5171C15.2092 14.4835 19.3126 11.2902 21.6952 9.455C22.0191 9.20501 22.4953 9.42914 22.4963 9.82855C22.5061 11.9444 22.5061 16.1243 22.5061 16.1243Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21.9887 6.29069C21.1332 4.72754 19.45 3.72949 17.5969 3.72949H7.73858C5.88546 3.72949 4.20223 4.72754 3.34679 6.29069C3.15516 6.6403 3.24604 7.0761 3.5651 7.32322L10.8996 13.0117C11.4132 13.414 12.0355 13.6142 12.6579 13.6142C12.6618 13.6142 12.6648 13.6142 12.6677 13.6142C12.6707 13.6142 12.6747 13.6142 12.6776 13.6142C13.2999 13.6142 13.9223 13.414 14.4359 13.0117L21.7704 7.32322C22.0894 7.0761 22.1803 6.6403 21.9887 6.29069Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>


            {/* Password Field */}
            <div className="mb-6 relative">
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-4 pl-12 rounded-lg border ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white"
                      : "bg-white border-gray-300"
                  } ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Password"
                />
                <span className="absolute left-4 top-4 text-[#7B61FF]">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span
                  className="absolute right-4 top-4 cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </p>
              )}
            </div>


            {/* Confirm Password Field */}
            <div className="mb-8 relative">
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full p-4 pl-12 rounded-lg border ${
                    darkMode
                      ? "bg-[#2E2F3E] border-[#2E2F3E] text-white"
                      : "bg-white border-gray-300"
                  } ${
                    formik.touched.password_confirmation &&
                    formik.errors.password_confirmation
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Confirm Password"
                />
                <span className="absolute left-4 top-4 text-[#7B61FF]">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span
                  className="absolute right-4 top-4 cursor-pointer text-gray-500"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {formik.touched.password_confirmation &&
                formik.errors.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password_confirmation}
                  </p>
                )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md mb-6 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>

            {/* Login Link */}
            <p
              className={`text-center mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Do You Have an account?{" "}
              <Link
                to="/login"
                className="text-[#7B61FF] underline hover:text-[#6a50e6] font-medium"
              >
                Login
              </Link>
            </p>


            {/* Google Button */}
            <button
              type="button"
              className={`w-full flex items-center justify-center py-3 px-4 rounded-lg border ${
                darkMode
                  ? "border-gray-600 hover:bg-gray-700"
                  : "border-gray-300 hover:bg-gray-50"
              } transition duration-200`}
            >
              <img
                src={GoogleImage}
                alt="Google Logo"
                className="h-5 w-5 mr-2"
              />
              <span>Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
