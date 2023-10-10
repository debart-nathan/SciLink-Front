import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import { useState } from "react";
import UserInterface from "../../interfaces/UserInterface";

const User = ({id} : {id: number} ) => {
    const [userState, setUserState] = useState<UserInterface>();

  useEffect(() => {
    UserSelect("Users", id);
  }, []);

  async function UserSelect(
    entityName: string,
    id: number
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setUserState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div>
        {userState ? (
            <div className="border border-dark">
            <h3>Utilisateur :</h3>
            <a href={`/user/${userState.id}`}>Lien vers {userState.first_name} {userState.last_name}</a>
            </div>
        ) : null}
      </div>
  );
};

export default User;