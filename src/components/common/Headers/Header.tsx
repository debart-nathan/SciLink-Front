import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import logoName from "./../../../assets/img/logoName.png";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = () => {
    setIsConnected(true);
  };

  const handleLogout = () => {
    setIsConnected(false);
  };

  return (
    <header id="nav" className="mt-3 mb-5">
      <nav className="row justify-content-around align-items-center text-center">
        <div className="col-12 col-md-1">
          <Link to="/">
            <img src={logoName} className="img-fluid" alt="logo Accueil" />
          </Link>
        </div>
        <div className="col-12 col-md-1">
          <Link className="disabled display-none" to="/Projects">
            Projets
          </Link>
        </div>
        <div className="col-12 col-md-1">
          <Link to="/recherche?category=investor">Investisseurs</Link>
        </div>
        <div className="col-12 col-md-2 text-center">
          <Link to="/recherche?category=research-center">
            Centre de Recherches
          </Link>
        </div>
        <div className="col-12 col-md-1">
          <Link to="/recherche?category=searcher">Chercheurs</Link>
        </div>
        <div className="col-12 col-md-3">
          <div className="row justify-content-end">
            <SearchBar />
          </div>
        </div>
        <div className="col-12 col-md-2 row justify-content-right align-items-center">
          {isConnected ? (
            <>
              <Link className="col-7 offset-2 btnx" to="/user">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                comptes
              </Link>
              <LogOut />
            </>
          ) : (
            <>
              <Link
                className=" btnx"
                to="/login"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Connexion
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
