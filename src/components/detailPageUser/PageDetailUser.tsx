import { useState } from "react";
import UserInterface from "../../interfaces/UserInterface";
import User from "./User";
import Researcher from "./ResearcherLinks";
import Investor from "./InvestorLinks";
import ResearchCenter from "../detailPageResearchCenter/ResearchCenterLink";

const PageDetailUser = () => {
  const id = idSelect();
  const [userState, setUserState] = useState<UserInterface>();

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
      <main className=" row mt-5 text-center">
        <User id={id} userState={userState} setUserState={setUserState} />
        <section className="row">
          <h3 className="text-center mt-5 mb-5">Favoris</h3>
          <article className="col-12 col-md-4">
            <h4 className="text-center">Recherche</h4>
            <Researcher id={id} />
          </article>
          <article className="col-12 col-md-4">
            <h4 className="text-center">Centre de Recherche</h4>
            <ResearchCenter id={id} />
          </article>
          <article className="col-12 col-md-4">
            <h4 className="text-center">Investisseur</h4>
            <Investor id={id} />
          </article>
        </section>
        <section className="row">
          <h3 className="text-center mt-5 mb-5">Messagerie</h3>
          {/* reste a faire */}
        </section>
      </main>
    </>
  );
};

export default PageDetailUser;
