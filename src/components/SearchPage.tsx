import React, { useState } from "react";
import SearchFilterMain from "./filter/SearchFilterMain";
import DisplayCardE from "./CardList/DisplayCardE";
import DisplayListE from "./CardList/DisplayListE";
import fakeData from "./CardList/FakeData";
import fakeData1 from "./CardList/FakeData1";
import fakeData2 from "./CardList/FakeData2";
import fakeData3 from "./CardList/FakeData3";

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
    } catch (error: any) {
      console.error("Error:", error);
    }
    //TODO REMOVE THAT WHEN THE SERVER IS READY
    if (data.category === "research-center") {
      setCards(fakeData.map((card) => ({ data: card, category: "research-center" })));
    } else if (data.category === "investor") {
      setCards(fakeData3.map((card) => ({ data: card, category: "investor" })));
    }else if (data.category === "searcher") {
        setCards(fakeData2.map((card) => ({ data: card, category: "searcher" })));
    }
  };
  return (
    <main className="row">
      <h2>Listes de Recherches</h2>
      <div className="col-10">
        <SearchFilterMain onSubmit={onSearch} />
      </div>

      <button
        className="btn btn-outline-primary col-1"
        onClick={() => setDisplayMode("list")}
      >
        Afficher en <i className="bi bi-list-task"></i>
      </button>
      <button
        className="btn btn-outline-primary col-1"
        onClick={() => setDisplayMode("card")}
      >
        Afficher en <i className="bi bi-card-list"></i>
      </button>
      {(() => {
        switch (displayMode) {
          case "card":
            return (
              <div className="row cardss">
                {cards.map((card) => {
                  return <DisplayCardE key={card.id} card={card} />;
                })}
              </div>
            );
          case "list":
            return (
              <ul className="text-light cardss">
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
