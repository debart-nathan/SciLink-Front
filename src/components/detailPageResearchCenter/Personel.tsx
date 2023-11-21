import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import PersonnelInterface from '../../interfaces/PersonnelInterface';
const Personel = ({ id }: { id: string }) => {

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
      console.log(response);
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
            <h5 className="col-6">Nom :</h5>
          <p className="col-6"> {personelState.last_name}</p>
          </div>
        
          <div className="row">
            <h5 className="col-6">Prenom :</h5>
          <p className="col-6"> {personelState.first_name}</p>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default Personel;
