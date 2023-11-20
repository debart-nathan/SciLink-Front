import { useState } from "react";
import Locateds from "./Locateds";
import ResearchCenters from "./ResearchCenter";
import Manages from "./Manages";
import Studies from "./Studies";
import Parents from "./Parents";
import Children from "./Children";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const PageDetailResearchCenters = () => {
  const id = idSelect();
  const [researchCenterState, setResearchCenterState] =
    useState<ResearchCenterInterface>();

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

  return (
    <>
        <div className="row justify-content-around">
          <Parents id={id} />
          <Children id={id} />
        </div>
      <div>
        <ResearchCenters
          id={id}
          researchCenterState={researchCenterState}
          setResearchCenterState={setResearchCenterState}
        />
        <section className="row">
          <Manages id={id} />
          <Studies id={id} />
          <Locateds id={id} />
        </section>
      </div>
    </>
  );
};

export default PageDetailResearchCenters;
