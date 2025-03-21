import styled from 'styled-components';

export const FilterContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color:rgba(181, 158, 125, 0.85);
`;

export const FilterTitle = styled.h2`
  width: 100%;
  margin-bottom: 0;
  color: #333;
  font-size: 1rem;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
  font-size: 1rem;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`;

export const FilterInput = styled.input`
  width: 90%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
`;