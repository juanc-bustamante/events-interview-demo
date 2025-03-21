import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const SearchButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  margin-left: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
