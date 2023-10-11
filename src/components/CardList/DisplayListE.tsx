import InvestorListE from "./InvestorListE";
import ResearchCenterListE from "./ResearchCenterListE";
import SearcherListE from "./SearcherListE";

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
            key={data.id}
            className="list-group-item col-12 border-bottom"
          >
            <ResearchCenterListE data={data} />
          </li>
        );
      case "searcher":
        return (
          <li
            key={data.id}
            className="list-group-item col-12 border-bottom"
          >
            <SearcherListE data={data} />
          </li>
        );
      case "investor":
        return (
          <li
            key={data.id}
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
