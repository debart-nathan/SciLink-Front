import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../detailPageResearchCenter/interfaces/ResearchCenterInterface";

const ResearchCenterLinks = ({id} : {id: number} ) => {
    const [ResearchCentersState, setResearchCentersState] = useState<ResearchCenterInterface[]>();
  useEffect(() => {
    ResearchCenterSelect("RepresentedBys", "user_id", id);
  }, []);

  async function ResearchCenterSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      setResearchCentersState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div >
        {ResearchCentersState ? (
          <div>
          {ResearchCentersState.map((ResearchCenters: any) => (
          <a key={ResearchCenters.id} href={`/researchCenter/${ResearchCenters.id}`}>Lien vers detail ResearchCenter</a>
        ))}
        </div>
        ) : null} 
      </div>
  );
};

export default ResearchCenterLinks;