
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="https://leadertv.org" className="text-2xl font-bold text-indigo-600">LeaderTV</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-indigo-600">Начало</a>
          <a href="#events" className="hover:text-indigo-600">Събития</a>
          <a href="#news" className="hover:text-indigo-600">Новини</a>
          <a href="#contacts" className="hover:text-indigo-600">Контакти</a>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 py-2 space-y-2">
          <a href="#home" className="block hover:text-indigo-600">Начало</a>
          <a href="#events" className="block hover:text-indigo-600">Събития</a>
          <a href="#news" className="block hover:text-indigo-600">Новини</a>
          <a href="#contacts" className="block hover:text-indigo-600">Контакти</a>
        </div>
      )}
    </header>
  );
}
