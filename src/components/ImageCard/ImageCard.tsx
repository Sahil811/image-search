import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDownload, faPlus, faImages } from '@fortawesome/free-solid-svg-icons';
import styles from './ImageCard.module.scss';
import { Photo } from '../../features/images/imagesAPI';

interface ImageCardProps extends Photo {
  onAddToCart: () => void;
  onDownload: () => void;
  onAddToCollection: () => void;
  onViewCollection: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  alt,
  photographer,
  src,
  onAddToCart,
  onDownload,
  onAddToCollection,
  onViewCollection,
}) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <img src={src.medium} alt={alt} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.topOverlay}>
            <p className={styles.imageText}>{alt}</p>
          </div>
          <div className={styles.bottomOverlay}>
            <p className={styles.photographerText}>
              <span className={styles.imageText}>Photographer:</span> {photographer}
            </p>
            <div className={styles.actions}>
              <button onClick={onAddToCart} className={styles.button}>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
              <button onClick={onDownload} className={styles.button}>
                <FontAwesomeIcon icon={faDownload} />
              </button>
              <button onClick={onAddToCollection} className={styles.button}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={onViewCollection} className={styles.button}>
                <FontAwesomeIcon icon={faImages} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
