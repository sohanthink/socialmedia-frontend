import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Index from './pages/registration/Index.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} > </Route>
      <Route path="/home" element={<App />} > </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
