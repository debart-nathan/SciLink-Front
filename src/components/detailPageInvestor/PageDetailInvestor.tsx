import { useState } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";
import Investor from "./Investor";
import UserLink from "./UserLink";
import Tuteles from "./Tuteles";

const PageDetailInvestor = () => {
  const id = idSelect();
  const [investorState, setInvestorState] = useState<InvestorInterface>();

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
  //<Investisseur id={id}/>
  return (
    <>
      <div>
        <Investor
          id={id}
          investorState={investorState}
          setInvestorState={setInvestorState}
        />
      </div>
      <section className="row">
        <Tuteles id={id} />
      
        {investorState && investorState.user_id && <UserLink id={investorState?.user_id?.toString()} />}
      </section>
    </>
  );
};

export default PageDetailInvestor;
