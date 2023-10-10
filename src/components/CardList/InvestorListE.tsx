import React from "react";
import InvestorInterface from "../../interfaces/InvestorInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.


interface CenterProps {
    data: InvestorInterface;
}

const InvestorListE: React.FC<CenterProps> = ({ data }) => {
    return (
        <article key={data.id}>
            <h2>{data.sigle}</h2>
            <p className="col-6">
                Nom: {data.nom }
            </p>
            <p className="col-6">
                nature: {data.nature}
            </p>
            <p className="col-6">
                label: {data.label}
            </p>
            <a className="btn " href="">
                voir plus
            </a>
        </article>
    );
};

export default InvestorListE;
