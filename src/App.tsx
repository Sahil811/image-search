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
import Pagination from './components/Pagination/Pagination';
import SearchSection from './components/SearchSection/SearchSection';
import TabNavigation from './components/TabNavigation/TabNavigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';
import Loading from './components/Loading/Loading';

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

  const handleAddToCart = (id: number) => {
    // Implement add to cart functionality
    console.log(`Add to cart: ${id}`);
  };

  const handleDownload = (id: number) => {
    // Implement download functionality
    console.log(`Download: ${id}`);
  };

  const onAddToCollection = (id: number) => {
    console.log(`Add to collection: ${id}`);
  };

  const onViewCollection = (id: number) => {
    console.log(`view collection: ${id}`);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className={styles.app}>
      <Header />
      <SearchSection onSearch={handleSearch} />
      <TabNavigation onTabChange={handleTabChange} />
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
