import { useState } from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import Researcher from "./Researcher";
import UserLink from "./UserLink";
import Practices from "./Practices";

const PageDetailResearcher = () => {
  const id = idSelect();
  const [researcherState, setResearcherState] = useState<ResearcherInterface>();

  /**
   * Récupère le dernier segment du chemin d'URL actuel en tant que nombre.
   *
   * @return {number} Le dernier segment du chemin d'URL en tant que nombre.
   */
  function idSelect() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment;
  }
  //<Investisseur id={id}/>
  return (
    <>
      <div>
        <Researcher
          id={id}
          researcherState={researcherState}
          setResearcherState={setResearcherState}
        />
      </div>
      <section className="row">
        <Practices id={id} />
        
        {researcherState && <UserLink id={researcherState?.user_id.toString()} />}
      </section>
    </>
  );
};

export default PageDetailResearcher;
