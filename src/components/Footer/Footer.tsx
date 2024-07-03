import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.textLarge}>366,681,625 stock photos, 360° panoramic images, vectors and videos</div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.textMedium}>My Image Search</div>
          <div className={styles.textSmall}>Changing the world one image at a time.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
