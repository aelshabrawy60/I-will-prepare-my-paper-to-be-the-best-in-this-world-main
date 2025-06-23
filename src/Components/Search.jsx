import { useState, useContext, useEffect } from "react";
import pinIcon from '../assets/pin.png';
import calenderIcon from '../assets/calendar.png';
import trainIcon from '../assets/railway.png';
import clockIcon from '../assets/clock.png';
import { Darkmood, languageContext } from "../pages/Home";

const Search = ({ onStationsLoad, onSearch }) => {
  const [time, setTime] = useState("19:59");
  const [date, setDate] = useState("2025-12-02");
  const [stations, setStations] = useState([]);
  const [trainTypes, setTrainTypes] = useState({});
  const [selectedStartLocation, setSelectedStartLocation] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedTrainType, setSelectedTrainType] = useState("express");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  
  const { darkMode } = useContext(Darkmood);
  const { language } = useContext(languageContext);

  // Use the same token as your Python script
  const API_BASE_URL = "https://lawngreen-walrus-394451.hostingersite.com/api";

  // النصوص متعددة اللغات
  const texts = {
    class: {
      en: "Class",
      ar: "الدرجة"
    },
    to: {
      en: "To",
      ar: "إلى"
    },
    from: {
      en: "From",
      ar: "من"
    },
    enterLocation: {
      en: "Select destination",
      ar: "اختر الوجهة"
    },
    enterYourLocation: {
      en: "Select your location",
      ar: "اختر موقعك"
    },
    searchButton: {
      en: "Search for schedule",
      ar: "إبحث عن الميعاد"
    },
    loading: {
      en: "Searching...",
      ar: "جاري البحث..."
    },
    classOptions: {
      firstClass: {
        en: "First Class",
        ar: "أول مميز"
      },
      secondClass: {
        en: "Second Class",
        ar: "ثاني مميز"
      },
      regular: {
        en: "Regular",
        ar: "عادي"
      }
    }
  };

  // Fetch stations on component mount
  useEffect(() => {
    fetchStations();
    fetchTrainTypes();
  }, []);

  const getAuthToken = () => {
    // First try to get from localStorage, fall back to hardcoded token
    const storedToken = localStorage.getItem('authToken');
    const token = storedToken || API_TOKEN;
    
    console.log('Token source:', storedToken ? 'localStorage' : 'hardcoded');
    console.log('Token length:', token ? token.length : 0);
    return token;
  };

  const fetchStations = async () => {
    try {
      const token = getAuthToken();
      
      console.log('Making stations request to:', `${API_BASE_URL}/stations`);
      
      const response = await fetch(`${API_BASE_URL}/stations`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Stations response status:', response.status);
      
      if (!response.ok) {
        console.error('Stations request failed:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });
        
        // Try to get error details
        const errorText = await response.text();
        console.error('Error response:', errorText);
        return;
      }
      
      const data = await response.json();
      console.log("Stations data:", data);
      
      if (data.code === 'success') {
        const stationsData = data.data.stations || [];
        setStations(stationsData);
        if (onStationsLoad) {
          onStationsLoad(stationsData);
        }
      } else {
        console.error('Stations API returned error:', data);
      }
    } catch (error) {
      console.error('Error fetching stations:', error);
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
  };

  const fetchTrainTypes = async () => {
    try {
      const token = getAuthToken();
      
      console.log('Making train types request to:', `${API_BASE_URL}/train-types`);
      
      const response = await fetch(`${API_BASE_URL}/train-types`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Train types response status:', response.status);
      
      if (!response.ok) {
        console.error('Train types request failed:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url
        });
        
        const errorText = await response.text();
        console.error('Error response:', errorText);
        return;
      }
      
      const data = await response.json();
      console.log("Train types data:", data);
      
      if (data.code === 'success') {
        setTrainTypes(data.data.data || {});
      } else {
        console.error('Train types API returned error:', data);
      }
    } catch (error) {
      console.error('Error fetching train types:', error);
    }
  };

  const handleSearch = async () => {
    if (!selectedStartLocation || !selectedDestination) {
      alert(language === 'ar' ? 'يرجى اختيار نقطة البداية والوجهة' : 'Please select start location and destination');
      return;
    }

    const searchPayload = {
      start_location: selectedStartLocation,
      destination: selectedDestination,
      date: date,
      time: time,
      train_type: selectedTrainType
    };

    console.log('Search payload:', searchPayload);

    // Call the onSearch prop function with the payload
    if (onSearch) {
      onSearch(searchPayload);
    }
  };

  return (
    <section
      className={`flex flex-col items-center p-6 sm:p-10 bg-[#B9B3FA]`}
      id="TimeTable"
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
    >
      <div className="flex justify-center gap-4 w-full max-w-6xl">

        {/* الدرجة */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.class[language]}
          </label>
          <div className="relative">
            <select 
              className="bg-white/20 text-white p-2 rounded-md w-full appearance-none"
              value={selectedTrainType}
              onChange={(e) => setSelectedTrainType(e.target.value)}
            >
              {Object.entries(trainTypes).map(([key, value]) => (
                <option key={key} value={key} className="bg-[#938bdf] text-white">
                  {value}
                </option>
              ))}
            </select>
            <img
              src={trainIcon}
              alt="Train"
              className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-6 h-6`}
            />
          </div>
        </div>

        {/* من - From/Start Location */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.from[language]}
          </label>
          <div className="relative">
            <select
              value={selectedStartLocation}
              onChange={(e) => setSelectedStartLocation(e.target.value)}
              className="bg-white/20 p-2 rounded-md w-full text-white appearance-none"
            >
              <option value="" className="bg-[#938bdf] text-white">
                {texts.enterYourLocation[language]}
              </option>
              {stations.map((station) => (
                <option key={station.id} value={station.id} className="bg-[#938bdf] text-white">
                  {station.name}
                </option>
              ))}
            </select>
            <img
              src={pinIcon}
              alt="Pin"
              className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
            />
          </div>
        </div>

        {/* إلى - To/Destination */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[220px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {texts.to[language]}
          </label>
          <div className="relative">
            <select
              className="bg-white/20 p-2 rounded-md w-full text-white appearance-none"
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
            >
              <option value="" className="bg-[#938bdf] text-white">
                {texts.enterLocation[language]}
              </option>
              {stations.map((station) => (
                <option key={station.id} value={station.id} className="bg-[#938bdf] text-white">
                  {station.name}
                </option>
              ))}
            </select>
            <img
              src={pinIcon}
              alt="Location"
              className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
            />
          </div>
        </div>

        {/* Date and Time */}
        <div className="flex flex-col text-white p-4 rounded-2xl shadow-lg bg-[#7367F0] w-full sm:min-w-[300px] sm:w-auto">
          <label className={`mb-2 font-semibold ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'ar' ? 'التاريخ والوقت' : 'Date & Time'}
          </label>
          <div className="flex sm:flex-row gap-2">
            {/* الوقت */}
            <div className="relative w-full sm:w-auto">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={clockIcon}
                alt="Clock"
                className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
              />
            </div>

            {/* التاريخ */}
            <div className="relative w-full sm:w-auto">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white/20 p-2 rounded-md w-full text-white placeholder-white"
              />
              <img
                src={calenderIcon}
                alt="Calendar"
                className={`absolute top-1/2 ${language === 'ar' ? 'left-2' : 'right-2'} transform -translate-y-1/2 w-5 h-5`}
              />
            </div>
          </div>
        </div>

      </div>

      <button 
        onClick={handleSearch}
        className="mt-6 bg-white text-[#7367F0] px-6 py-2 rounded-lg shadow-md hover:bg-[#7367F0] hover:text-white transition-all duration-300"
        disabled={loading}
      >
        {loading ? texts.loading[language] : texts.searchButton[language]}
      </button>

    </section>
  );
};

export default Search;