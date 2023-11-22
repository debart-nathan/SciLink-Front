import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import PracticeInterface from "../../interfaces/PracticeInterface";
import ResearchCenterLink from "./ResearchCenterLink";
import Domain from "../detailPageResearcher/Domain";
const Practices = ({ id  } : { id: string }) => {

  const [PracticesState, setPracticesState] = useState<PracticeInterface[]>();

  useEffect(() => {
    PracticesSelect("Practices", "researcher_id", id);
  }, []);

  async function PracticesSelect(
    entityName: string,
    conditionName: string,
    condition: string
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      setPracticesState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
    {PracticesState ? (
    <div className="col-md-4 border border-bottom-0 border-danger">
          <h3 className="text-center">Domaines :</h3>
        {PracticesState.map((Practice: any) => (
          <Domain key={Practice.domain_id} id={Practice.domain_id} />
        ))}
        </div>) : null}
    </>
  );
};

export default Practices;