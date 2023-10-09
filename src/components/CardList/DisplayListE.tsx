import ResearchCenterListE from "./ResearchCenterListE";

interface CardProp {
    card: {
        category: string;
        data: any;
    };
}

const DisplayListE: React.FC<CardProp> = ({card}) => {
    const { category, data } = card;
    return (() => {
        switch (category) {
            case "research-center":
                return (
                    <li key={data.id} className="list-group-item col-12 border border-underline">
                        <ResearchCenterListE data={data} />
                    </li>
                );

            default:
                return <></>;
        }
    })();
};

export default DisplayListE;
