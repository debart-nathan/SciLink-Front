import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import PersonnelInterface from '../../interfaces/PersonnelInterface';
const Personel = ({ id }: { id: number }) => {

  const [personelState, setPersonelState] = useState<PersonnelInterface>();

  useEffect(() => {
    personelSelect("Personels", id);
  }, []);

  async function personelSelect(
    entityName: string,
    id: number
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
            <h5 className="col-6 text-warning">First name :</h5>
          <p className="col-6"> {personelState.first_name}</p>
          </div>
          <div className="row">
            <h5 className="col-6 text-warning">Last name :</h5>
          <p className="col-6"> {personelState.last_name}</p>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default Personel;
