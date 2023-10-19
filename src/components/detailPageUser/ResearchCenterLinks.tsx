import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const ResearchCenterLinks = ({ id }: { id: number }) => {
  const [ResearchCentersState, setResearchCentersState] =
    useState<ResearchCenterInterface[]>();
  useEffect(() => {
    ResearchCenterSelect("RepresentedBys", "user_id", id);
  }, []);

  async function ResearchCenterSelect(
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
      setResearchCentersState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {ResearchCentersState ? (
        <div className="row border border-danger border-bottom-0">
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
