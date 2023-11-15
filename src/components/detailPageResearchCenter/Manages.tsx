import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailPersonels from "./Personel";
import ManageInterface from "../../interfaces/ManageInterface";

const Manages = ({ id  } : { id: number }) => {

  const [managesState, setManagesState] = useState<ManageInterface[]>();

  async function managesSelect(
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
    managesSelect("Manages", "research_center_id", id);
  }, []);
    
  return (
    <>
     {managesState ? (
       <div className="col-md-4 ">
      <h3 className="text-warning text-center">Dirigeant :</h3>
        {managesState.map((manages: any) => (
          <DetailPersonels key={manages.directeur_id} id={manages.directeur_id}  />
        ))}</div>
     ) : null}
    </>
  );
};

export default Manages;
