import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";

const User = ({id , userState , setUserState} : {id: number, userState: any, setUserState: Function} ) => {

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
      <div >
        {userState ? (<section className="border border-dark">
        <h1 className="text-center">Prénom : {userState.first_name}</h1>
        <h1 className="text-center">Nom : {userState.last_name}</h1>
        <p className="text-center">Email : {userState.email}</p>
        <p className="text-center">Mot de passe : {userState.password}</p>
          </section>) : null}
      </div>
  );
};

export default User;