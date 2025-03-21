import { useEffect, useReducer, useState } from 'react';
import { Event } from '../types';
import { eventReducer, initialState } from '../reducers/eventReducer';

const useFetchEvent = (eventId: string) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  const [event, setEvent] = useState<Event | undefined>(undefined);
  const { loading } = state;

  useEffect(() => {
    const fetchEvent = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await fetch(`/api/events/${eventId}`);
      const data = await response.json();
      dispatch({ type: 'SET_LOADING', payload: false });
      setEvent(data);
    };

    fetchEvent();
  }, [eventId]);

  return { event, loading, dispatch };
};

export default useFetchEvent;