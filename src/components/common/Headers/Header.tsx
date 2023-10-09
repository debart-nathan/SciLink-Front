import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import logoName from "./../../../assets/img/logoName.png";

const Header = () => {
  return (
    <header className="mt-3 mb-5">
      <nav className="row justify-content-around align-items-center">
        <div className="col-12 col-md-1">
          <Link to="/">
            <img src={logoName} className="img-fluid" alt="logo Accueil" />
          </Link>
        </div>
        <div className="col-12 col-md-1">
          <Link to="/Projects">Projets</Link>
        </div>
        <div className="col-12 col-md-2">
          <Link to="/Investors">Investisseurs</Link>
        </div>
        <div className="col-12 col-md-2">
          <Link to="/ResearchCenterListe">Centre de Recherches</Link>
        </div>
        <div className="col-12 col-md-1">
          <Link to="/Domains">Domaines</Link>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-2">
          <form action="" className="row">
            <input className=" col-10" type="text" placeholder="Search" />
            <button type="submit" className="btn btn-outline-dark btn-sm col-2">
              GO
            </button>
          </form>
        </div>
        <div className="col-12 col-md-2 row justify-content-right align-items-center">
          <Link className="col-7 offset-3" to="/Accounts">comptes</Link>
        <LogOut />
        </div>
      </nav>
    </header>
  );
};

export default Header;
