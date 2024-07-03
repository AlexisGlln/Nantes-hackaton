import React from "react";
import "./App.css";
import Accueil from "./pages/Accueil";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Accueil />
      <Outlet />
    </div>
  );
}

export default App;
