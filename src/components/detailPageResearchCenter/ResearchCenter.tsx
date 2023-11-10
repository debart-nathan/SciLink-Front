import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import FormModif from "./FormModif";

const ResearchCenter = ({
  id,
  researchCenterState,
  setResearchCenterState,
}: {
  id: number;
  researchCenterState: any;
  setResearchCenterState: Function;
}) => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    researchCenterSelect("ResearchCenters", id);
  }, [refresh]);

  

  async function researchCenterSelect(entityName: string, id: number) {
    try {
      const response = await JsonServerB.EntitySelect(entityName, id);
      setResearchCenterState(response);
    } catch (error) {
      console.error(`Erreur attrapée dans ${entityName}Select : ` + error);
    }
  }

  return (
    <>
      {researchCenterState ? (
        <section className="row mb-2">
          <h1 className="fs-1 col-12 text-center bg-light bi bi-mortarboard-fill mb-5">
            {researchCenterState.libele}
          </h1>
          <img
            width={"300px"}
            height={"auto"}
            src={researchCenterState.img}
            className="img-fluid col-md-5"
            alt={`image du centre ${researchCenterState.libele}`}
          />
          <div className="col-12 col-md-7 align-items-center ">
            <div className="row">
              <h4 className="col-12 col-md-4">acronyme :</h4>
              <p className=" col-12 col-md-8">{researchCenterState.sigle}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">Année de fondation :</h5>
              <p className=" col-12 col-md-8">
                {researchCenterState.founding_year}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">En activité :</h5>
              <p className=" col-12 col-md-8">
                {String(researchCenterState.is_active)}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">Site Web :</h5>
              <p className=" col-12 col-md-8">
                <a className="text-danger" href={researchCenterState.website}>
                  {researchCenterState.website}
                </a>
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4">Fiche : </h5>{" "}
              <p className=" col-12 col-md-8">
                <a className="text-danger" href={researchCenterState.fiche_msr}>
                  {researchCenterState.fiche_msr}
                </a>
              </p>
            </div>
            <div className="">
              <FormModif
                id={id}
                entityName={"researchCenter"}
                data={{
                  libele: researchCenterState.libele,
                  sigle: researchCenterState.sigle,
                  founding_year: researchCenterState.founding_year,
                  is_active: researchCenterState.is_active,
                  website: researchCenterState.website,
                  fiche_msr: researchCenterState.fiche_msr,
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

export default ResearchCenter;
