import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import RelationStatusInterface from "../../interfaces/RelationStatusInterface";
import CreateRelationStatus from "./CreateRelationStatus";

const RelationStatusLinks = ({ id }: { id: string }) => {
  const [RelationStatutsState, setRelationStatutsState] =
    useState<RelationStatusInterface[]>();
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    RelationStatusSelect("RelationStatuts", "app_user", id);
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      const isConnected = await JsonServerB.IsConnectedUser(id);
      setIsConnectedUser(isConnected);
    };

    checkUser();
  }, [id]);

  async function RelationStatusSelect(
    entityName: string,
    conditionName: string,
    condition: string
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(
        entityName,
        conditionName,
        condition
      );
      setRelationStatutsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  function handleSubmit(onSubmit: (data: any) => void) {}

  return (
    <>
      {isConnectedUser && <CreateRelationStatus userId={id} />}
      {RelationStatutsState ? (
        <div className="row border border-danger border-bottom-0 mt-2">
          <div className="col-md-6 col-12">
            <h4>en cours de demande</h4>
            {RelationStatutsState.map((RelationStatuts: any) => (
              <button
                type="button" // onSubmit={handleSubmit(onSubmit)}
                className="col-12 col-md-6 btnx"
                key={RelationStatuts.id}
              >
                accepter la relation avec {RelationStatuts.name}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            ))}
          </div>
          <div className="col-md-6 col-12">
            <h4>demande accepte</h4>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RelationStatusLinks;
