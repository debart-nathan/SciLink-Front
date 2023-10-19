import React from "react";
import InvestorInterface from "../../interfaces/InvestorInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.


interface CenterProps {
    data: InvestorInterface;
}

const InvestorListE: React.FC<CenterProps> = ({ data }) => {
    return (
      <article className="my-3 row" key={data.id}>
        <h2>{data.sigle}</h2>
        <p className="col-md-6 col-12">Nom: {data.nom}</p>
        <p className="col-md-6 col-12">nature: {data.nature}</p>
        <p className="col-md-6 col-12">label: {data.label}</p>
        <a className="text-danger text-end" href={"/investor/" + data.id}>
          voir plus
        </a>
      </article>
    );
};

export default InvestorListE;
