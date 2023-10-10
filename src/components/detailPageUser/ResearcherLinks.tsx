import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearcherInterface from "../detailPageResearchCenter/interfaces/ResearcherInterface";

const ResearcherLinks = ({id} : {id: number} ) => {
    const [researchersState, setResearchersState] = useState<ResearcherInterface[]>();
  useEffect(() => {
    ResearcherSelect("Researchers", "user_id", id);
  }, []);

  async function ResearcherSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      setResearchersState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div >
        {researchersState ? (
          <div>
          {researchersState.map((researchers: any) => (
          <a key={researchers.id} href={`/researcher/${researchers.id}`}>Lien vers detail researcher</a>
        ))}
        </div>
        ) : null} 
      </div>
  );
};

export default ResearcherLinks;