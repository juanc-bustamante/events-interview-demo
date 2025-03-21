import { useEffect, useReducer, useCallback, useMemo } from 'react';
import { eventReducer, initialState } from '../reducers/eventReducer';
import { FilterOptions } from '../types';

const useFetchEvents = (searchTerm: string, filters: FilterOptions) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);
  const { eventsData, loading } = state;
  const events = useMemo(() => eventsData.find((data) => 
    data.searchTerm === searchTerm && JSON.stringify(data.filters) === JSON.stringify(filters)
  )?.events, [eventsData, searchTerm, filters]);

  const getQueryParams = useCallback(() => {
    const queryParams = [];
    if (searchTerm) {
      queryParams.push(`title=${searchTerm}`);
    }
    if (filters.category) {
      queryParams.push(`category=${filters.category}`);
    }
    if (filters.location) {
      queryParams.push(`location=${filters.location}`);
    }
    if (filters.startDate) {
      queryParams.push(`startDate=${filters.startDate}`);
    }
    if (filters.endDate) {
      queryParams.push(`endDate=${filters.endDate}`);
    }
    const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    return queryString;
  }, [searchTerm, filters]);

  useEffect(() => {
    const fetchEvents = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      const queryString = getQueryParams();
      if (!events) {
        const response = await fetch(`/api/events${queryString}`);
        const data = await response.json();
        dispatch({ type: 'SET_EVENTS', payload: { events: data, searchTerm, filters } });
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchEvents();
  }, [searchTerm, filters, getQueryParams, events]);

  return { events, loading, dispatch };
};

export default useFetchEvents;