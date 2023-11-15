import React from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.

interface CenterProps {
    data: ResearchCenterInterface;
}

const ResearchCenterCardE: React.FC<CenterProps> = ({ data }) => {
    return (
      <article key={data.id} className="card col-4">
        <div className="content">
          <h2>{data.founding_year}</h2>
          <h3>{data.label}</h3>
          <p>
            <i>Sigle: {data.sigle}</i>
          </p>
                <a className="btnx" href={"/researchCenter/" + data.id}>
                    <span></span><span></span><span></span><span></span>
            voir plus
          </a>
        </div>
      </article>
    );
};

export default ResearchCenterCardE;