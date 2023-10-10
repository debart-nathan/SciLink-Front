import React from "react";
import InvestorInterface from "../../interfaces/InvestorInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.

interface CenterProps {
    data: InvestorInterface;
}

const InvestorCardE: React.FC<CenterProps> = ({ data }) => {
    return (
        <article key={data.id} className="card col-4">
            <div className="content">
                <h2>{data.sigle}</h2>
                <h3>{data.nom}</h3>
                <p>
                    <i>label: {data.label}</i>
                    <b>nature: {data.nature}</b>
                </p>
                <a className="btn " href="">
                    voir plus
                </a>
            </div>
        </article>
    );
};

export default InvestorCardE;