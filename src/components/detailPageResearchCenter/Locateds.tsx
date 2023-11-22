import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailLocation from "./Location";
import LocatedInterface from "../../interfaces/LocatedInterface";
const Locateds = ({ id  } : { id: string }) => {

  const [locatedsState, setLocatedsState] = useState<Array<LocatedInterface>>();

  useEffect(() => {
    locatedsSelect("Locateds", "research_center_id", id);
  }, []);

  async function locatedsSelect(
    entityName: string,
    conditionName: string,
    condition: string
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      setLocatedsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
    {locatedsState ? (<div className="col-12 col-md-4 ">
          <h3 className="text-warning text-center">Localisation :</h3>
        {locatedsState.map((located: any) => (
          <DetailLocation key={located.location_id} id={located.location_id} />
        ))}
        </div>) : null}
        
    </>
  );
};

export default Locateds;
