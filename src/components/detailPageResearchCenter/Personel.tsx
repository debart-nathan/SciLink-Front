import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import PersonnelInterface from '../interfaces/PersonnelInterface';
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
        <section className="container">
          <p>Id : {personelState.id}</p>
          <p>First name : {personelState.first_name}</p>
          <p>Last name : {personelState.last_name}</p>
        </section>
      ) : null}
    </>
  );
};

export default Personel;
