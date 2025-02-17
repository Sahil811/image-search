import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  fetchImages,
  setSearchQuery,
  setCurrentPage,
  selectPhotos,
  selectImagesStatus,
  selectCurrentPage,
  selectTotalResults,
  selectSearchQuery,
} from './features/images/imagesSlice';
import ImageGrid from './components/ImageGrid/ImageGrid';
import SearchSection from './components/SearchSection/SearchSection';
import TabNavigation from './components/TabNavigation/TabNavigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import ResultsAndPagination from './components/ResultsAndPagination/ResultsAndPagination';
import NextPageButton from './components/NextPageButton/NextPageButton';
import styles from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(selectPhotos);
  const status = useAppSelector(selectImagesStatus);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalResults = useAppSelector(selectTotalResults);
  const searchQuery = useAppSelector(selectSearchQuery);

  useEffect(() => {
    dispatch(fetchImages({ query: searchQuery || "nature", page: currentPage, per_page: 10 }));
  }, [searchQuery, currentPage, dispatch]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handleTabChange = (tab: string) => {
    console.log(`Tab changed to: ${tab}`);
    // Handle tab change logic here
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalResults / 10)) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handleAddToCart = (id: number) => {
    // Implement add to cart functionality
    console.log(`Add to cart: ${id}`);
  };

  const handleDownload = (imageUrl: string) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'image.jpg';
        link.click();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(error => console.error('Error downloading image:', error));
  };
  
  const onAddToCollection = (id: number) => {
    console.log(`Add to collection: ${id}`);
  };

  const onViewCollection = (id: number) => {
    console.log(`View collection: ${id}`);
  };

  const totalPages = Math.ceil(totalResults / 10);
  const capitalizedQuery = searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1);

  return (
    <div className={styles.app}>
      <Header />
      <SearchSection onSearch={handleSearch} />
      <TabNavigation onTabChange={handleTabChange} />
      {status === 'succeeded' && (
      <ResultsAndPagination
        text={`${capitalizedQuery} Stock Photos and images`}
        totalResults={totalResults}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />)}
      {status === 'loading' && <Loading />}
      {status === 'failed' && <p>Error loading images. Please try again.</p>}
      {status === 'succeeded' && (
        <>
          <ImageGrid
            photos={photos}
            onAddToCart={handleAddToCart}
            onDownload={handleDownload}
            onAddToCollection={onAddToCollection}
            onViewCollection={onViewCollection}
          />
          <NextPageButton onNextPage={handleNextPage} />
          <div className={styles.grayLine}></div>
          <ResultsAndPagination
            text={`Search Results for ${capitalizedQuery} Stock Photos and images`}
            totalResults={totalResults}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            smallText
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
