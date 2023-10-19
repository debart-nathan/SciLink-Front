import React from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface"; 
import UserInterface from "../../interfaces/UserInterface";

interface CenterProps {
    data: {user:UserInterface, profil:ResearcherInterface};
}

const SearcherListE: React.FC<CenterProps> = ({ data }) => {
    return (
      <article className="my-3 row" key={data.profil.id}>
        <h2>{data.user.last_name}</h2>
        <h3>{data.user.first_name}</h3>
        <p className="col-md-6 col-12">{data.user.email}</p>

        <a className="text-end  text-danger" href={"/researcher/" + data.profil.id}>
          voir plus
        </a>
      </article>
    );
};

export default SearcherListE;
