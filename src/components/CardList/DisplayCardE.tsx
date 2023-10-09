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
    console.log(card);
    return (() => {
        switch (category) {
            case "research-center":
                console.log("yes");
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
