import React, { useState, useEffect } from "react";
import SearchFilterMain from "./filter/SearchFilterMain";
import JsonServerB from "../services/jsonServerB";
import DisplayCardE from "./CardList/DisplayCardE";
import DisplayListE from "./CardList/DisplayListE";

const SearchPage = () => {
    const [cards, setCards] = useState<Array<any>>([]);
    const [displayMode, setDisplayMode] = useState<"list" | "card">("list"); // État du mode d'affichage
    const [pagination, setPagination] = useState({
      page: 1,
      limit: 10,
      total: 0,
    });

    const onSearch = async (data: any) => {
        try {
              const json = await JsonServerB.PostRequest("search", {
                ...data,
                page: pagination.page,
                limit: pagination.limit,
              });
              setCards(json.results);
              setPagination({
                ...pagination,
                total: json.pagination.total,
              });
        } catch (error: any) {
            console.error("Error:", error);
        }
    };

    const handlePageChange = (newPage: number) => {
      setPagination({
        ...pagination,
        page: newPage,
      });
    };

    useEffect(() => {
      onSearch({});
    }, [pagination.page, pagination.limit]);

    const renderPageButtons = () => {
      const totalPages = Math.ceil(pagination.total / pagination.limit);
      const currentPage = pagination.page;
      const maxButtonsToShow = 10;
      // Calculer les pages à afficher en fonction de la page actuelle
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxButtonsToShow / 3)
      );
      let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 3);
      // Ajuster la position de début si nécessaire
      if (endPage - startPage + 1 < maxButtonsToShow) {
        startPage = Math.max(1, endPage - maxButtonsToShow + 1);
      }

      // Calculate the range of pages to display (e.g., 1, 2, ..., 10)
      const pageRange = [];
      for (let i = 1; i <= totalPages; i++) {
        pageRange.push(i);
      }

      return pageRange.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ));
    };

    return (
      <main className="row">
        <h2 className="bg-light fs-3">Listes de Recherches</h2>
        <div className="mt-4 col-10">
          <SearchFilterMain onSubmit={onSearch} />
        </div>

        <button
          className="btnx mt-4 col-1"
          onClick={() => setDisplayMode("list")}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="bi bi-list-task"></i>
        </button>
        <button
          className="btnx mt-4 col-1"
          onClick={() => setDisplayMode("card")}
        >
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
                      return <DisplayCardE key={key} card={card} />;
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
                      return <DisplayListE key={key} card={card} />;
                    })}
                </ul>
              );
            default:
              return "";
          }
        })()}
        {/* Display the pagination controls */}
        <div className="pagination-container">
          <span>
            Page {pagination.page} of{" "}
            {Math.ceil(pagination.total / pagination.limit)}
          </span>
          <button
            disabled={pagination.page === 1}
            onClick={() => handlePageChange(pagination.page - 1)}
          >
            précedent
                </button>
          {renderPageButtons()}
          <button
            disabled={
              pagination.page === Math.ceil(pagination.total / pagination.limit)
            }
            onClick={() => handlePageChange(pagination.page + 1)}
          >
            suivant
          </button>
        </div>
      </main>
    );
};

export default SearchPage;
