import JsonServerB from "../../services/jsonServerB";
import { useEffect } from "react";

const ResearchCenter = ({
  id,
  researchCenterState,
  setResearchCenterState,
}: {
  id: number;
  researchCenterState: any;
  setResearchCenterState: Function;
}) => {
  useEffect(() => {
    researchCenterSelect("ResearchCenters", id);
  }, []);

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
        <section className="row">
          <h1 className=" col-12 text-center text-warning bi bi-mortarboard-fill mb-5">
            {researchCenterState.libele}
          </h1>
          <img
            src={researchCenterState.img}
            className="img-fluid h-50 w-50 col-md-6"
            alt={`image du centre ${researchCenterState.libele}`}
          />
          <div className="col-12 col-md-6 align-items-center ">
            <div className="row">
              <h4 className="col-12 col-md-4 text-warning">acronyme :</h4>
              <p className=" col-12 col-md-8">{researchCenterState.sigle}</p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">
                Année de fondation :
              </h5>
              <p className=" col-12 col-md-8">
                {researchCenterState.founding_year}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">En activité :</h5>
              <p className=" col-12 col-md-8">
                {String(researchCenterState.is_active)}
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">Site Web :</h5>
              <p className=" col-12 col-md-8">
                <a href={researchCenterState.website}>
                  {researchCenterState.website}
                </a>
              </p>
            </div>
            <div className="row">
              <h5 className="col-12 col-md-4 text-warning">Fiche : </h5>{" "}
              <p className=" col-12 col-md-8">
                <a href={researchCenterState.fiche_msr}>
                  {researchCenterState.fiche_msr}
                </a>
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ResearchCenter;
