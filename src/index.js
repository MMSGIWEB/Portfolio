import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about';
import ProjectInfo from './pages/info';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contact from './pages/contact';

// Configuration du routeur avec le flag "v7_fetcherPersist"
const router = createBrowserRouter(
  [
    {
      path: "/Portfolio",
      element: <App />
    },
    {
      path: "/project/:id", // Route avec paramètre d'URL
      element:
        <>
          <Navbar />
          <ProjectInfo />
          <Footer />
        </>
    },
    {
      path: "/about",
      element:
        <>
          <Navbar />
          <About />
          <Footer />
        </>
    },
    {
      path: "/contact",
      element:
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
    }
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
