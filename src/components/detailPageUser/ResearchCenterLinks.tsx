import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";

const ResearchCenterLinks = ({ id }: { id: number }) => {
  const [ResearchCentersState, setResearchCentersState] =
    useState<ResearchCenterInterface[]>();
  useEffect(() => {
    ResearchCenterSelect("RepresentedBys", "app_user", id);
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
      <a className="btnx btn my-2" href="/contact-us"><span></span><span></span><span></span><span></span> contactez nous pour créer ou lier un centre</a>
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
