import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";
import InvestorInterface from "../../interfaces/InvestorInterface";
import FormModif from "./FormModif";
import { useState } from "react";

const Investor = ({
  id,
  investorState,
  setInvestorState,
}: {
  id: number;
  investorState: InvestorInterface | undefined;
  setInvestorState: Function;
}) => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    investorSelect("Investors", id);
  }, [refresh]);

  async function investorSelect(entityName: string, id: number) {
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
          <img
            width={"300px"}
            height={"auto"}
            src={investorState.img}
            className="img-fluid col-md-5"
            alt={`image de l'investisseur ${investorState.name}`}
          />
          <div className="col-12 col-md-7 align-items-center ">
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
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Investor;
