import React from 'react';
import ImageDropdown from '../ImageDropdown/ImageDropdown';
import SearchBar from '../SearchBar/SearchBar';
import styles from './SearchSection.module.scss';

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  return (
    <div className={styles.row}>
      <div className={styles.colDropdown}>
        <ImageDropdown />
      </div>
      <div className={styles.colSearch}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchSection;