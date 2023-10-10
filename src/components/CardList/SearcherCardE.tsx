import React from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import UserInterface from "../../interfaces/UserInterface";

interface CenterProps {
  data: ResearcherInterface;
  data1: UserInterface;
}

const SearcherCardE: React.FC<CenterProps> = ({ data, data1 }) => {
    const dat = data1.find((user: { id: number; })=>user.id === data.user_id);
  return (
    <article key={data.id} className="card col-4">
      <div className="content">
        <h2>{dat.last_name}</h2>
        <h3>{dat.first_name}</h3>
        <p>
          <i>email: {dat.email}</i>
        </p>
        <a className="btn " href="">
          voir plus
        </a>
      </div>
    </article>
  );
};

export default SearcherCardE;
