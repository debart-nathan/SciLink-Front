import LocationInterface from "../../interfaces/LocationInterface";
import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    UserSelect("Users", id);

  }, []);
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
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                {locationState ? (
                  <p className="col-12 col-md-3">Adresse : {locationState.address}</p>
                ) : null}
                {locationState ? (
                  <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                ) : null}
                <p className="col-12 col-md-3">Email : {userState.email}</p>
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3">
                Nom : {userState.last_name}
                </p>
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                {locationState ? (
                  <p className="col-12 col-md-3">Code Postal : {locationState.postal_code}</p>
                ): null}
                {locationState ? (
                  <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                ): null}
                <p className="col-12 col-md-3">Mot de passe : {userState.password}</p>
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3">Pseudo : {userState.user_name}</p>
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                {locationState ? (
                  <p className="col-12 col-md-3">Commune : {locationState.town}</p>
                ) : null}
                {locationState ? (
                  <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
                ) : null}
                <p className="col-12 col-md-3">Photo de Profils : {userState.photo}</p>
                <button className="btn btn-outline-warning col-md-1">
                  modifier
                </button>
              </div>
            </article>
          </section>
        </>
      ) : null}
    </>
  );
};

export default User;
