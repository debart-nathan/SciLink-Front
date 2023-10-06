import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
const DetailPersonel = ({ id , ManagesState } : { id: number, ManagesState: any  }) => {
    
  const [PersonelState, setPersonelState] = useState(
    {
      id: 0,
      first_name: "test",
      last_name: "test"
    }
  );

  useEffect(() => {
    PersonelSelect("Personels", id);
  }, [ManagesState]);


  async function PersonelSelect(
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
          <section className="container">
            <p>Id : {PersonelState.id}</p>
            <p>First name : {PersonelState.first_name}</p>
            <p>Last name : {PersonelState.last_name}</p>
          </section>
    </>
  );
};

export default DetailPersonel;
