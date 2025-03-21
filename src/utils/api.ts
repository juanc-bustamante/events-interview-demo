import { Event } from "@/types";

const API_URL = '/api/events';

export const fetchEvents = async (): Promise<Event[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch events');
    }
    return response.json();
};

export const fetchEventById = async (id: string): Promise<Event> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch event');
    }
    return response.json();
};