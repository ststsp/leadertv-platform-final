
import React from 'react';
import EventsList from './components/EventsList';
import EventForm from './components/EventForm';
import NewsList from './components/NewsList';
import NewsForm from './components/NewsForm';

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <section>
        <EventsList />
        <EventForm />
      </section>
      <section>
        <NewsList />
        <NewsForm />
      </section>
    </div>
  );
}
