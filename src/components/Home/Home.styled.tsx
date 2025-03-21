import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const Header = styled.header`
  background-image: url('https://images.pexels.com/photos/27402867/pexels-photo-27402867/free-photo-of-a-river-with-parked-cars-and-trees-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  max-width: 500px;
  background-color:rgba(181, 158, 125, 0.85);
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
