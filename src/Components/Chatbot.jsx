import React, { useState } from 'react';
import { FaSun, FaMoon, FaLanguage, FaPlus } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import { BsRobot } from 'react-icons/bs';

// Import your images
import userAvatar from '../assets/WhatsApp_Image_2025-04-18_at_04.07.13_e9a3b56d-removebg-preview.png';
import sekkaIcon from '../assets/image-removebg-preview.png';

const AIChatbot = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const trendingQuestions = {
    en: [
      "What is the best way to book tickets?",
      "How can I change my booking?",
      "What are the payment options?",
      "Is there WiFi on the trains?"
    ],
    ar: [
      "ما هي أفضل طريقة لحجز التذاكر؟",
      "كيف يمكنني تغيير حجزي؟",
      "ما هي خيارات الدفع المتاحة؟",
      "هل يوجد وايفاي في القطارات؟"
    ]
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = { 
        text: inputMessage, 
        sender: 'user',
        avatar: userAvatar // Updated avatar path
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      setTimeout(() => {
        const responses = {
          en: [
            "I can help with your booking questions!",
            "You can change bookings through our app or website.",
            "We accept credit cards and mobile payments.",
            "Yes, all our trains have free WiFi."
          ],
          ar: [
            "يمكنني المساعدة في أسئلة الحجز الخاصة بك!",
            "يمكنك تغيير الحجوزات من خلال التطبيق أو الموقع الإلكتروني.",
            "نقبل بطاقات الائتمان والدفع عبر الهاتف المحمول.",
            "نعم، جميع قطاراتنا تحتوي على وايفاي مجاني."
          ]
        };
        
        const randomResponse = responses[language][Math.floor(Math.random() * responses[language].length)];
        setMessages(prev => [...prev, { 
          text: randomResponse, 
          sender: 'bot',
          avatar: sekkaIcon // Updated avatar path
        }]);
      }, 800);
    }
  };

  const startNewChat = () => {
    setMessages([]);
  };

  const handleQuestionClick = (question) => {
    setMessages([...messages, { 
      text: question, 
      sender: 'user',
      avatar: userAvatar // Updated avatar path
    }]);
    
    setTimeout(() => {
      const responses = {
        en: `Here's information about: "${question}"`,
        ar: `ها هي المعلومات حول: "${question}"`
      };
      setMessages(prev => [...prev, { 
        text: responses[language], 
        sender: 'bot',
        avatar: sekkaIcon // Updated avatar path
      }]);
    }, 800);
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Left Sidebar - 1/4 width */}
      <div className={`w-1/4 flex flex-col p-4 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-indigo-50 text-indigo-900'} border-r ${darkMode ? 'border-gray-700' : 'border-indigo-200'}`}>
        <button 
          onClick={startNewChat}
          className={`flex items-center justify-center gap-2 p-2 mb-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-indigo-100'} transition-colors text-sm`}
        >
          <FaPlus className="text-indigo-500" />
          <span>{language === 'en' ? 'New Chat' : 'محادثة جديدة'}</span>
        </button>

        <div className="mb-6 text-center">
          <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
            <BsRobot className="text-indigo-500" />
            <span>{language === 'en' ? 'Most Trending Questions' : 'الأسئلة الأكثر شيوعاً'}</span>
          </h3>
          <div className="space-y-3">
            {trendingQuestions[language].map((question, index) => (
              <div 
                key={index}
                onClick={() => handleQuestionClick(question)}
                className={`p-3 rounded-lg cursor-pointer ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-indigo-100'} transition-colors border ${darkMode ? 'border-gray-700' : 'border-indigo-200'} shadow-sm`}
              >
                {question}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-2 justify-center">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-indigo-800 text-yellow-400' : 'bg-white text-gray-700'}`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className={`p-2 rounded-full ${darkMode ? 'bg-indigo-800 text-blue-400' : 'bg-white text-blue-700'}`}
          >
            <FaLanguage />
          </button>
        </div>
      </div>

      {/* Right Chat Area - 3/4 width */}
      <div className="w-3/4 flex flex-col">
        {/* Chat Header */}
        <div className={`p-4 ${darkMode ? 'border-gray-700 text-white bg-gray-800' : 'border-gray-200 text-gray-800 bg-white'} flex items-center justify-center gap-3`}>
            <h1 className={`font-bold mt-9 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sekka AI</h1>
            <img 
                src={sekkaIcon} 
                alt="Sekka AI Icon" 
                className="w-14 h-15 object-contain" 
            />
            </div>

        {/* Messages Area */}
        <div className={`flex-1 p-6 overflow-y-auto ${darkMode ? 'bg-gray-900 text-gray-50' : 'bg-gray-50'}`}>
          {messages.length === 0 ? (
            <div className={`h-full flex flex-col items-center justify-center text-center p-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <img 
                src={sekkaIcon} 
                alt="Sekka AI" 
                className="w-24 h-24 mb-6 object-contain" 
              />
              <h3 className="text-2xl font-bold mb-4">
                {language === 'en' ? 'How can I help you today?' : 'كيف يمكنني مساعدتك اليوم؟'}
              </h3>
              <p className="text-lg max-w-md">
                {language === 'en' 
                  ? "Ask me anything about bookings, schedules, or our services." 
                  : "اسألني عن أي شيء regarding الحجوزات، الجداول، أو خدماتنا."}
              </p>
            </div>
          ) : (
            <div className={`space-y-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <img 
                      src={msg.avatar} 
                      alt="Bot" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                  <div 
                    className={`max-w-xs md:max-w-md rounded-2xl p-4 ${msg.sender === 'user' 
                      ? (darkMode ? 'bg-indigo-700' : 'bg-indigo-600 text-white') 
                      : (darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200')}`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <img 
                      src={msg.avatar} 
                      alt="User" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={language === 'en' ? 'Type your message...' : 'اكتب رسالتك...'}
              className={`flex-1 p-4 rounded-full ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 placeholder-gray-500'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className={`p-4 rounded-full ${!inputMessage.trim() 
                ? (darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400') 
                : (darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700')} text-white transition-colors`}
            >
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;