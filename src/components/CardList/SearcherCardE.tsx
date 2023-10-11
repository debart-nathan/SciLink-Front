import React from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import UserInterface from "../../interfaces/UserInterface";

interface CenterProps {
  data: {user:UserInterface,profil:ResearcherInterface} ;
}

const SearcherCardE: React.FC<CenterProps> = ({ data,  }) => {
  return (
    <article key={data.profil.id} className="card col-4">
      <div className="content">
        <h2>{data.user.last_name}</h2>
        <h3>{data.user.first_name}</h3>
        <p>
          <i>email: {data.user.email}</i>
        </p>
        <a className="btn " href="">
          voir plus
        </a>
      </div>
    </article>
  );
};

export default SearcherCardE;
