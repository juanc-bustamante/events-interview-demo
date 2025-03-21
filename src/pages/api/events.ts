import { Event } from '@/types';
import { events } from '@/utils/data';
import { NextApiRequest, NextApiResponse } from 'next';

function filterEventsByTitle(events: Event[], title: string) {
  return events.filter(event => event.title.toLowerCase().includes(title.toLowerCase()));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { title, category, location, startDate, endDate } = req.query;
    let filteredEvents = events;

    if (title) {
      filteredEvents = filterEventsByTitle(events, title as string);
    }

    if (category) {
      filteredEvents = filteredEvents.filter(event => event.category === category);
    }

    if (location) {
      filteredEvents = filteredEvents.filter(event => event.location === location);
    }

    if (startDate) {
      filteredEvents = filteredEvents.filter(event => event.date >= startDate);
    }

    if (endDate) {
      filteredEvents = filteredEvents.filter(event => event.date <= endDate);
    }

    res.status(200).json(filteredEvents);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
