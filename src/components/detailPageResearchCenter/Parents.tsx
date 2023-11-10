import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import ResearchCenterLink from "./ResearchCenterLink";
import ParentInterface from "../../interfaces/ParentInterface";
const Parents = ({ id } : { id: number }) => {

  const [parentsState, setParentsState] = useState<ParentInterface[]>();

  async function parentsSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    if (condition === 0) {
      return;
    }
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      console.log(response);
      setParentsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  useEffect(() => {
    parentsSelect("Parents", "research_center_child_id", id);
  }, []);
    
  return (
    <>
    {parentsState ? (
      <div className="col-md-5 col-12 text-start">
      <h3 className="">fais parti du groupe :</h3>
        {parentsState.map((parents: any) => (
          <ResearchCenterLink key={parents.research_center_parent_id} id={parents.research_center_parent_id}  />
        ))}</div>
    ) : null}
    
    </>
  );
};

export default Parents;
