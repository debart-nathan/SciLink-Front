import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
const DetailDomaine = ({ id , StudiesState } : { id: number, StudiesState: any  }) => {
    
  const [DomaineState, setDomaineState] = useState(
    {
      domain_id: 1,
      name: "Domaine1"
    },
  );

  useEffect(() => {
    DomaineSelect("Domaines", id);
  }, [StudiesState]);


  async function DomaineSelect(
    entityName: string,
    id: number
  ) {
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
          <section className="container">
            <p>Nom du domaine : {DomaineState.name}</p>
          </section>

    </>
  );
};

export default DetailDomaine;
