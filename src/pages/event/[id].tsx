import { useRouter } from 'next/router';
import useFetchEvent from '../../hooks/useFetchEvent';
import EventDetail from '@/components/EventDetail/EventDetail';

const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { event, loading } = useFetchEvent(id as string);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <EventDetail event={event} />
  );
};

export default EventPage;