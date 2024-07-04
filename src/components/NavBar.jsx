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
      <NavLink className="avant" to="/le-avant">
        Début de la grossesse
      </NavLink>
      <NavLink className="congé" to="/le-congé-maternité">
        Congé maternité
      </NavLink>
      <NavLink className="retour" to="/le-retour">
        Retour congé maternité
      </NavLink>
    </nav>
  );
};

export default NavBar;
