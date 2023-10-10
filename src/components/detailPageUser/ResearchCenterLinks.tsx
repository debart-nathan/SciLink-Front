import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../interfaces/ResearchCenterInterface";

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
      <article className="col-12 col-md-4">
        <h4 className="text-center">Centre de Recherche</h4>
        {ResearchCentersState ? (
          <div className="row">
          {ResearchCentersState.map((ResearchCenters: any) => (
          <a className="col-12 col-md-6" key={ResearchCenters.id} href={`/researchCenter/${ResearchCenters.id}`}>Lien vers detail ResearchCenter</a>
        ))}
        </div>
        ) : null} 
      </article>
  );
};

export default ResearchCenterLinks;