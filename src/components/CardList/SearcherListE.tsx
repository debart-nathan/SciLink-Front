import React from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface"; 
import UserInterface from "../../interfaces/UserInterface";

interface CenterProps {
    data: ResearcherInterface;
    data1:  UserInterface;
}

const SearcherListE: React.FC<CenterProps> = ({ data, data1 }) => {
    const dat = data1.find((user: { id: number; })=>user.id === data.user_id);
    return (
        <article key={data.id}>
            <h2>{dat.last_name}</h2>
            <h3>{dat.first_name}</h3>
            <p className="col-6">{dat.email}</p>
           
            <a className="btn " href="">
                voir plus
            </a>
        </article>
    );
};

export default SearcherListE;
