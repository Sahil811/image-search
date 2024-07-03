import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCamera } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.searchWrapper}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search images..."
            className={styles.input}
          />
        </div>
      </form>
      <button className={styles.imageSearchButton} type="submit">
        <FontAwesomeIcon icon={faCamera} className={styles.cameraIcon}/>
        <span className={styles.imageSearchText}>Search by image</span>
      </button>
    </div>
  );
};

export default SearchBar;