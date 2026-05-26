'use client';
import React, { useState } from 'react';
import { format, addDays, isBefore, startOfDay } from 'date-fns';

export interface BookingData {
  name: string;
  mobile: string;
  email: string;
  service_id: string;
  date: string;
  time: string;
}

interface BookingFlowProps {
  onComplete: (data: BookingData) => void;
  onCancel: () => void;
}

const steps = ['Details', 'Date & Time', 'Confirm'];

const availableTimes = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '03:00 PM', '05:00 PM', '06:00 PM'];
const dummyServices = [
  { id: '1', name: 'Haircut', price: '₹299' },
  { id: '2', name: 'Hair Spa', price: '₹999' },
  { id: '3', name: 'Facial Cleanup', price: '₹799' }
];

const BookingFlow: React.FC<BookingFlowProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Partial<BookingData>>({});
  const [error, setError] = useState('');

  const handleNext = () => {
    if (step === 0) {
      if (!data.name || !data.mobile || !data.service_id) {
        setError('Please fill required fields.');
        return;
      }
      if (!/^[6-9]\d{9}$/.test(data.mobile)) {
        setError('Invalid Indian mobile number.');
        return;
      }
    }
    if (step === 1) {
      if (!data.date || !data.time) {
        setError('Please select date and time.');
        return;
      }
    }
    setError('');
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(data as BookingData);
    }
  };

  const getNextDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(addDays(new Date(), i));
    }
    return days;
  };

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 my-2 text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Book Appointment</h3>
        <button onClick={onCancel} className="text-zinc-400 hover:text-white text-xs">Cancel</button>
      </div>

      <div className="mb-4 flex gap-1">
        {steps.map((s, i) => (
          <div key={s} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-white' : 'bg-zinc-700'}`} />
        ))}
      </div>

      {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

      {step === 0 && (
        <div className="space-y-3">
          <input 
            type="text" 
            placeholder="Your Name *" 
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-white"
            value={data.name || ''}
            onChange={e => setData({...data, name: e.target.value})}
          />
          <input 
            type="tel" 
            placeholder="Mobile Number (10 digits) *" 
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-white"
            value={data.mobile || ''}
            onChange={e => setData({...data, mobile: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Email (Optional)" 
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-white"
            value={data.email || ''}
            onChange={e => setData({...data, email: e.target.value})}
          />
          <select 
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm focus:outline-none focus:border-white text-white"
            value={data.service_id || ''}
            onChange={e => setData({...data, service_id: e.target.value})}
          >
            <option value="" disabled>Select Service *</option>
            {dummyServices.map(s => (
              <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
            ))}
          </select>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Select Date</label>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {getNextDays().map(d => {
                const formatted = format(d, 'yyyy-MM-dd');
                const display = format(d, 'EEE, d MMM');
                const isSelected = data.date === formatted;
                return (
                  <button
                    key={formatted}
                    onClick={() => setData({...data, date: formatted})}
                    className={`flex-shrink-0 px-3 py-2 rounded border text-xs ${isSelected ? 'bg-white text-black border-white' : 'border-zinc-700 hover:border-zinc-500'}`}
                  >
                    {display}
                  </button>
                )
              })}
            </div>
          </div>
          <div>
            <label className="text-xs text-zinc-400 mb-1 block">Select Time</label>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map(t => (
                <button
                  key={t}
                  onClick={() => setData({...data, time: t})}
                  className={`py-2 rounded border text-xs ${data.time === t ? 'bg-white text-black border-white' : 'border-zinc-700 hover:border-zinc-500'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-2 text-sm bg-zinc-800 p-3 rounded">
          <p><span className="text-zinc-400">Name:</span> {data.name}</p>
          <p><span className="text-zinc-400">Mobile:</span> {data.mobile}</p>
          <p><span className="text-zinc-400">Service:</span> {dummyServices.find(s => s.id === data.service_id)?.name}</p>
          <p><span className="text-zinc-400">Date:</span> {data.date}</p>
          <p><span className="text-zinc-400">Time:</span> {data.time}</p>
        </div>
      )}

      <div className="mt-4 flex justify-between">
        {step > 0 ? (
          <button onClick={() => setStep(step - 1)} className="text-sm px-4 py-2 border border-zinc-600 rounded text-zinc-300 hover:bg-zinc-800">
            Back
          </button>
        ) : <div />}
        <button onClick={handleNext} className="text-sm px-4 py-2 bg-white text-black rounded font-medium hover:bg-zinc-200">
          {step === steps.length - 1 ? 'Confirm Booking' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default BookingFlow;
