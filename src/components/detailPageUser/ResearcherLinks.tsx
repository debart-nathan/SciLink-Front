import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";

const ResearcherLinks = ({ id }: { id: number }) => {
  const [researchersState, setResearchersState] =
    useState<ResearcherInterface[]>();
  useEffect(() => {
    ResearcherSelect("Researchers", "user_id", id);
  }, [id]);

  async function ResearcherSelect(
    entityName: string,
    conditionName: string,
    condition: number
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
      {researchersState ? (
        <div className="row border border-danger border-bottom-0">
          {researchersState.map((researchers: any) => (
            <a
              className="col-12 col-md-6"
              key={researchers.id}
              href={`/researcher/${researchers.id}`}
            >
              Lien vers {researchers.name}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ResearcherLinks;
