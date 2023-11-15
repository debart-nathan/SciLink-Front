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
          <h1 className="col-12 bg-light fs-2 col-md-6 offset-md-3 mb-5">
            Profils de {userState.first_name} {userState.last_name}
          </h1>
          <section className="row ">
            <article className="col-12 col-md-10 offset-md-1 ">
              <div className="row d-flex align-items-center ">
                <div className="col-12 col-md-3 align-self-center">
                  Prénom :
                  <p className="border-bottom border-dark border-2 d-inline ms-2">
                    {userState.first_name}
                  </p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ first_name: userState.first_name }}
                  handleRefresh={handleRefresh}
                />
                {locationState ? (
                  <div className="col-12 col-md-3 align-self-center">
                    Adresse :
                    <p className="border-bottom border-dark border-2 d-inline ms-2">
                      {locationState.address}
                    </p>
                  </div>
                ) : null}
                {locationState ? (
                  <FormModifUser
                    id={id}
                    entityName={"Locations"}
                    data={{ address: locationState.address }}
                    handleRefresh={handleRefresh}
                  />
                ) : null}
                <div className="col-12 col-md-3 align-self-center">
                  Email :
                  <p className="border-bottom border-dark border-2 d-inline ms-2"> {userState.email}</p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ email: userState.email }}
                  handleRefresh={handleRefresh}
                />
                <div className="col-12 col-md-3 align-self-center">
                  Nom :
                  <p className="border-bottom border-dark border-2 d-inline ms-2">
                    {userState.last_name}
                  </p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ last_name: userState.last_name }}
                  handleRefresh={handleRefresh}
                />
                {locationState ? (
                  <div className="col-12 col-md-3 align-self-center">
                    Code Postal :{" "}
                    <p className="border-bottom border-dark border-2 d-inline ms-2">
                      {locationState.postal_code}{" "}
                    </p>
                  </div>
                ) : null}
                {locationState ? (
                  <FormModifUser
                    id={id}
                    entityName={"Locations"}
                    data={{ postal_code: locationState.postal_code }}
                    handleRefresh={handleRefresh}
                  />
                ) : null}
                <div className="col-12 col-md-3 align-self-center">
                  Mot de passe :{" "}
                  <p className="border-bottom border-dark border-2 d-inline ms-2">
                    {userState.password}{" "}
                  </p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ password: userState.password }}
                  handleRefresh={handleRefresh}
                />
                <div className="col-12 col-md-3 align-self-center">
                  Pseudo :{" "}
                  <p className="border-bottom border-dark border-2 d-inline ms-2">
                    {" "}
                    {userState.user_name}
                  </p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ user_name: userState.user_name }}
                  handleRefresh={handleRefresh}
                />
                {locationState ? (
                  <div className="col-12 col-md-3 align-self-center">
                    Commune :{" "}
                    <p className="border-bottom border-dark border-2 d-inline ms-2">
                      {locationState.commune}{" "}
                    </p>
                  </div>
                ) : null}
                {locationState ? (
                  <FormModifUser
                    id={id}
                    entityName={"Locations"}
                    data={{ town: locationState.commune }}
                    handleRefresh={handleRefresh}
                  />
                ) : null}
                <div className="col-12 col-md-3 align-self-center">
                  Photo de Profils :
                  <p className="border-bottom border-dark border-2 d-inline ms-2"> {userState.photo}</p>
                </div>
                <FormModifUser
                  id={id}
                  entityName={"Users"}
                  data={{ photo: userState.photo }}
                  handleRefresh={handleRefresh}
                />
              </div>
            </article>
          </section>
        </>
      ) : null}
    </>
  );
};

export default User;
