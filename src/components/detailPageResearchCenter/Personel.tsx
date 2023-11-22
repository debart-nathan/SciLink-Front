import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import PersonnelInterface from '../../interfaces/PersonnelInterface';
const Personel = ({ id , grade}: { id: string , grade:string}) => {

  const [personelState, setPersonelState] = useState<PersonnelInterface>();

  useEffect(() => {
    personelSelect("Personnels", id);
  }, []);

  async function personelSelect(
    entityName: string,
    id: string
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setPersonelState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  return (
    <>
      {personelState ? (
        <article className="">
          <div className="row">
            
          <p className="col-4"> {personelState.last_name}</p>
            
          <p className="col-4"> {personelState.first_name}</p>
          
          <p className="col-4"> {grade}</p>
          </div>

        </article>
      ) : null}
    </>
  );
};

export default Personel;
