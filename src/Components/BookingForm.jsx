import React from 'react'
import { Calendar, Clock, Users, MapPin, Train, Ticket, CheckCircle, AlertCircle } from 'lucide-react';


function BookingForm({bookingData,scheduleData ,handleInputChange}) {
  return (
    <div className='space-y-4'>
        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4 inline mr-1" />
            Date
            </label>
            <input
            type="date"
            value={bookingData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            />
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            <Clock className="w-4 h-4 inline mr-1" />
            Time
            </label>
            <input
            type="time"
            value={bookingData.time}
            onChange={(e) => handleInputChange('time', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
            <select
            value={bookingData.adult_count}
            onChange={(e) => handleInputChange('adult_count', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            {[1,2,3,4,5,6].map(num => (
                <option key={num} value={num}>{num}</option>
            ))}
            </select>
        </div>
        
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
            <select
            value={bookingData.children_count}
            onChange={(e) => handleInputChange('children_count', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            {[0,1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}</option>
            ))}
            </select>
        </div>
        </div>

        {/* Class Selection */}
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <div className="space-y-3">
                {scheduleData?.classes?.map(classOption => {
                const isSelected = bookingData.class_id === classOption.id;
                const adultPrice = parseInt(classOption.price.replace(/[^\d]/g, ''));
                const childPrice = parseInt(classOption.children_price.replace(/[^\d]/g, ''));
                const totalPrice = (adultPrice * bookingData.adult_count) + (childPrice * bookingData.children_count);
                
                return (
                    <div
                    key={classOption.id}
                    onClick={() => handleInputChange('class_id', classOption.id)}
                    className={`
                        p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
                        ${isSelected 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                        }
                    `}
                    >
                    <div className="flex justify-between items-start">
                        <div>
                        <h3 className={`font-semibold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                            {classOption.name}
                        </h3>
                        <div className="text-sm text-gray-600 mt-1">
                            <div>Adults: {classOption.price}</div>
                            <div>Children: {classOption.children_price}</div>
                        </div>
                        </div>
                        <div className="text-right">
                        <div className={`text-lg font-bold ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                            {totalPrice} EGP
                        </div>
                        <div className="text-xs text-gray-500">Total</div>
                        </div>
                    </div>
                    {isSelected && (
                        <div className="mt-2 flex items-center text-blue-700 text-sm">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Selected
                        </div>
                    )}
                    </div>
                );
                })}
            </div>
        </div>
    </div>
  )
}

export default BookingForm