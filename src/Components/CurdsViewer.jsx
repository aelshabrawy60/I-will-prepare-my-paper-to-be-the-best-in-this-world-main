import React, { useState, useEffect } from 'react';
import Curds from './Curds';
import Search from './Search';

function CurdsSearch() {
  const [trainsData, setTrainsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPayload, setSearchPayload] = useState({
    date: "",
    destination: "",
    start_location: "",
    time: "",
    train_type: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      if (
        !searchPayload.start_location ||
        !searchPayload.destination ||
        !searchPayload.date
      ) return; // Skip fetch if required fields are missing

      setLoading(true);
      setError(null);

      const token = localStorage.getItem('authToken');

      try {
        const formData = new FormData();
        Object.entries(searchPayload).forEach(([key, value]) => {
          formData.append(key, value);
        });


        console.log("formData", searchPayload)
        const response = await fetch('https://lawngreen-walrus-394451.hostingersite.com/api/home', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: searchPayload
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.code === 'success') {
          setTrainsData(result.data.data);
        } else {
          throw new Error(result.message || 'Failed to fetch train data');
        }
      } catch (error) {
        console.error('Fetch failed:', error);
        setError(error.message || 'حدث خطأ أثناء البحث عن القطارات');
        setTrainsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchPayload]);

  function handleSearch(payload) {
    setSearchPayload(payload);
  }

  return (
    <div>
      <Search onSearch={handleSearch} />
      
      {loading && (
        <div className="text-center mt-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">جاري البحث...</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700 text-center">{error}</p>
        </div>
      )}

      {!loading && !error && trainsData.length > 0 && (
        <div className='flex gap-4 p-8 flex-wrap justify-center'>
            {trainsData.map((train, index) => (
            <Curds key={train.id || index} data={train} />
            ))}
        </div>
      )}

      {!loading && !error && trainsData.length === 0 && searchPayload.start_location && searchPayload.destination && searchPayload.date && (
        <p className="text-center mt-4 text-gray-500">لا توجد نتائج</p>
      )}
    </div>
  );
}

export default CurdsSearch;