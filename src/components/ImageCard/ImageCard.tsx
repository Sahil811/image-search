import React from 'react'
import styles from './ImageCard.module.scss'

interface ImageCardProps {
  id: string
  title: string
  photographer: string
  imageUrl: string
  onAddToCart: () => void
  onDownload: () => void
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  title,
  photographer,
  imageUrl,
  onAddToCart,
  onDownload,
}) => {
  return (
    <div className={styles.imageCard}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h3 className={styles.title}>
          {title} (ID: {id})
        </h3>
        <p className={styles.photographer}>By: {photographer}</p>
        <div className={styles.actions}>
          <button onClick={onAddToCart} className={styles.button}>
            Add to Cart
          </button>
          <button onClick={onDownload} className={styles.button}>
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
