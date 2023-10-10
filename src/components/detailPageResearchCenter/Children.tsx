import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import ResearchCenterLink from "./ResearchCenterLink";
import ParentInterface from "../../interfaces/ParentInterface";
const Children = ({
  id
}: {
  id: number;
}) => {
  const [childrenState, setChildrenState] = useState<ParentInterface[]>();
  useEffect(() => {
    childrenSelect("Parents", "research_center_parent_id", id);
  }, []);

  async function childrenSelect(
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
      setChildrenState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {childrenState ? (
        <div className="col-md-5 offset-2 col-12 text-end">
          <h3 className="text-warning">À comme sous-groupe :</h3>
          {childrenState.map((children: any) => (
            <ResearchCenterLink
              key={children.research_center_child_id}
              id={children.research_center_child_id}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Children;
