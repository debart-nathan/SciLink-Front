import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";
import CreateProfileInvestor from "./CreateProfileInvestor";

const InvestorLinks = ({ id }: { id: string }) => {
  const [InvestorsState, setInvestorsState] = useState<InvestorInterface[]>();
  useEffect(() => {
    InvestorSelect("Investors", "app_user", id);
  }, []);

  async function InvestorSelect(
    entityName: string,
    conditionName: string,
    condition: string
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
    <CreateProfileInvestor userId={id}/>
      {InvestorsState ? (
        <div className="row border border-danger border-bottom-0">
          {InvestorsState.map((Investors: any) => (
            <a
              className="col-12 col-md-6 text-danger"
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
