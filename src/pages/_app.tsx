import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../assets/styles/main.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
