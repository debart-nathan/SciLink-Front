import React from "react";
import ResearchCenterCardE from "./ResearchCenterCardE";
import InvestorCardE from "./InvestorCardE";
import SearcherCardE from "./SearcherCardE";

interface CardProp {
  card: {
    category: string;
    data: any;
  };
}
const DisplayCardE: React.FC<CardProp> = ({ card }) => {
  const { category, data } = card;
  return (() => {
    switch (category) {
      case "research-center":
        return (
          <>
            <ResearchCenterCardE data={data} />
          </>
        );
      case "searcher":
        return (
          <>
            <SearcherCardE data={data} />
          </>
        );
      case "investor":
        return (
          <>
            <InvestorCardE data={data} />
          </>
        );

      default:
        return <></>;
    }
  })();
};

export default DisplayCardE;
