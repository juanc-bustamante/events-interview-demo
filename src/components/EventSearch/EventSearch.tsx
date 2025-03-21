import React, { useRef, useEffect, useState } from 'react';
import { SearchContainer, SearchInput } from './EventSearch.styled';

interface EventSearchProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

const EventSearch: React.FC<EventSearchProps> = ({ searchTerm, onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(debouncedSearchTerm);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchTerm, onSearch]);

  return (
    <SearchContainer>
      <SearchInput
        ref={inputRef}
        type="text"
        value={debouncedSearchTerm}
        onChange={handleChange}
        placeholder="Search events"
      />
    </SearchContainer>
  );
};

export default EventSearch;