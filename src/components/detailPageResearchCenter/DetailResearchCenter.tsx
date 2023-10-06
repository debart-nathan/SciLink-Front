import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailLocated from './DetailLocateds';
const DetailResearchCenter = ({id , ResearchCenterState , setResearchCenterState} : {id: number, ResearchCenterState: any, setResearchCenterState: Function} ) => {


  useEffect(() => {
    ResearchCenterSelect("ResearchCenters", id);
  }, []);

  async function ResearchCenterSelect(
    entityName: string,
    id: number
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      console.log(`ResearchCenters` + response);
      setResearchCenterState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  
  return (
      <div>
          <section className="container">
            <h1 className="text-center">Nom : {ResearchCenterState.libele}</h1>
            <h2>Sigle : {ResearchCenterState.sigle}</h2>
            <p>Année de fondation : {ResearchCenterState.founding_year}</p>
            <p>En activité : {String(ResearchCenterState.is_active)}</p>
            <p>Site Web : {ResearchCenterState.website}</p>
            <p>Fiche : {ResearchCenterState.fiche_msr}</p>
          </section>
      </div>
  );
};

export default DetailResearchCenter;
