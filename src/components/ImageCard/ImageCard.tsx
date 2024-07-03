import React from 'react';
import styles from './ImageCard.module.scss';
import { Photo } from '../../features/images/imagesAPI';

interface ImageCardProps extends Photo {
  onAddToCart: () => void;
  onDownload: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  alt,
  photographer,
  src,
  onAddToCart,
  onDownload,
}) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <img src={src.medium} alt={alt} className={styles.image} />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{alt}</h3>
          <p className={styles.photographer}>By: {photographer}</p>
          <div className={styles.actions}>
            <button onClick={onAddToCart} className={styles.button}>Add to Cart</button>
            <button onClick={onDownload} className={styles.button}>Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;