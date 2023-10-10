import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import InvestorInterface from "../interfaces/InvestorInterface";


const Investor = ({id , investorState , setInvestorState} : {id: number, investorState: InvestorInterface | undefined, setInvestorState: Function} ) => {

  useEffect(() => {
    investorSelect("Investors", id);
  }, []);

  async function investorSelect(
    entityName: string,
    id: number
  ) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setInvestorState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div >
        {investorState ? (<section className="border border-dark">
        <h1>Nom : {investorState.nom}</h1>
        <p>Sigle : {investorState.sigle}</p>
        <p>Nature : {investorState.nature}</p>
        <p>Label : {investorState.label}</p>
          </section>) : null}
      </div>
  );
};

export default Investor;