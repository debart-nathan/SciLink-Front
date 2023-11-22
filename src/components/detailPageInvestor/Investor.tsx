import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";
import FormModif from "./FormModif";

const Investor = ({
  id,
  investorState,
  setInvestorState,
}: {
  id: string;
  investorState: InvestorInterface | undefined;
  setInvestorState: Function;
}) => {
  const [refresh, setRefresh] = useState(false);
  const [isConnectedUser, setIsConnectedUser] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    investorSelect("Investors", id);
  }, [refresh]);

  useEffect(() => {
    const checkUser = async () => {
      if (investorState && investorState.user_id !== null) {
        const isConnected = await JsonServerB.IsConnectedUser(investorState.user_id.toString());
        setIsConnectedUser(isConnected);
      } else {
        setIsConnectedUser(false);
      }
    };

    checkUser();
  }, [investorState]);

  async function investorSelect(entityName: string, id: string) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setInvestorState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {investorState ? (
        <section className="row mb-2">
          <h1 className="fs-1 col-12 text-center bg-light bi bi-piggy-bank-fill mb-5">
            {" "}
            {investorState.name}{" "}
          </h1>
          <div className="col-12 col-md-9 offset-md-2 align-items-center ">
            <div className="row">
              <h4 className="col-12 col-md-4">acronyme:</h4>
              <p className=" col-12 col-md-8">{investorState.sigle}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">Nature:</h5>
              <p className=" col-12 col-md-8">{investorState.type}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">Label:</h5>
              <p className=" col-12 col-md-8">{String(investorState.label)}</p>
            </div>
            <div className="row">
              {isConnectedUser && (
                <FormModif
                  id={id}
                  entityName={"Investors"}
                  data={{
                    nom: investorState.name,
                    sigle: investorState.sigle,
                    nature: investorState.type,
                    label: investorState.label,
                  }}
                  handleRefresh={handleRefresh}
                />
              )}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Investor;