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
                <h3>{data.name}</h3>
                <p>
                    <i>label: {data.label}</i>
                    <b>nature: {data.type}</b>
                </p>
                <a className="btnx " href={"/investor/" + data.id}>
                    <span></span><span></span><span></span><span></span>
                    voir plus
                </a>
            </div>
        </article>
    );
};

export default InvestorCardE;