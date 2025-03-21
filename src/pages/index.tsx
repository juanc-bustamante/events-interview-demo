import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventCard from '../components/EventCard/EventCard';
import EventFilter from '../components/EventFilter/EventFilter';
import EventSearch from '../components/EventSearch/EventSearch';
import { FilterOptions } from '../types';
import useFetchEvents from '../hooks/useFetchEvents';
import { Container, Banner, BannerTitle, FiltersContainer, EventFilterContainer, EventSearchContainer, EventsList } from '../components/Home/Home.styled';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const { events, loading } = useFetchEvents(searchTerm, filters);

  const [locations, setLocations] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await fetch('/api/events/filters');
      const data = await response.json();
      setCategories(data.categories);
      setLocations(data.locations);
    };

    fetchFilters();
  }, []);

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const onEventClick = (eventId: string) => {
    router.push(`/event/${eventId}`);
  };

  return (
      <Container>
        <Banner>
          <BannerTitle>Upcoming City Events</BannerTitle>
        </Banner>
        <FiltersContainer>
          <EventSearchContainer>
            <EventSearch searchTerm={searchTerm} onSearch={handleSearchChange} />
          </EventSearchContainer>
          <EventFilterContainer>
            <EventFilter onFilterChange={handleFilterChange} categories={categories} locations={locations} filters={filters} />
          </EventFilterContainer>
        </FiltersContainer>
        <EventsList>
          {events?.map(event => (
            <EventCard key={event.id} {...event} onClick={() => onEventClick(event.id)} />
          ))}
        </EventsList>
      </Container>
  );
};

export default Home;