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
        <section className="row">
          <h1 className="fs-1 col-12 text-center text-warning bi bi-piggy-bank-fill mb-5">
            {" "}
            {investorState.nom}{" "}
          </h1>
          <img
            width={"300px"}
            height={"auto"}
            src={investorState.img}
            className="img-fluid col-md-5"
            alt={`image de l'investisseur ${investorState.nom}`}
          />
          <div className="col-12 col-md-7 align-items-center ">
            <div className="row">
              <h4 className="col-12 col-md-4 text-warning">acronyme:</h4>
              <p className=" col-12 col-md-8">{investorState.sigle}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">Nature:</h5>
              <p className=" col-12 col-md-8">{investorState.nature}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">Label:</h5>
              <p className=" col-12 col-md-8">{String(investorState.label)}</p>
            </div>
            <div className="row">
              <FormModif
                id={id}
                entityName={"Investors"}
                data={{
                  nom: investorState.nom,
                  sigle: investorState.sigle,
                  nature: investorState.nature,
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
