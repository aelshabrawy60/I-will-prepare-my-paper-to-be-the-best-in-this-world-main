// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const PasswordToggle = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);


//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       <input
//         type={passwordVisible ? 'text' : 'password'}
//         placeholder="Enter your password"
//         style={{
//           padding: '8px',
//           fontSize: '16px',
//           marginRight: '10px',
//           width: '200px',
//         }}
//       />
//       <span
//         onClick={togglePasswordVisibility}
//         style={{
//           cursor: 'pointer',
//           fontSize: '18px',
//           color: '#555',
//         }}
//       >
//         <i className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
//       </span>
//     </div>
//   );
// };

// export default PasswordToggle;
