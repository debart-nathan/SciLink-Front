import React from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.


interface CenterProps {
    data: ResearchCenterInterface;
}

const ResearchCenterListE: React.FC<CenterProps> = ({ data }) => {
    return (
      <article className="my-3 row" key={data.id}>
        <h2>{data.libele}</h2>
        <p className="col-md-6 col-12">Sigle: {data.sigle}</p>
        <p className="col-md-6 col-12">Année de fondation: {data.founding_year}</p>
        <p className="col-md-6 col-12">Statut: {data.is_active ? "Actif" : "Inactif"}</p>
        <p className="col-md-6 col-12">
          Site Web:
          <a
            href={data.website}
            className="text-danger"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.website}
          </a>
        </p>
        <p className="col-md-6 col-12">
          Fiche d'information:
          <a
            href={data.fiche_msr}
            className="text-danger"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.fiche_msr}
          </a>
        </p>
        <a className="text-danger text-end" href={"/researchCenter/" + data.id}>
          voir plus
        </a>
      </article>
    );
};

export default ResearchCenterListE;
