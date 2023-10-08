import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";

const ResearchCenter = ({id , researchCenterState , setResearchCenterState} : {id: number, researchCenterState: any, setResearchCenterState: Function} ) => {

  useEffect(() => {
    researchCenterSelect("ResearchCenters", id);
  }, []);

  async function researchCenterSelect(
    entityName: string,
    id: number
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setResearchCenterState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div >
        {researchCenterState ? (<section className="border border-dark">
            <h1 className="text-center">Nom : {researchCenterState.libele}</h1>
            <h2>Sigle : {researchCenterState.sigle}</h2>
            <p>Année de fondation : {researchCenterState.founding_year}</p>
            <p>En activité : {String(researchCenterState.is_active)}</p>
            <p>Site Web : {researchCenterState.website}</p>
            <p>Fiche : {researchCenterState.fiche_msr}</p>
          </section>) : null}
      </div>
  );
};

export default ResearchCenter;
