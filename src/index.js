import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Définit l'élément racine pour react-modal

const router = createBrowserRouter(
  [
    {
      path: "/Portfolio",
      element: <App />
    }
  ],
  {
    future: {
      v7_fetcherPersist: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);