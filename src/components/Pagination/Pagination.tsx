import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [goToPage, setGoToPage] = useState('');

  const handleGoToPage = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNumber = parseInt(goToPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      setGoToPage('');
    }
  };

  return (
    <div className={styles.pagination}>
      {/* <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        First
      </button> */}
      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      {/* <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        Last
      </button> */}
      <form onSubmit={handleGoToPage} className={styles.goToPageForm}>
        <label htmlFor="goToPage" className={styles.goToPageLabel}>Go to page</label>
        <input
          type="number"
          min="1"
          max={totalPages}
          value={goToPage}
          onChange={(e) => setGoToPage(e.target.value)}
          // placeholder="Go to page"
          className={styles.goToPageInput}
        />
        <button type="submit" className={styles.goToPageButton}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Pagination;