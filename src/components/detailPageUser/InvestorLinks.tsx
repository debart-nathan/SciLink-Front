import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import InvestorInterface from "../interfaces/InvestorInterface";

const InvestorLinks = ({id} : {id: number} ) => {
    const [InvestorsState, setInvestorsState] = useState<InvestorInterface[]>();
  useEffect(() => {
    InvestorSelect("Investors", "user_id", id);
  }, []);

  async function InvestorSelect(
    entityName: string,
    conditionName: string,
    condition: number
  ) {
    try {
      const response = await JsonServerB.EntitySelectWCondition(entityName, conditionName, condition);
      setInvestorsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }
  
  return (
      <div >
        {InvestorsState ? (
          <div>
          {InvestorsState.map((Investors: any) => (
          <a key={Investors.id} href={`/investor/${Investors.id}`}>Lien vers detail Investor</a>
        ))}
        </div>
        ) : null} 
      </div>
  );
};

export default InvestorLinks;