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

                                {cards &&
                                    Array.isArray(cards) &&
                                    cards.map((card) => {
                                        let id;
                                        if (card.category === "searcher") {
                                            id = card.data.profil.id;
                                        } else {
                                            id = card.data.id;
                                        }
                                        const key = `${card.category}-${id}`;
                                        return (
                                            <DisplayCardE
                                                key={key}
                                                card={card}
                                            />
                                        );
                                    })}

                            </div>
                        );
                    case "list":
                        return (
                            <ul className=" cardss">

                                {cards &&
                                    Array.isArray(cards) &&
                                    cards.map((card) => {
                                        let id;
                                        if (card.category === "searcher") {
                                            id = card.data.profil.id;
                                        } else {
                                            id = card.data.id;
                                        }
                                        const key = `${card.category}-${id}`;
                                        return (
                                            <DisplayListE
                                                key={key}
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
