import React, { useState } from "react";
import SearchFilterMain from "./filter/SearchFilterMain";
import DisplayCardE from "./CardList/DisplayCardE";
import DisplayListE from "./CardList/DisplayListE";
import fakeData from "./CardList/FakeData";

const SearchPage = () => {
    const [cards, setCards] = useState<Array<any>>([]);
    const [displayMode, setDisplayMode] = useState<"list" | "card">("list"); // État du mode d'affichage

    const onSearch = async (data: any) => {
        let url = "/cards/all";
        let body = { search: data.search };
    
        if (data.category !== "") {
            url = `/cards/${data.category}`;
            body = { search: data.search, ...data[data.category] };
        }
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const json = await response.json(); 
            setCards(json);
        } catch (error:any) {
            console.error('Error:', error);
            
        }
          //TODO REMOVE THAT WHEN THE SERVER IS READY
        setCards(fakeData.map(card=>({data:card, category:"research-center"})))
    };
    return (
        <main className="row">
            <h2>Liste des Centres de Recherche</h2>
            <div className="col-10">
                <SearchFilterMain onSubmit={onSearch} />
            </div>

            <button
                className="btn btn-outline-primary col-1"
                onClick={() => setDisplayMode("list")}>
                Afficher en Liste
            </button>
            <button
                className="btn btn-outline-primary col-1"
                onClick={() => setDisplayMode("card")}>
                Afficher en Carte
            </button>
            {(() => {
                switch (displayMode) {
                    case "card":
                        return (
                            <div className="row">
                                {cards.map((card) => {
                                    return <DisplayCardE key={card.id} card={card} />;
                                })}
                            </div>
                        );
                    case "list":
                        return (
                            <ul>
                                {cards.map((card) => {
                                    return <DisplayListE key={card.id} card={card} />;
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
