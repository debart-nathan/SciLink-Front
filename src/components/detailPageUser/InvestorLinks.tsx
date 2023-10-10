import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";

const InvestorLinks = ({ id }: { id: number }) => {
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
      const response = await JsonServerB.EntitySelectWCondition(
        entityName,
        conditionName,
        condition
      );
      setInvestorsState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {InvestorsState ? (
        <div className="row border border-danger border-bottom-0">
          {InvestorsState.map((Investors: any) => (
            <a
              className="col-12 col-md-6"
              key={Investors.id}
              href={`/investor/${Investors.id}`}
            >
              Lien vers {Investors.name}
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default InvestorLinks;
