import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ImageDropdown.module.scss';

const ImageDropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <FontAwesomeIcon icon={faImages} className={styles.icon} />
      <span>All images</span>
      <FontAwesomeIcon icon={faAngleDown} className={styles.caretIcon} />
    </div>
  );
};

export default ImageDropdown;
