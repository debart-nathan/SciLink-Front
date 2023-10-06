import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailLocateds from "./DetailLocateds";
import DetailLocation from "./DetailLocation";
import DetailResearchCenters from "./DetailResearchCenter";
import DetailManages from "./DetailManages";
import DetailStudies from "./DetailStudies";
const PageDetailResearchCenters = () => {
  const id = idSelect();
  const [ResearchCenterState, setResearchCenterState] = useState<any>(
    {
      id: 1,
      libele: "",
      sigle: "",
      founding_year: "",
      is_active: false,
      website: "",
      fiche_msr: "",
    },
  );

/**
 * Retrieves the full path of the current page.
 *
 * @return {string} The last segment of the full path.
 */
  function idSelect() {
    // Récupère le chemin complet de la page actuelle
    const cheminComplet = window.location.pathname;
    const segments = cheminComplet.split("/");
    const dernierSegment = segments[segments.length - 1];
    return Number(dernierSegment);
  }

  return (
    <>
      <DetailResearchCenters
        id={id}
        ResearchCenterState={ResearchCenterState}
        setResearchCenterState={setResearchCenterState}
      />
      <DetailLocateds id={id} ResearchCenterState={ResearchCenterState} />
      <DetailManages id={id} ResearchCenterState={ResearchCenterState} />
      <DetailStudies id={id} ResearchCenterState={ResearchCenterState} />
    </>
  );
};

export default PageDetailResearchCenters;
