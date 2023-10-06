import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailLocation from "./DetailLocation";
const DetailLocateds = ({ id , ResearchCenterState } : { id: number, ResearchCenterState: any  }) => {

  const [LocatedsState, setLocatedsState] = useState([
    {
      research_center_Id: 0,
      location_id: 0
    },
  ]);

  async function LocatedsSelect(
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

  useEffect(() => {
    LocatedsSelect("Locateds", "research_center_id", id);
  }, [ResearchCenterState]);
    
  return (
    <>
        {LocatedsState.map((Located: any) => (
          <DetailLocation id={Located.location_id} LocatedsState={LocatedsState} />
        ))}
    </>
  );
};

export default DetailLocateds;
