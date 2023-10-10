import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DomaineInterface from "../../interfaces/DomaineInterface";
const Domaine = ({ id } : { id: number  }) => {
    
  const [domaineState, setDomaineState] = useState<DomaineInterface>();

  useEffect(() => {
    domaineSelect("Domaines", id);
  }, [id]);


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
      <article className="">
            <h5>{domaineState.name}</h5>
          </article>
    ) : null}
    </>
  );
};

export default Domaine;
