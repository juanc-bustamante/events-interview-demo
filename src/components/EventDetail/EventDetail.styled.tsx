import styled from 'styled-components';

export const EventContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 2rem 0;
`;

export const EventTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const EventLabel = styled.span`
  font-weight: bold;
  color: #555;
  margin-right: 0.5rem;
`;

export const EventDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const EventCategory = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const EventLocation = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0;
`;

export const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const EventImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const EventImage = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;