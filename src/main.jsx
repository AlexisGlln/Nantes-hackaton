import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AnnonceGrossesse from './pages/AnnonceGrossesse';
import LeRetour from './pages/LeRetour';
import RetourEntreprise from './pages/RetourEntreprise';
import ParcourProfessionnel from './pages/ParcourProfessionnel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/annonce-grossesse",
    element: <AnnonceGrossesse />,
  },
  {
    path: "/le-retour",
    element: <LeRetour />,
  },
  {
    path: "/retour-entreprise",
    element: <RetourEntreprise />,
  },
  {
    path: "/parcour-professionnel",
    element: <ParcourProfessionnel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);
