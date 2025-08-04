
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} LeaderTV. Всички права запазени.
      </div>
    </footer>
  );
}
