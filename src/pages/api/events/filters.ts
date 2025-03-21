import { NextApiRequest, NextApiResponse } from 'next';
import { events } from '@/utils/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const categories = Array.from(new Set(events.map(event => event.category))).sort((a,b) => a.localeCompare(b));
    const locations = Array.from(new Set(events.map(event => event.location))).sort((a,b) => a.localeCompare(b));

    res.status(200).json({
      categories,
      locations,
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}