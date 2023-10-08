import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import LocationInterface from "./interfaces/LocationInterface";
const Location = ({
  id
}: {
  id: number
}) => {
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
        <section className="container">
        <p>Adresse : {locationState.adresse}</p>
        <p>Code postale : {locationState.code_postale}</p>
        <p>Commune : {locationState.commune}</p>
      </section>
      ) : null}
    </>
  );
};

export default Location;
