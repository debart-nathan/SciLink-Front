import React from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.


interface CenterProps {
    data: ResearchCenterInterface;
}

const ResearchCenterListE: React.FC<CenterProps> = ({ data }) => {
    return (
        <article>
            <h2>{data.libele}</h2>
            <p className="col-6">Sigle: {data.sigle}</p>
            <p className="col-6">Année de fondation: {data.founding_year}</p>
            <p className="col-6">
                Statut: {data.is_active ? "Actif" : "Inactif"}
            </p>
            <p className="col-6">
                Site Web:{" "}
                <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.website}
                </a>
            </p>
            <p className="col-6">
                Fiche d'information:{" "}
                <a
                    href={data.fiche_msr}
                    target="_blank"
                    rel="noopener noreferrer">
                    {data.fiche_msr}
                </a>
            </p>
            <a className="btn " href="">
                voir plus
            </a>
        </article>
    );
};

export default ResearchCenterListE;
