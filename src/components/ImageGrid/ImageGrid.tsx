import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGrid.module.scss';
import { Photo } from '../../features/images/imagesAPI';

interface ImageGridProps {
  photos: Photo[];
  onAddToCart: (id: number) => void;
  onDownload: (id: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ photos, onAddToCart, onDownload }) => {
  return (
    <div className={styles.imageGrid}>
      {photos.map((photo) => (
        <ImageCard
          key={photo.id}
          {...photo}
          onAddToCart={() => onAddToCart(photo.id)}
          onDownload={() => onDownload(photo.id)}
        />
      ))}
    </div>
  );
};

export default ImageGrid;