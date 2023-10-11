import LocationInterface from "../../interfaces/LocationInterface";
import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import FormModifUser from "./FormModifUser";

const User = ({
  id,
  userState,
  setUserState,
}: {
  id: number;
  userState: any;
  setUserState: Function;
}) => {
  const [locationState, setLocationState] = useState<LocationInterface>();
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    UserSelect("Users", id);

  }, [refresh]);
  useEffect(() => {
    if (userState) {
      LocationSelect("Locations", userState.location_id);
    }
  }, [userState]);

  
  

  async function LocationSelect(entityName: string, id: number) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      console.log(response);
      setLocationState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  async function UserSelect(entityName: string, id: number) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setUserState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {userState ? (
        <>
          <h1 className="col-12 col-md-6 offset-md-3 mb-5 text-warning">
            Profils de {userState.first_name}
          </h1>
          <section className="row">
            <article className="col-12 col-md-10 offset-md-1 ">
              <div className="row">
                <p className="col-12 col-md-3">
                  Prénom : {userState.first_name}
                </p>
                <FormModifUser id={id} entityName={"Users"} data={{"first_name": userState.first_name}} handleRefresh={handleRefresh} />
                {locationState ? (
                  <p className="col-12 col-md-3">Adresse : {locationState.address}</p>
                ) : null}
                {locationState ? (
                  <FormModifUser id={id} entityName={"Locations"} data={{"address": locationState.address}} handleRefresh={handleRefresh} />
                ) : null}
                <p className="col-12 col-md-3">Email : {userState.email}</p>
                <FormModifUser id={id} entityName={"Users"} data={{"email": userState.email}} handleRefresh={handleRefresh} />
                <p className="col-12 col-md-3">
                Nom : {userState.last_name}
                </p>
                <FormModifUser id={id} entityName={"Users"} data={{"last_name": userState.last_name}} handleRefresh={handleRefresh} />
                {locationState ? (
                  <p className="col-12 col-md-3">Code Postal : {locationState.postal_code}</p>
                ): null}
                {locationState ? (
                  <FormModifUser id={id} entityName={"Locations"} data={{"postal_code": locationState.postal_code}} handleRefresh={handleRefresh} />
                ): null}
                <p className="col-12 col-md-3">Mot de passe : {userState.password}</p>
                <FormModifUser id={id} entityName={"Users"} data={{"password": userState.password}} handleRefresh={handleRefresh} />
                <p className="col-12 col-md-3">Pseudo : {userState.user_name}</p>
                <FormModifUser id={id} entityName={"Users"} data={{"user_name": userState.user_name}} handleRefresh={handleRefresh} />
                {locationState ? (
                  <p className="col-12 col-md-3">Commune : {locationState.town}</p>
                ) : null}
                {locationState ? (
                  <FormModifUser id={id} entityName={"Locations"} data={{"town": locationState.town}} handleRefresh={handleRefresh} />
                ) : null}
                <p className="col-12 col-md-3">Photo de Profils : {userState.photo}</p>
                <FormModifUser id={id} entityName={"Users"} data={{"photo": userState.photo}} handleRefresh={handleRefresh} />
              </div>
            </article>
          </section>
        </>
      ) : null}
    </>
  );
};

export default User;
