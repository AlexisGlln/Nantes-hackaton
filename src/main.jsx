import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AnnonceGrossesse from "./pages/AnnonceGrossesse";
import LeRetour from "./pages/LeRetour";
import LeAvant from "./pages/LeAvant";
import LeCongéMaternité from "./pages/LeCongéMaternité";
import Accueil from "./pages/Accueil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
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
        path: "/le-avant",
        element: <LeAvant />,
      },
      {
        path: "/le-congé-maternité",
        element: <LeCongéMaternité />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
