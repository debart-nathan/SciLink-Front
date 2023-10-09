import React from "react";
import ResearchCenterCardE from "./ResearchCenterCardE";

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
                    <div>
                        <ResearchCenterCardE data={data} />
                    </div>
                );

            default:
                return <></>;
        }
    })();
};

export default DisplayCardE;
