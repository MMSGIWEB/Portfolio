import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/about/about';
import Modal from 'react-modal';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

Modal.setAppElement('#root'); // Définit l'élément racine pour react-modal

const router = createBrowserRouter(
  [
    {
      path: "/Portfolio",
      element: <App />
    },
    {
      path: "/about",
      element:
        <>
          <Navbar />
          <AboutMe />
          <Footer />
        </>
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