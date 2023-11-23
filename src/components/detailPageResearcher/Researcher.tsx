import JsonServerB from "../../services/jsonServerB";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import UserInterface from "../../interfaces/UserInterface";
import RelationStatusInterface from "../../interfaces/RelationStatusInterface";
import FormModif from "./FormModif";

const Researcher = ({
  id,
  researcherState,
  setResearcherState,
  RelationStatusState,
  setRelationStatusState,
  userState,
}: {
  id: string;
  researcherState: ResearcherInterface | undefined;
  setResearcherState: Function;
  RelationStatusState: RelationStatusInterface[] | undefined;
  setRelationStatusState: Function;
  userState: UserInterface | undefined;
}) => {
  const [refresh, setRefresh] = useState(false);
  const [isConnectedUser, setIsConnectedUser] = useState(false);
  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    ResearcherSelect("Researchers", id);
    setRelationStatusState();
  }, [refresh]);

  useEffect(() => {
    const status = async () => {
      const relationStatusSelect = await JsonServerB.EntitySelectAll(
        "RelationStatus"
      );
        await setRelationStatusState(relationStatusSelect);
         checkUser();
    };
    const checkUser = async () => {
      const id = researcherState?.user_id.toString();
      if (id) {
        const isConnected = await JsonServerB.IsConnectedUser(id);
        setIsConnectedUser(isConnected);
      }
    };

    status();
  }, [researcherState]);

  async function ResearcherSelect(entityName: string, id: string) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setResearcherState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {researcherState ? (
        <section className="row mb-2">
          <h1 className="fs-1 col-12 text-center bg-light  bi bi-piggy-bank-fill mb-5">
            {" "}
            {userState?.first_name + " " + userState?.last_name}{" "}
          </h1>

          <div className="col-12 col-md-9 offset-md-2 align-items-center ">
            <div className="row">
              <h4 className="col-12 col-md-4">Prénom:</h4>
              <p className=" col-12 col-md-8">{userState?.first_name}</p>
              <h4 className="col-12 col-md-4">Nom:</h4>
              <p className=" col-12 col-md-8">{userState?.last_name}</p>
              <h4 className="col-12 col-md-4">Description:</h4>
              <p className=" col-12 col-md-8">{researcherState.description}</p>
            </div>
            <div className="row">
              {isConnectedUser && (
                <FormModif
                  id={researcherState.user_id.toString()}
                  entityName={"Researchers"}
                  data={{
                    descriptions: researcherState.description,
                  }}
                  handleRefresh={handleRefresh}
                />
              )}
              {/* {isConnectedUser && (
                <form className="form">
                  <label className="control-label"> statuts : </label>
                                  <select name="" id="">
                                      <option value=""></option>
                    {RelationStatusState?.map(
                      (statut: { id: number; status: string }) => (
                        <option key={statut.id} value={statut.id}>
                          {statut.status}
                        </option>
                      )
                    )}
                  </select>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRefresh}
                  >
                    Modifier
                  </button>
                </form>
              )} */}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Researcher;
