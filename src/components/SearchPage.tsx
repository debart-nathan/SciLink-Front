import React, { useState } from "react";
import SearchFilterMain from "./filter/SearchFilterMain";
import JsonServerB from "../services/jsonServerB";
import DisplayCardE from "./CardList/DisplayCardE";
import DisplayListE from "./CardList/DisplayListE";

const SearchPage = () => {
    const [cards, setCards] = useState<Array<any>>([]);
    const [displayMode, setDisplayMode] = useState<"list" | "card">("list"); // État du mode d'affichage

    const onSearch = async (data: any) => {
        try {
            const json = await JsonServerB.PostRequest("search", data);
            setCards(json);
        } catch (error: any) {
            console.error("Error:", error);
        }
    };

    return (
        <main className="row">
            <h2 className="bg-light fs-3">Listes de Recherches</h2>
            <div className="mt-4 col-10">
                <SearchFilterMain onSubmit={onSearch} />
            </div>

            <button
                className="btnx mt-4 col-1"
                onClick={() => setDisplayMode("list")}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className="bi bi-list-task"></i>
            </button>
            <button
                className="btnx mt-4 col-1"
                onClick={() => setDisplayMode("card")}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <i className="bi bi-card-list"></i>
            </button>
            {(() => {
                switch (displayMode) {
                    case "card":
                        return (
                            <div className="row cardss">
                                {cards.map((card) => {
                                    return (
                                        <DisplayCardE
                                            key={card.data.id}
                                            card={card}
                                        />
                                    );
                                })}
                            </div>
                        );
                    case "list":
                        return (
                            <ul className=" cardss">
                                {cards.map((card) => {
                                    return (
                                        <DisplayListE
                                            key={card.data.id}
                                            card={card}
                                        />
                                    );
                                })}
                            </ul>
                        );
                    default:
                        return "";
                }
            })()}
        </main>
    );
};

export default SearchPage;
