import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App'
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
