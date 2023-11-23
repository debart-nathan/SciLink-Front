import { useState, } from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import UserInterface from "../../interfaces/UserInterface";
import Researcher from "./Researcher";
import UserLink from "./UserLink";
import Practices from "./Practices";
import RelationStatusInterface from "../../interfaces/RelationStatusInterface";

const PageDetailResearcher = () => {
  const id = idSelect();
  const [researcherState, setResearcherState] = useState<ResearcherInterface>();
  const [userState, setUserState] = useState<UserInterface>();
  const [RelationStatusState, setRelationStatusState] = useState<RelationStatusInterface[]>();

  /**
   * Récupère le dernier segment du chemin d'URL actuel en tant que nombre.
   *
   * @return {number} Le dernier segment du chemin d'URL en tant que nombre.
   */
  function idSelect() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment;
  }
  return (
    <>
      <div>
        <Researcher
          id={id}
          researcherState={researcherState}
          setResearcherState={setResearcherState}
          RelationStatusState={RelationStatusState}
         setRelationStatusState={setRelationStatusState}
          userState={userState}
        />
      </div>
      <section className="row">
        <Practices id={id} />

        {researcherState && researcherState.user_id && (
          <UserLink
            id={researcherState?.user_id?.toString()}
            userState={userState}
            setUserState={setUserState}
          />
        )}
      </section>
    </>
  );
};

export default PageDetailResearcher;
