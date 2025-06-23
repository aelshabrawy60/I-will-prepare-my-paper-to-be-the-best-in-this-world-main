// import React, { useState } from 'react';

// const Ai = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFindStation = () => {
//     // Logic to find nearest station would go here
//     console.log("Finding nearest station...");
//   };

//   return (
//     <div className="ai-page" style={{ 
//       display: 'flex', 
//       flexDirection: ['column', 'row'],
//       minHeight: '100vh',
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//     }}>
//       {/* Left Side - Station Information */}
//       <div className="station-info" style={{
//         width: ['100%', '30%'],
//         padding: '2.5rem',
//         backgroundColor: '#d4d0fa80',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1.2rem',
//         boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
//       }}>
        
//         <div className="info-item" style={{
//           backgroundColor: 'white',
//           padding: '1rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//         }}>
//           <strong style={{ color: '#7f8c8d' }}>Land mark:</strong> 
//           <span style={{ color: '#2c3e50', marginLeft: '0.5rem' }}>Cairo Tower</span>
//         </div>
        
//         <div className="info-item" style={{
//           backgroundColor: 'white',
//           padding: '1rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//         }}>
//           <strong style={{ color: '#7f8c8d' }}>Nearest station:</strong> 
//           <span style={{ color: '#2c3e50', marginLeft: '0.5rem' }}>Giza station</span>
//         </div>
        
//         <div className="info-item" style={{
//           backgroundColor: 'white',
//           padding: '1rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//         }}>
//           <strong style={{ color: '#7f8c8d' }}>Distance:</strong> 
//           <span style={{ color: '#2c3e50', marginLeft: '0.5rem' }}>23 km away</span>
//         </div>
        
//         <div className="info-item" style={{
//           backgroundColor: 'white',
//           padding: '1rem',
//           borderRadius: '8px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//         }}>
//           <strong style={{ color: '#7f8c8d' }}>Estimated Arrival:</strong> 
//           <span style={{ color: '#2c3e50', marginLeft: '0.5rem' }}>15 minutes by car</span>
//         </div>
//       </div>

//       {/* Right Side - Upload Section */}
//      <div className="upload-section" style={{
//   width: ['100%', '70%'],
//   padding: '2rem',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#ffffff'
// }}>
//   <div style={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     maxWidth: '600px'
//   }}>
//     <div className="upload-box" style={{
//       border: '2px solid #bdc3c7',
//       borderRadius: '12px',
//       padding: '4rem',
//       width: '100%',
//       textAlign: 'center',
//       marginBottom: '2rem',
//       backgroundColor: '#f8f9fa',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//       ':hover': {
//         borderColor: '#7367F0',
//         backgroundColor: '#f1f8fe'
//       }
//     }}>
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '1rem',
//         marginBottom: '2rem'
//       }}>
//         <p style={{ 
//           color: '#7f8c8d',
//           fontSize: '1.3rem',
//           fontWeight: '500',
//           margin: 0
//         }}>Upload a landmark photo</p>
        
//         {/* Photo Icon in Small Rectangle - moved after text */}
//         <label htmlFor="photo-upload" style={{
//           display: 'inline-flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '40px',
//           height: '40px',
//           backgroundColor: '#D4D0FA',
//           borderRadius: '8px',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s',
//           ':hover': {
//             backgroundColor: '#5a50d0'
//           }
//         }}>
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="#7367F0">
//             <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
//             <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
//             <circle cx="8.5" cy="8.5" r="1.5"/>
//           </svg>
//         </label>
        
//         <input
//           type="file"
//           id="photo-upload"
//           accept="image/*"
//           onChange={handleFileChange}
//           style={{ display: 'none' }}
//         />
//       </div>

//       {selectedFile && (
//         <p style={{ 
//           marginTop: '1.5rem',
//           color: '#2c3e50',
//           fontSize: '1.1rem'
//         }}>
//           Selected: {selectedFile.name}
//         </p>
//       )}
//     </div>

//     <button
//       onClick={handleFindStation}
//       style={{
//         backgroundColor: '#7367F0',
//         color: 'white',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontSize: '1.4rem',
//         fontWeight: '600',
//         width: '100%',
//         padding: '0.6rem',
//         boxShadow: '0 4px 8px rgba(115, 103, 240, 0.3)',
//         transition: 'all 0.2s',
//         ':hover': {
//           backgroundColor: '#5a50d0',
//           transform: 'translateY(-3px)',
//           boxShadow: '0 6px 12px rgba(115, 103, 240, 0.4)'
//         },
//         ':active': {
//           transform: 'translateY(0)'
//         }
//       }}
//     >
//       Find Station
//     </button>
//   </div>
// </div>
//     </div>
//   );
// };

// export default Ai;

import React, { useState } from 'react';

const Ai = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFindStation = () => {
    // Logic to find nearest station would go here
    console.log("Finding nearest station...");
  };

  return (
    <div className="ai-page" style={{ 
      display: 'flex', 
      flexDirection: ['column', 'row'],
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Left Side - Station Information */}
      <div className="station-info" style={{
        width: ['100%', '30%'],
        padding: '2.5rem',
        backgroundColor: '#d4d0fa80',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
      }}>
        <div className="info-block" style={{
          backgroundColor: 'white',
          padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div><strong style={{ color: '#7f8c8d' }}>Land mark:</strong> <span style={{ color: '#2c3e50' }}>Cairo Tower</span></div>
          <div><strong style={{ color: '#7f8c8d' }}>Nearest station:</strong> <span style={{ color: '#2c3e50' }}>Giza station</span></div>
          <div><strong style={{ color: '#7f8c8d' }}>Distance:</strong> <span style={{ color: '#2c3e50' }}>23 km away</span></div>
          <div><strong style={{ color: '#7f8c8d' }}>Estimated Arrival:</strong> <span style={{ color: '#2c3e50' }}>15 minutes by car</span></div>
        </div>
      </div>

      {/* Right Side - Upload Section */}
      <div className="upload-section" style={{
        width: ['100%', '70%'],
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center', // لتحديد المنتصف
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto' // لتحديد المنتصف أفقيًا
        }}>
          <div className="upload-box" style={{
            border: '2px solid #bdc3c7',
            borderRadius: '12px',
            padding: '4rem',
            width: '100%',
            textAlign: 'center',
            marginBottom: '2rem',
            backgroundColor: '#f8f9fa',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            ':hover': {
              borderColor: '#7367F0',
              backgroundColor: '#f1f8fe'
            }
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <p style={{ 
                color: '#7f8c8d',
                fontSize: '1.3rem',
                fontWeight: '500',
                margin: 0
              }}>Upload a landmark photo</p>
              
              {/* Photo Icon in Small Rectangle - moved after text */}
              <label htmlFor="photo-upload" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#D4D0FA',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                ':hover': {
                  backgroundColor: '#5a50d0'
                }
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#7367F0">
                  <path d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                </svg>
              </label>
              
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </div>

            {selectedFile && (
              <p style={{ 
                marginTop: '1.5rem',
                color: '#2c3e50',
                fontSize: '1.1rem'
              }}>
                Selected: {selectedFile.name}
              </p>
            )}
          </div>

          <button
            onClick={handleFindStation}
            style={{
              backgroundColor: '#7367F0',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.2rem', // خفضت الحجم شوية عشان يكون قصير
              fontWeight: '600',
              width: '80%', // عريض
              padding: '0.8rem', // قصير
              boxShadow: '0 4px 8px rgba(115, 103, 240, 0.3)',
              transition: 'all 0.2s',
              ':hover': {
                backgroundColor: '#5a50d0',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 12px rgba(115, 103, 240, 0.4)'
              },
              ':active': {
                transform: 'translateY(0)'
              }
            }}
          >
            Find Station
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ai;