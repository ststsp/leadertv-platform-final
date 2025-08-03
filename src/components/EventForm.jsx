
import React, { useState } from 'react';

export default function EventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!title || !date || !location || !description) {
      setError('Моля, попълнете всички полета.');
      return;
    }

    try {
      const res = await fetch('https://leadertv-backend-production.up.railway.app/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, date, location, description })
      });

      if (res.ok) {
        setSuccess(true);
        setTitle('');
        setDate('');
        setLocation('');
        setDescription('');
      } else {
        setError('Грешка при добавяне на събитие.');
      }
    } catch (err) {
      setError('Възникна проблем със сървъра.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Добави събитие</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">Събитието е добавено успешно!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Заглавие" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        <input type="text" placeholder="Място" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        <textarea placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md p-2"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Добави събитие</button>
      </form>
    </div>
  );
}
