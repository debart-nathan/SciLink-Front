import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import Domain from "./Domain";
import StudyInterface from "../../interfaces/StudyInterface";

const Studies = ({ id }: { id: number }) => {
  const [studiesState, setStudiesState] = useState<StudyInterface[]>();

  async function studiesSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(
        entityName,
        conditionName,
        condition
      );
      console.log(response);
      setStudiesState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  useEffect(() => {
    studiesSelect("Studies", "research_center_id", id);
  }, [id]);

  return (
    <>
      {studiesState ? (
        <div className="col-md-4 border border-bottom-0 border-danger">
          <h3 className="text-center">Domaines étudier :</h3>
          {studiesState.map((Studies: any) => (
            <Domain key={Studies.domain_id} id={Studies.domain_id} />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Studies;
