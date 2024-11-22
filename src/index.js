import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about';
import ProjectInfo from './components/fiche/info';
// import Modal from './pages/modal';

// Configuration du routeur avec le flag "v7_fetcherPersist"
const router = createBrowserRouter(
  [
    {
      path: "/Portfolio",
      element: <App />,
    },
    {
      path: "/project/:id", // Route avec paramètre d'URL
      element: <ProjectInfo />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true, // Active la persistance des fetchers
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
