import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from './ImageGrid.module.scss'

interface Image {
  id: string
  title: string
  photographer: string
  imageUrl: string
}

interface ImageGridProps {
  images: Image[]
  onAddToCart: (id: string) => void
  onDownload: (id: string) => void
}

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  onAddToCart,
  onDownload,
}) => {
  return (
    <div className={styles.imageGrid}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          {...image}
          onAddToCart={() => onAddToCart(image.id)}
          onDownload={() => onDownload(image.id)}
        />
      ))}
    </div>
  )
}

export default ImageGrid
