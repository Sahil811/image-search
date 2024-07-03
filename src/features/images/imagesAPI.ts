import axios from 'axios';

const API_URL = 'https://simple-pexels-proxy.onrender.com/search';

export interface SearchParams {
  query: string;
  page: number;
  per_page: number;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface SearchResponse {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string;
}

export const searchImages = async (params: SearchParams): Promise<SearchResponse> => {
  const response = await axios.get<SearchResponse>(API_URL, {
    params: {
      query: params.query,
      page: params.page,
      per_page: params.per_page,
    },
  });
  return response.data;
};