import { Domain } from "domain";
import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DomaineInterface from "../../interfaces/DomaineInterface";
const Domaine = ({ id } : { id: number  }) => {
    
  const [domaineState, setDomaineState] = useState<DomaineInterface>();

  useEffect(() => {
    domaineSelect("Domaines", id);
  }, []);


  async function domaineSelect(
    entityName: string,
    id: number
  ) {
    if (id === 0) {
      return;
    }
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      console.log(response);
      setDomaineState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  return (
    <>
    {domaineState ? (
      <section className="container">
            <p>Nom du domaine : {domaineState.name}</p>
          </section>
    ) : null}
    </>
  );
};

export default Domaine;
