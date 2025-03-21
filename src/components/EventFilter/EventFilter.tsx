import React from 'react';
import { FilterOptions } from '@/types';
import { FilterContainer, FilterTitle, FilterLabel, FilterSelect, FilterInput } from './EventFilter.styled';

interface EventFilterProps {
  categories: string[];
  locations: string[];
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const EventFilter: React.FC<EventFilterProps> = ({ categories, locations, filters, onFilterChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    onFilterChange(updatedFilters);
  };

  return (
    <FilterContainer>
      <FilterTitle>Filter Events</FilterTitle>
      <FilterLabel>
        Category:
        <FilterSelect name="category" value={filters.category} onChange={handleChange}>
          <option key={"all"} value={""}>
            {"All"}
          </option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Location:
        <FilterSelect name="location" value={filters.location} onChange={handleChange}>
          <option key={"all"} value={""}>
            {"All"}
          </option>
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Start Date:
        <FilterInput type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
      </FilterLabel>
      <FilterLabel>
        End Date:
        <FilterInput type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
      </FilterLabel>
    </FilterContainer>
  );
};

export default EventFilter;