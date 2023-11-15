import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import TuteleInterface from "../../interfaces/TuteleInterface";
import ResearchCenterLink from "./ResearchCenterLink";
const Tuteles = ({ id  } : { id: number }) => {

  const [TutelesState, setTutelesState] = useState<TuteleInterface[]>();

  useEffect(() => {
    TutelesSelect("Tuteles", "investisseur_id", id);
  }, [id]);

  async function TutelesSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      console.log(response);
      setTutelesState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
    {TutelesState ? (
    <div className="col-md-4 border border-bottom-0 border-danger">
          <h3 className="text-center">Centre de recherche liés:</h3>
        {TutelesState.map((Tutele: any) => (
          <ResearchCenterLink key={Tutele.research_center_id} id={Tutele.research_center_id} />
        ))}
        </div>) : null}
        
    </>
  );
};

export default Tuteles;