import React from 'react';
import styles from './NextPageButton.module.scss';

interface NextPageButtonProps {
  onNextPage: () => void;
}

const NextPageButton: React.FC<NextPageButtonProps> = ({ onNextPage }) => {
  return (
    <div className={styles.nextPageButtonContainer}>
      <button onClick={onNextPage} className={styles.nextPageButton}>
        Next Page
      </button>
    </div>
  );
};

export default NextPageButton;
