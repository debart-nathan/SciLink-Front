import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DomainInterface from "../../interfaces/DomainInterface";
const Domain = ({ id } : { id: string  }) => {

  const [domainState, setDomainState] = useState<DomainInterface>();

  useEffect(() => {
    domainSelect("Domains", id);
  }, []);


  async function domainSelect(
    entityName: string,
    id: string
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setDomainState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  return (
    <>
    {domainState ? (
      <article className="row">
            <h5 className="col-md-6 col-12" >{domainState.name}</h5>
          </article>
    ) : null}
    </>
  );
};

export default Domain;
