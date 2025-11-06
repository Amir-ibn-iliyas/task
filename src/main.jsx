import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Import your pages
import HomePage from './pages/HomePage.jsx';
// import GeneratorPage from './pages/GeneratorPage.jsx'; 

// This defines all your app's routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: '/', // The root path
        element: <HomePage />, 
      },
      // {
      //   path: '/generate', // Example for a future page
      //   element: <GeneratorPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);