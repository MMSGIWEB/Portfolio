import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fiche from './pages/Fiche';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {//chemin avec paramètre URL avec id unique
    path: "/fiche/:id",
    element:
      <>
        <Fiche />
      </>
  },
  {
    path: "/about",
    element:
      <>
        <About />
      </>
  }
])

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
