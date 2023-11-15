import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import LocationInterface from "../../interfaces/LocationInterface";
const Location = ({ id }: { id: number }) => {
  const [locationState, setLocationState] = useState<LocationInterface>();
  useEffect(() => {
    locationSelect("Locations", id);
  }, []);

  async function locationSelect(entityName: string, id: number) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      console.log(response);
      setLocationState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  return (
    <>
      {locationState ? (
        <article className="">
          <div className="row">
            <h5 className=" col-6">Adresse : </h5>
            <p className="col-6">{locationState.address}</p>
          </div>
          <div className="row">
            <h5 className=" col-6">Code postale: </h5>
            <p className="col-6">{locationState.postal_code}</p>
          </div>
          <div className="row">
            <h5 className=" col-6">Commune : </h5>
            <p className="col-6">{locationState.commune}</p>
          </div>
        </article>
      ) : null}
    </>
  );
};

export default Location;
