import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const ResearchCenterLinks = ({ id }: { id: string }) => {
  const [ResearchCentersState, setResearchCentersState] =
    useState<ResearchCenterInterface[]>();
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    ResearchCenterSelect("RepresentedBys", "app_user", id);
  }, [id]);

  useEffect(() => {
    const checkUser = async () => {
      const isConnected = await JsonServerB.IsConnectedUser(id);
      setIsConnectedUser(isConnected);
    };

    checkUser();
  }, [id]);

  async function ResearchCenterSelect(
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
      setResearchCentersState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {isConnectedUser && (
        <a className="btnx btn my-2 " href="/contact-us">
          <span></span>
          <span></span>
          <span></span>
          <span></span> contactez nous pour créer ou lier un centre
        </a>
      )}
      {ResearchCentersState ? (
        <div className="row border border-danger border-bottom-0 mt-2">
          {ResearchCentersState.map((ResearchCenters: any) => (
            <a
              className="col-12 col-md-6 text-danger"
              key={ResearchCenters.research_center_id}
              href={`/researchCenter/${ResearchCenters.research_center_id}`}
            >
              Lien vers {ResearchCenters.label}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ResearchCenterLinks;