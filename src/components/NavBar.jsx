import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/annonce-grossesse">Annonce de la grossesse</NavLink>
      <NavLink to="/le-retour">Le retour de grossesse</NavLink>
      <NavLink to="/le-avant">Avant l'annonce</NavLink>
      <NavLink to="/le-congé-maternité">Le congé maternité</NavLink>
    </nav>
  );
};

export default NavBar;
