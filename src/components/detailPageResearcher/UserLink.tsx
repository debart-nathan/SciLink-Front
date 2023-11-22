import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import { useState } from "react";
import UserInterface from "../../interfaces/UserInterface";

const User = ({id, userState, setUserState} : {id: string, userState: UserInterface | undefined, setUserState: Function} ) => {

  useEffect(() => {
    UserSelect("Users", id);
  }, []);

  async function UserSelect(
    entityName: string,
    id: string
  ) {
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
        <div className="col-md-4 offset-md-4 border border-bottom-0 border-danger">
          <h3 className="text-center">Utilisateur :</h3>
          <a className="text-danger" href={`/user/${userState.id}`}>
            Profil utilisateur de {userState.first_name} {userState.last_name}
          </a>
        </div>
      ) : null}
    </>
  );
};

export default User;