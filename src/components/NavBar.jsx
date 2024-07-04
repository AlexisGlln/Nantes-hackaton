import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="accueil" to="/">
        Accueil
      </NavLink>
      <NavLink className="annonce" to="/annonce-grossesse">
        Annonce de la grossesse
      </NavLink>
      <NavLink className="retour" to="/le-retour">
        Le retour de grossesse
      </NavLink>
      <NavLink className="avant" to="/le-avant">
        Avant l'annonce
      </NavLink>
      <NavLink className="congé" to="/le-congé-maternité">
        Le congé maternité
      </NavLink>
    </nav>
  );
};

export default NavBar;
