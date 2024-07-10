# Image Search Application

## Overview

This is a dynamic image search application developed using ReactJS, and TypeScript. It allows users to search for images based on a query and view the results in a responsive and adaptive interface. The application fetches data from an API and displays it in a paginated format. Users can view image details, add images to a cart, download images, and explore additional functionalities like infinite scroll and image collections.

## Getting Started

### Prerequisites

- Node.js (version 18.17.1)
- npm (version 8.5.5 or later)

### Installation

1. Clone the repository:

   ````sh
   git clone https://github.com/sahil811/image-search.git
   cd image-search

   Install dependencies:
   npm install --legacy-peer-deps

   Running the Application
   npm start```
   ````

## Features

- Responsive and adaptive design
- Dynamic search functionality
- Image details on hover
- Action buttons (Add to cart and Download) on hover
- Paginated results

## API Details

The application fetches data from the following API:
https://simple-pexels-proxy.onrender.com/search?query=car&per_page=5&page=5

### Parameters

- `query`: Search term
- `page`: Page number for results
- `per_page`: Number of results per page

## Project Structure

````image-search
├─ .gitignore
├─ .prettierrc
├─ eslint.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ logo192.png
│ ├─ logo512.png
│ ├─ manifest.json
│ └─ robots.txt
├─ README.md
├─ src
│ ├─ app
│ │ ├─ hooks.ts
│ │ └─ store.ts
│ ├─ App.module.scss
│ ├─ App.test.tsx
│ ├─ App.tsx
│ ├─ components
│ │ ├─ Footer
│ │ │ ├─ Footer.module.scss
│ │ │ └─ Footer.tsx
│ │ ├─ Header
│ │ │ ├─ Header.module.scss
│ │ │ └─ Header.tsx
│ │ ├─ ImageCard
│ │ │ ├─ ImageCard.module.scss
│ │ │ └─ ImageCard.tsx
│ │ ├─ ImageDropdown
│ │ │ ├─ ImageDropdown.module.scss
│ │ │ └─ ImageDropdown.tsx
│ │ ├─ ImageGrid
│ │ │ ├─ ImageGrid.module.scss
│ │ │ └─ ImageGrid.tsx
│ │ ├─ Loading
│ │ │ ├─ Loading.module.scss
│ │ │ └─ Loading.tsx
│ │ ├─ NextPageButton
│ │ │ ├─ NextPageButton.module.scss
│ │ │ └─ NextPageButton.tsx
│ │ ├─ Pagination
│ │ │ ├─ Pagination.module.scss
│ │ │ └─ Pagination.tsx
│ │ ├─ ResultsAndPagination
│ │ │ ├─ ResultsAndPagination.module.scss
│ │ │ └─ ResultsAndPagination.tsx
│ │ ├─ SearchBar
│ │ │ ├─ SearchBar.module.scss
│ │ │ └─ SearchBar.tsx
│ │ ├─ SearchSection
│ │ │ ├─ SearchSection.module.scss
│ │ │ └─ SearchSection.tsx
│ │ └─ TabNavigation
│ │ ├─ TabNavigation.module.scss
│ │ └─ TabNavigation.tsx
│ ├─ features
│ │ └─ images
│ │ ├─ imagesAPI.ts
│ │ └─ imagesSlice.ts
│ ├─ index.css
│ ├─ index.tsx
│ ├─ logo.svg
│ ├─ react-app-env.d.ts
│ ├─ reportWebVitals.ts
│ ├─ setupTests.ts
│ ├─ types
│ │ └─ index.d.ts
│ └─ utils
└─ tsconfig.json ```
````
