import React from 'react';
import Image from 'next/image';
import { Event } from '@/types';
import { EventContainer, EventTitle, EventInfo, EventLabel, EventDate, EventCategory, EventLocation, EventDescription, EventImages, EventImage } from './EventDetail.styled';

interface EventProps {
  event: Event;
}

const EventDetail: React.FC<EventProps> = ({ event }) => {
  return (
    <EventContainer>
      <EventTitle>{event.title}</EventTitle>
      <EventInfo>
        <EventLabel>Date: </EventLabel>
        <EventDate>{event.date}</EventDate>
      </EventInfo>
      <EventInfo>
        <EventLabel>Category: </EventLabel>
        <EventCategory>{event.category}</EventCategory>
      </EventInfo>
      <EventInfo>
        <EventLabel>Location: </EventLabel>
        <EventLocation>{event.location}</EventLocation>
      </EventInfo>
      <EventDescription>{event.description}</EventDescription>
      <EventImages>
        {event.images?.map((image, index) => (
          <EventImage key={index}>
            <Image src={image} alt={`Event image ${index + 1}`} width={300} height={200} layout="responsive" />
          </EventImage>
        ))}
      </EventImages>
    </EventContainer>
  );
};

export default EventDetail;