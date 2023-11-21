import InvestorListE from "./InvestorListE";
import ResearchCenterListE from "./ResearchCenterListE";
import SearcherListE from "./ResearcherListE";

interface CardProp {
  card: {
    category: string;
    data: any;
  };
}

const DisplayListE: React.FC<CardProp> = ({ card }) => {
  const { category, data } = card;
  return (() => {
    switch (category) {
      case "research-center":
        return (
          <li
            key={"research_center"+data.id}
            className="list-group-item col-12 border-bottom"
          >
            <ResearchCenterListE data={data} />
          </li>
        );
      case "searcher":
        return (
          <li
            key={"searcher"+data.profil.id}
            className="list-group-item col-12 border-bottom"
          >
            <SearcherListE data={data} />
          </li>
        );
      case "investor":
        return (
          <li
            key={"investor"+data.id}
            className="list-group-item col-12 border-bottom"
          >
            <InvestorListE data={data} />
          </li>
        );

      default:
        return <></>;
    }
  })();
};

export default DisplayListE;
