'use client';

import events from '@/data/events';
import news from '@/data/news';

import EventsShowcase from '@/containers/events-news/events';
import News from '@/containers/events-news/news';
import StaticIntro from '@/components/static-intro';

export default function EventsNews() {
  return (
    <>
      <StaticIntro className="bg-[url('/images/twilight.webp')] bg-bottom" />
      <EventsShowcase events={events} />
      <News news={news} />
    </>
  );
}
