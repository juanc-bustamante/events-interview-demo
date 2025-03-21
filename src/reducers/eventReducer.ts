import { Event, FilterOptions } from '../types';

type EventData = {
  events: Event[];
  searchTerm: string;
  filters: FilterOptions;
};

type State = {
  eventsData: EventData[];
  loading: boolean;
};

type Action =
  | { type: 'SET_EVENTS'; payload: { events: Event[]; searchTerm: string; filters: FilterOptions } }
  | { type: 'SET_LOADING'; payload: boolean };

export const initialState: State = {
  eventsData: [],
  loading: true,
};

export function eventReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        eventsData: [...state.eventsData, { events: action.payload.events, searchTerm: action.payload.searchTerm, filters: action.payload.filters }],
        loading: false,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}