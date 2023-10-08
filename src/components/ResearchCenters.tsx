
import { useLoaderData, useFetcher } from "react-router-dom";
import ResearchCenter from "./ResearchCenter";


const ResearchCenters = () => {
  const ResearchCenters: any = useLoaderData();
  const fetcher = useFetcher();
  

  return (
    <>
      <div className="row bg-info">
        <h2>Liste des ResearchCenters</h2>
        <button
          type="button"
          className="col-1 btn btn-primary"
          
        >&#x2B;
        </button>

        {/* <fetcher.Form
          id="ResearchCentersSelect"
          
          className="form-group col-auto row"
          action="/ResearchCenter/select"
          method="POST"
        >
          <div className="col-auto">
            <label className="col-form-label" htmlFor="ResearchCenter-select">
              Nom
            </label>
          </div>
          <div className="col-auto">
            <input
              className=" form-control"
              type="text"
              name="ResearchCenter_title"
              id="ResearchCenter-select"
            />
          </div>
          <div className="col-auto">
            <input className="btn btn-primary" type="submit" value="Ajouter" />
          </div>
        </fetcher.Form> */}
        {ResearchCenters.map((ResearchCenter: any) => (
          <ResearchCenter key={ResearchCenter.id} ResearchCenter={ResearchCenter} />
        ))}
      </div>
    </>
  );
};

export default ResearchCenters;
