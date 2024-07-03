import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>My Image Search</div>
      <div className={styles.actions}>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          Lightboxes
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          Cart
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon icon={faSignInAlt} className={styles.icon} />
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
