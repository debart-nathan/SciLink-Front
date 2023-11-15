import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";
const ResearchCenter = ({ id } : {id: number} ) => {
  const [researchCenterState, setResearchCenterState] = useState<ResearchCenterInterface>();

  useEffect(() => {
    researchCenterSelect("ResearchCenters", id);
  }, []);

  async function researchCenterSelect(
    entityName: string,
    id: number
  ) {

      try {
        const response = await JsonServerB.EntitySelect(entityName, id);
        console.log(response);
        setResearchCenterState(response);
      } catch (error) {
        console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
      }
    
  }
  return (
      <div>
        {researchCenterState ? (
          <a className="text-danger" href={`/researchCenter/${researchCenterState.id}`}>{researchCenterState.label}</a>
        ) : null}
      </div>
  );
};

export default ResearchCenter;
