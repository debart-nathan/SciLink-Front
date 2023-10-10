import { useState } from "react";
import UserInterface from "../../interfaces/UserInterface";
import User from "./User";
import Researcher from "./ResearcherLinks";
import Investor from "./InvestorLinks";


const PageDetailUser = () => {
  const id = idSelect();
  const [userState, setUserState] =
    useState<UserInterface>();

    /**
   * Récupère le dernier segment du chemin d'URL actuel en tant que nombre.
   *
   * @return {number} Le dernier segment du chemin d'URL en tant que nombre.
   */
    function idSelect() {
      const pathname = window.location.pathname;
      const segments = pathname.split("/");
      const lastSegment = segments[segments.length - 1];
      return Number(lastSegment);
    }
//<Investisseur id={id}/>
  return (
    <>
      <div>
        <User
          id={id}
          userState={userState}
          setUserState={setUserState}
        />
      </div>
      <h2>Lien vers detail profils</h2>
      <div>
        <Researcher id={id}/>
      </div>
        <Investor id={id}/>
      <div>
        
      </div>

    </>
  );
};

export default PageDetailUser;