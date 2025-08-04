
import React, { useEffect, useState } from 'react';

export default function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://leadertv-backend-production.up.railway.app/api/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">Календар на събития</h1>
      {events.map(event => (
        <div key={event.id} className="bg-white shadow rounded-md p-6 mb-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
          <p className="text-sm text-gray-500 mb-2"><strong>Дата:</strong> {event.date}</p>
          <p className="text-sm text-gray-500 mb-2"><strong>Място:</strong> {event.location || '—'}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
