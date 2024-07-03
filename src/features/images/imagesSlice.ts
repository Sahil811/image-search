import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { searchImages, SearchParams, SearchResponse, Photo } from './imagesAPI';

interface ImagesState {
  photos: Photo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentPage: number;
  totalResults: number;
  searchQuery: string;
}

const initialState: ImagesState = {
  photos: [],
  status: 'idle',
  error: null,
  currentPage: 1,
  totalResults: 0,
  searchQuery: '',
};

export const fetchImages = createAsyncThunk<SearchResponse, SearchParams>(
  'images/fetchImages',
  async (params) => {
    const response = await searchImages(params);
    return response;
  }
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.photos = action.payload.photos;
        state.totalResults = action.payload.total_results;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch images';
      });
  },
});

export const { setSearchQuery, setCurrentPage } = imagesSlice.actions;

export const selectPhotos = (state: RootState) => state.images.photos;
export const selectImagesStatus = (state: RootState) => state.images.status;
export const selectImagesError = (state: RootState) => state.images.error;
export const selectCurrentPage = (state: RootState) => state.images.currentPage;
export const selectTotalResults = (state: RootState) => state.images.totalResults;
export const selectSearchQuery = (state: RootState) => state.images.searchQuery;

export default imagesSlice.reducer;