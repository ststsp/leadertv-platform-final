import React, { useState, useEffect } from 'react';

export default function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : [
      { title: 'Примерно събитие', date: '2025-08-15', place: 'София', description: 'Описание на събитието' }
    ];
  });

  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('news');
    return saved ? JSON.parse(saved) : [
      { title: 'Новина', date: '2025-08-01', content: 'Съдържание на новината' }
    ];
  });

  const [newEvent, setNewEvent] = useState({ title: '', date: '', place: '', description: '' });
  const [newNews, setNewNews] = useState({ title: '', date: '', content: '' });

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('news', JSON.stringify(news));
  }, [news]);

  const addEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', date: '', place: '', description: '' });
    }
  };

  const addNews = () => {
    if (newNews.title && newNews.date) {
      setNews([...news, newNews]);
      setNewNews({ title: '', date: '', content: '' });
    }
  };

  const resetAll = () => {
    setEvents([]);
    setNews([]);
    localStorage.removeItem('events');
    localStorage.removeItem('news');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold">LeaderTV</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Начало</a>
          <a href="#" className="hover:underline">Събития</a>
          <a href="#" className="hover:underline">Новини</a>
          <a href="#" className="hover:underline">Контакти</a>
        </nav>
      </header>

      <main className="space-y-10">
        {/* Събития */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Календар на събития</h2>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">{e.title}</h3>
                <p className="text-sm text-gray-500">Дата: {e.date}</p>
                <p className="text-sm">Място: {e.place}</p>
                <p className="mt-2 text-gray-700">{e.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Добави събитие</h4>
            <input className="border p-1 mr-2" placeholder="Заглавие" value={newEvent.title} onChange={e => setNewEvent({...newEvent, title: e.target.value})} />
            <input type="date" className="border p-1 mr-2" value={newEvent.date} onChange={e => setNewEvent({...newEvent, date: e.target.value})} />
            <input className="border p-1 mr-2" placeholder="Място" value={newEvent.place} onChange={e => setNewEvent({...newEvent, place: e.target.value})} />
            <input className="border p-1 mr-2" placeholder="Описание" value={newEvent.description} onChange={e => setNewEvent({...newEvent, description: e.target.value})} />
            <button onClick={addEvent} className="bg-blue-500 text-white px-3 py-1 rounded">Добави</button>
          </div>
        </section>

        {/* Новини */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Новини</h2>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">{n.title}</h3>
                <p className="text-sm text-gray-500">Дата: {n.date}</p>
                <p className="mt-2 text-gray-700">{n.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Добави новина</h4>
            <input className="border p-1 mr-2" placeholder="Заглавие" value={newNews.title} onChange={e => setNewNews({...newNews, title: e.target.value})} />
            <input type="date" className="border p-1 mr-2" value={newNews.date} onChange={e => setNewNews({...newNews, date: e.target.value})} />
            <input className="border p-1 mr-2" placeholder="Съдържание" value={newNews.content} onChange={e => setNewNews({...newNews, content: e.target.value})} />
            <button onClick={addNews} className="bg-green-500 text-white px-3 py-1 rounded">Добави</button>
          </div>
        </section>

        {/* Reset бутон */}
        <div className="mt-6 text-center">
          <button onClick={resetAll} className="bg-red-500 text-white px-4 py-2 rounded">
            Изчисти всички данни
          </button>
        </div>
      </main>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        © 2025 LeaderTV. Всички права запазени.
      </footer>
    </div>
  );
}
