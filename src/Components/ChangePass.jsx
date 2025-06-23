import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TbXboxXFilled } from "react-icons/tb";
import registerImage from "../assets/image.png";
import sekkaLogo from "../assets/Sekka Logo.png";
import successIcon from "../assets/correct-icon.png";
import { FiSun, FiMoon } from "react-icons/fi";

const ChangePass = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const redirectToLogin = () => navigate("/login");

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>

      <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
        {showSuccessMessage ? (
          <div className="flex flex-col lg:flex-row w-full">
            {/* Image Section */}
            <div className="hidden lg:flex lg:w-1/2 ">
              <img 
                src={registerImage} 
                alt="Register Illustration" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Success Message Section */}
            <div className={`w-full min-h-[90vh] lg:w-1/2 flex items-center justify-center p-8 ${darkMode ? '' : 'bg-[#F1F0FE]'}`}>
              <form className={`w-full  max-w-md p-8 rounded-2xl shadow-lg ${darkMode ? '' : 'bg-[#F1F0FE]'}`}>
                <div className="flex justify-center mb-10">
                  <img 
                    src={sekkaLogo} 
                    alt="Sekka Logo" 
                    className=" object-contain  mb-1" 
                  />
                </div>
                <h2 className="text-3xl font-semibold mb-20 text-center">Reset Password</h2>
                <div className="text-center">
                  <div className="flex justify-center mb-10">
                    <img src={successIcon} alt="Success" className="h-27 w-24" />
                  </div>
                  <p className="mb-6 text-lg">Password has been changed successfully</p>
                  <button 
                    onClick={redirectToLogin}
                    className="w-full mb-20 h-14 bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row w-full">
            {/* Image Section */}
            <div className="hidden lg:flex w-1/2 h-full">
              <img 
                src={registerImage} 
                alt="Register Illustration" 
                className="h-full w-full object-cover" 
              />
            </div>

            {/* Form Section */}
            <div className="w-full min-h-[90vh]  lg:w-1/2 flex items-center justify-center p-4 py-8 lg:py-0">
              <form 
                className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-[#F1F0FE]'}`}
                onSubmit={handleResetPassword}
              >
                {/* Logo Inside Form */}
                <div className="flex justify-center mb-12">
                  <img 
                    src={sekkaLogo} 
                    alt="Sekka Logo" 
                    className=" object-contain" 
                  />
                </div>

                <h2 className="text-3xl font-bold-300 mb-8 text-center">Reset Password</h2>

                {/* Password Field */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2"></label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className={`w-full p-3 pl-10 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600' : 'bg-white border-gray-300'}`}
                      required
                      placeholder="Password"
                    />
                    <span className="absolute left-3 top-3.5 text-[#A392BE]">
                      <svg width="17" height="20" viewBox="0 0 17 20" fill="#7B61FF" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
                        <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
                      </svg>
                    </span>
                    <span
                      className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2"></label>
                  <div className="relative">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      className={`w-full p-3 pl-10 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600' : 'bg-white border-gray-300'}`}
                      required
                      placeholder="Password Confirmation"
                    />
                    <span className="absolute left-3 top-3.5 text-[#A392BE]">
                      <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
                        <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
                      </svg>
                    </span>
                    <span
                      className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-14 mb-24 bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePass;






// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { TbXboxXFilled } from "react-icons/tb";
// import registerImage from "../assets/image.png";
// import sekkaLogo from "../assets/Sekka Logo.png";
// import successIcon from "../assets/correct-icon.png";
// import { FiSun, FiMoon } from "react-icons/fi";

// const ChangePass = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
//   const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setError(null);
    
//     // Basic validation
//     if (newPassword !== confirmPassword) {
//       setError("Password confirmation doesn't match");
//       return;
//     }

//     try {
//       setLoading(true);
      
//       const token = localStorage.getItem("token"); // Assuming you store the token after login
//       const response = await fetch(`${process.env.REACT_APP_API_BASE_URL || ''}/updatePassword`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           old_password: oldPassword,
//           password: newPassword,
//           password_confirmation: confirmPassword
//         })
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Handle validation errors or other API errors
//         if (data.errors) {
//           const errorMessages = Object.values(data.errors).flat().join(", ");
//           setError(errorMessages);
//         } else {
//           setError(data.message || "Failed to update password");
//         }
//         return;
//       }

//       // Password updated successfully
//       setShowSuccessMessage(true);
//     } catch (err) {
//       setError("An error occurred while updating password");
//       console.error("Password update error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const redirectToLogin = () => navigate("/login");

//   return (
//     <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-[#F1F0FE] text-gray-800'}`}>
//       {/* Dark Mode Toggle */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
//       >
//         {darkMode ? <FiSun /> : <FiMoon />}
//       </button>

//       <div className="container mx-auto flex flex-col lg:flex-row min-h-screen">
//         {showSuccessMessage ? (
//           <div className="flex flex-col lg:flex-row w-full">
//             {/* Image Section */}
//             <div className="hidden lg:flex lg:w-1/2">
//               <img 
//                 src={registerImage} 
//                 alt="Register Illustration" 
//                 className="w-full h-full object-cover" 
//               />
//             </div>

//             {/* Success Message Section */}
//             <div className={`w-full min-h-[90vh] lg:w-1/2 flex items-center justify-center p-8 ${darkMode ? '' : 'bg-[#F1F0FE]'}`}>
//               <form className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${darkMode ? '' : 'bg-[#F1F0FE]'}`}>
//                 <div className="flex justify-center mb-10">
//                   <img 
//                     src={sekkaLogo} 
//                     alt="Sekka Logo" 
//                     className="object-contain mb-1" 
//                   />
//                 </div>
//                 <h2 className="text-3xl font-semibold mb-20 text-center">Password Updated</h2>
//                 <div className="text-center">
//                   <div className="flex justify-center mb-10">
//                     <img src={successIcon} alt="Success" className="h-27 w-24" />
//                   </div>
//                   <p className="mb-6 text-lg">Password has been changed successfully</p>
//                   <button 
//                     onClick={redirectToLogin}
//                     className="w-full mb-20 h-14 bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200"
//                   >
//                     Login
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row w-full">
//             {/* Image Section */}
//             <div className="hidden lg:flex w-1/2 h-full">
//               <img 
//                 src={registerImage} 
//                 alt="Register Illustration" 
//                 className="h-full w-full object-cover" 
//               />
//             </div>

//             {/* Form Section */}
//             <div className="w-full min-h-[90vh] lg:w-1/2 flex items-center justify-center p-4 py-8 lg:py-0">
//               <form 
//                 className={`w-full max-w-md p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-[#F1F0FE]'}`}
//                 onSubmit={handleResetPassword}
//               >
//                 {/* Logo Inside Form */}
//                 <div className="flex justify-center mb-12">
//                   <img 
//                     src={sekkaLogo} 
//                     alt="Sekka Logo" 
//                     className="object-contain" 
//                   />
//                 </div>

//                 <h2 className="text-3xl font-bold-300 mb-8 text-center">Reset Password</h2>

//                 {error && (
//                   <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
//                     {error}
//                   </div>
//                 )}

               

//                 {/* New Password Field */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium mb-2"></label>
//                   <div className="relative">
//                     <input
//                       type={passwordVisible ? "text" : "password"}
//                       className={`w-full p-3 pl-10 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600' : 'bg-white border-gray-300'}`}
//                       required
//                       placeholder="New Password"
//                       value={newPassword}
//                       onChange={(e) => setNewPassword(e.target.value)}
//                     />
//                     <span className="absolute left-3 top-3.5 text-[#A392BE]">
//                       <svg width="17" height="20" viewBox="0 0 17 20" fill="#7B61FF" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
//                         <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
//                       </svg>
//                     </span>
//                     <span
//                       className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
//                       onClick={togglePasswordVisibility}
//                     >
//                       {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Confirm Password Field */}
//                 <div className="mb-8">
//                   <label className="block text-sm font-medium mb-2"></label>
//                   <div className="relative">
//                     <input
//                       type={confirmPasswordVisible ? "text" : "password"}
//                       className={`w-full p-3 pl-10 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600' : 'bg-white border-gray-300'}`}
//                       required
//                       placeholder="Confirm New Password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                     <span className="absolute left-3 top-3.5 text-[#A392BE]">
//                       <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M4.30305 7.02808H12.6127C14.9275 7.02808 16.8044 8.80781 16.8044 11.0029V15.7034C16.8044 17.8985 14.9275 19.6783 12.6127 19.6783H4.30305C1.98817 19.6783 0.111328 17.8985 0.111328 15.7034V11.0029C0.111328 8.80781 1.98817 7.02808 4.30305 7.02808ZM8.45287 15.2313C8.94178 15.2313 9.33092 14.8623 9.33092 14.3987V12.2982C9.33092 11.844 8.94178 11.475 8.45287 11.475C7.97393 11.475 7.58479 11.844 7.58479 12.2982V14.3987C7.58479 14.8623 7.97393 15.2313 8.45287 15.2313Z" fill="#7B61FF"></path>
//                         <path opacity="0.4" d="M13.8812 5.77316V7.17348C13.5319 7.07886 13.1627 7.03155 12.7836 7.03155H12.135V5.77316C12.135 3.85245 10.4887 2.29128 8.46314 2.29128C6.43763 2.29128 4.79127 3.84299 4.78129 5.75423V7.03155H4.14271C3.75357 7.03155 3.38438 7.07886 3.03516 7.18294V5.77316C3.04513 2.93467 5.46977 0.635498 8.44319 0.635498C11.4565 0.635498 13.8812 2.93467 13.8812 5.77316Z" fill="#7B61FF"></path>
//                       </svg>
//                     </span>
//                     <span
//                       className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
//                       onClick={toggleConfirmPasswordVisibility}
//                     >
//                       {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
//                     </span>
//                   </div>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className="w-full h-14 mb-24 bg-[#7B61FF] hover:bg-[#6a50e6] text-white py-3 px-4 rounded-lg transition duration-200 shadow-md"
//                   disabled={loading}
//                 >
//                   {loading ? "Updating..." : "Reset Password"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChangePass;