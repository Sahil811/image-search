import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from './ResultsAndPagination.module.scss';

interface ResultsAndPaginationProps {
  text: string;
  totalResults: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  smallText?: boolean;
}

const ResultsAndPagination: React.FC<ResultsAndPaginationProps> = ({
  text,
  totalResults,
  currentPage,
  totalPages,
  onPageChange,
  smallText = false,
}) => {
  const textClass = smallText ? styles.smallText : '';

  return (
    <div className={styles.resultsAndPagination}>
      <div className={`${styles.resultsText} ${textClass}`}>{`${text} (${totalResults})`}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ResultsAndPagination;
