import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import CreateProfileResearcher from './CreateProfileResearcher';

const ResearcherLinks = ({ id , userState }: { id: string , userState: any}) => {
  const [researchersState, setResearchersState] =
    useState<ResearcherInterface[]>();
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    ResearcherSelect("Researchers", "app_user", id);
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      const isConnected = await JsonServerB.IsConnectedUser(id);
      setIsConnectedUser(isConnected);
    };

    checkUser();
  }, [id]);

  async function ResearcherSelect(
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
      setResearchersState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {isConnectedUser && <CreateProfileResearcher userId={id}/>}
      {researchersState ? (
        <div className="row border border-danger border-bottom-0 mt-2">
          {researchersState.map((researchers: any) => (
            <a
              className="col-12 col-md-12 text-danger"
              key={researchers.id}
              href={`/researcher/${researchers.id}`}
            >
              Profil chercheur de {userState.first_name} {userState.last_name}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ResearcherLinks;