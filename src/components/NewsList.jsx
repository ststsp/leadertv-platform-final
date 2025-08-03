
import React, { useEffect, useState } from 'react';

export default function NewsList() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://leadertv-backend-production.up.railway.app/api/news')
      .then(res => res.json())
      .then(data => setNews(data));
  }, []);

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Новини</h1>
      {news.map(item => (
        <div key={item.id} className="bg-white shadow-md rounded-md p-6 mb-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
          <p className="text-sm text-gray-500 mb-2"><strong>Дата:</strong> {item.date}</p>
          <p className="text-gray-700">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
