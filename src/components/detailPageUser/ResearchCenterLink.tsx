import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import { useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const ResearchCenter = ({id} : {id: string} ) => {
    const [researchCenterState, setResearchCenterState] = useState<ResearchCenterInterface>();

  useEffect(() => {
    ResearchCenterSelect("ResearchCenters", id);
  }, [id]);

  async function ResearchCenterSelect(
    entityName: string,
    id: string
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setResearchCenterState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
    <>
      {researchCenterState ? (
        <div>
          <a className="text-danger" href={`/researchCenter/${researchCenterState.id}`}>
            Lien vers {researchCenterState.label}
          </a>
        </div>
      ) : null}
    </>
  );
};

export default ResearchCenter;