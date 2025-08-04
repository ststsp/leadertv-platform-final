
import React from 'react';
import Header from './components/Header';
import EventsList from './components/EventsList';
import EventForm from './components/EventForm';
import NewsList from './components/NewsList';
import NewsForm from './components/NewsForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto p-6 space-y-10">
        <section id="events">
          <EventsList />
          <EventForm />
        </section>
        <section id="news">
          <NewsList />
          <NewsForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
