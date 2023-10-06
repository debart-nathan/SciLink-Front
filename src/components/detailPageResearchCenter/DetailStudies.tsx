import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailDomaine from "./DetailDomaine";
const DetailStudies = ({ id , ResearchCenterState } : { id: number, ResearchCenterState: Array<any>  }) => {

  const [StudiesState, setStudiesState] = useState([
    {
      research_center_Id: 0,
      domain_id: 0,
    },
  ]);

  async function StudiesSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      console.log(response);
      setStudiesState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  useEffect(() => {
    StudiesSelect("Studies", "research_center_id", id);
  }, [ResearchCenterState]);
    
  return (
    <>
        {StudiesState.map((Studies: any) => (
          <DetailDomaine id={Studies.domain_id} StudiesState={StudiesState} />
        ))}
    </>
  );
};

export default DetailStudies;
