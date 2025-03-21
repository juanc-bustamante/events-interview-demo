import styled from 'styled-components';

export const EventContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: ${({ theme }) => theme.spacing.large};
`;

export const EventTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const EventLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const EventDate = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const EventCategory = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const EventLocation = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const EventDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  line-height: 1.5;
`;

export const EventImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export const EventImage = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;