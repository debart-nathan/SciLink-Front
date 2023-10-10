import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailLocation from "./Location";
import LocatedInterface from "../../interfaces/LocatedInterface";
const Locateds = ({ id  } : { id: number }) => {

  const [locatedsState, setLocatedsState] = useState<Array<LocatedInterface>>();

  useEffect(() => {
    locatedsSelect("Locateds", "research_center_id", id);
  }, []);

  async function locatedsSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      console.log(response);
      setLocatedsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
    {locatedsState ? (<div className="col-md-4 text-center border border-dark">
          <h3>Localisation :</h3>
        {locatedsState.map((located: any) => (
          <DetailLocation key={located.location_id} id={located.location_id} />
        ))}
        </div>) : null}
        
    </>
  );
};

export default Locateds;
