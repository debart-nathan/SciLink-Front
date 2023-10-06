import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
const DetailLocation = ({
  id,
  LocatedsState,
}: {
  id: number;
  LocatedsState: any;
}) => {
  const [LocationState, setLocationState] = useState({
    id: 0,
    adresse: "test",
    code_postale: "test",
    commune: "test",
  });

  useEffect(() => {
    LocationSelect("Locations", id);
  }, [LocatedsState]);

  async function LocationSelect(entityName: string, id: number) {
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
      <section className="container">
        <p>Adresse : {LocationState.adresse}</p>
        <p>Code postale : {LocationState.code_postale}</p>
        <p>Commune : {LocationState.commune}</p>
      </section>
    </>
  );
};

export default DetailLocation;
