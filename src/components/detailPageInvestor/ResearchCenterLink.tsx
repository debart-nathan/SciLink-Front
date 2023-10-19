import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import { useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const ResearchCenter = ({id} : {id: number} ) => {
    const [ResearchCenterState, setResearchCenterState] = useState<ResearchCenterInterface>();

  useEffect(() => {
    ResearchCenterSelect("ResearchCenters", id);
  }, [id]);

  async function ResearchCenterSelect(
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
        {ResearchCenterState ? (
            <a className="text-danger" href={`/ResearchCenter/${ResearchCenterState.id}`}>Lien vers {ResearchCenterState.libele}</a>
        ) : null}
      </div>
  );
};

export default ResearchCenter;