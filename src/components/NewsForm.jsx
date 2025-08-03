
import React, { useState } from 'react';

export default function NewsForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!title || !date || !content) {
      setError('Моля, попълнете всички полета.');
      return;
    }

    try {
      const res = await fetch('https://leadertv-backend-production.up.railway.app/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, date, content })
      });

      if (res.ok) {
        setSuccess(true);
        setTitle('');
        setDate('');
        setContent('');
      } else {
        setError('Грешка при добавяне на новина.');
      }
    } catch (err) {
      setError('Възникна проблем със сървъра.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Добави новина</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">Новината е добавена успешно!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Заглавие" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
        <textarea placeholder="Съдържание" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border border-gray-300 rounded-md p-2"></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Добави новина</button>
      </form>
    </div>
  );
}
