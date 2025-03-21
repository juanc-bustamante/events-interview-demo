import React from 'react';
import { EventCardContainer } from './EventCard.styled';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  onClick: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, location, category, onClick }) => {
  return (
    <EventCardContainer category={category} onClick={() => onClick(id)}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
      <p>{category}</p>
    </EventCardContainer>
  );
};

export default EventCard;