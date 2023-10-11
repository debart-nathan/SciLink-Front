import React from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface"; 
import UserInterface from "../../interfaces/UserInterface";

interface CenterProps {
    data: {user:UserInterface, profil:ResearcherInterface};
}

const SearcherListE: React.FC<CenterProps> = ({ data }) => {
    return (
        <article key={data.profil.id}>
            <h2>{data.user.last_name}</h2>
            <h3>{data.user.first_name}</h3>
            <p className="col-6">{data.user.email}</p>
           
            <a className="btn " href={"/researcher/"+data.profil.id}>
                voir plus
            </a>
        </article>
    );
};

export default SearcherListE;
