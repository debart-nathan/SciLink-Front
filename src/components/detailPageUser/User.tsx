import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";

const User = ({
  id,
  userState,
  setUserState,
}: {
  id: number;
  userState: any;
  setUserState: Function;
}) => {
  useEffect(() => {
    UserSelect("Users", id);
  }, []);

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
          <h1 className="col-12 col-md-6 offset-md-3 mb-5">
            Profils de {userState.first_name}
          </h1>
          <section className="row">
            <article className="col-12 col-md-10 offset-md-1 ">
              <div className="row">
                <p className="col-12 col-md-3">
                  Prénom : {userState.first_name}
                </p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3"></p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3">Email : {userState.email}</p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3">
                Nom : {userState.last_name}
                </p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3"></p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3">Mot de passe : {userState.password}</p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3"></p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3"></p>
                <button className="btn btn-outline-info col-md-1">
                  modifier
                </button>
                <p className="col-12 col-md-3"></p>
                <button className="btn btn-outline-info col-md-1">
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
