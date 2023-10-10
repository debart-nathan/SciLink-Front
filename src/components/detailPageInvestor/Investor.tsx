import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";
import FormModif from "./FormModif";
import { useState } from "react";



const Investor = ({id , investorState , setInvestorState} : {id: number, investorState: InvestorInterface | undefined, setInvestorState: Function} ) => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    investorSelect("Investors", id);
  }, [refresh]);

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
        <h1>Nom : {investorState.nom}  </h1>
        <p>Sigle : {investorState.sigle}</p>
        <p>Nature : {investorState.nature}</p>
        <p>Label : {investorState.label}</p>
        <FormModif id={id} entityName={"Investors"} data={{
          "nom": investorState.nom,
          "sigle": investorState.sigle,
          "nature": investorState.nature,
          "label": investorState.label }} handleRefresh={handleRefresh}  />
          </section>) : null}
      </div>
  );
};

export default Investor;