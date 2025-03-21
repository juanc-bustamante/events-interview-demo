import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const EventFilterContainer = styled.div`
  flex: 1;
`;

export const EventSearchContainer = styled.div`
  flex: 1;
`;

export const EventsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.large};
`;
