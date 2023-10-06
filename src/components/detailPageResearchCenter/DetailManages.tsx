import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailPersonels from "./DetailPersonel";
const DetailManages = ({ id , ResearchCenterState } : { id: number, ResearchCenterState: Array<any>  }) => {

  const [ManagesState, setManagesState] = useState([
    {
      research_center_id: 0,
      directeur_id: 0,
      grade: "Grade0"
    },
  ]);

  async function ManagesSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      console.log(response);
      setManagesState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  useEffect(() => {
    ManagesSelect("Manages", "research_center_id", id);
  }, [ResearchCenterState]);
    
  return (
    <>
        {ManagesState.map((Manages: any) => (
          <DetailPersonels id={Manages.directeur_id} ManagesState={ManagesState} />
        ))}
    </>
  );
};

export default DetailManages;
