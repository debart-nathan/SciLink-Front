import React, { useState, useEffect } from "react";
import SearchFilterMain from "./filter/SearchFilterMain";
import JsonServerB from "../services/jsonServerB";
import DisplayCardE from "./CardList/DisplayCardE";
import DisplayListE from "./CardList/DisplayListE";

const SearchPage = () => {
    const [cards, setCards] = useState<Array<any>>([]);
    const [displayMode, setDisplayMode] = useState<"list" | "card">("list"); // État du mode d'affichage
    const [lastSearchData, setLastSearchData] = useState<any>(null);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: 0,
    });

    const onSearch = async (data: any) => {

        try {
            await setLastSearchData(data)
           
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
        if (lastSearchData !== null) {
            onSearch(lastSearchData);
        }
    }, [pagination.page, pagination.limit]);

    const renderPageButtons = () => {
        const totalPages = Math.ceil(pagination.total / pagination.limit);
        const currentPage = pagination.page;
        const maxButtonsToShow = 5;
        let startPage = Math.max(
            2,
            currentPage - Math.floor(maxButtonsToShow / 2)
        );
        let endPage = Math.min(
            totalPages - 1,
            currentPage + Math.floor(maxButtonsToShow / 2)
        );

        if (currentPage - startPage < Math.floor(maxButtonsToShow / 2)) {
            endPage = Math.min(
                endPage +
                    (Math.floor(maxButtonsToShow / 2) -
                        (currentPage - startPage)),
                totalPages - 1
            );
        }
        if (endPage - currentPage < Math.floor(maxButtonsToShow / 2)) {
            startPage = Math.max(
                2,
                startPage -
                    (Math.floor(maxButtonsToShow / 2) - (endPage - currentPage))
            );
        }

        const pageRange = [];
        pageRange.push(1);
        if (startPage > 2) {
            pageRange.push("...");
        }
        for (let i = startPage; i <= endPage; i++) {
            pageRange.push(i);
        }
        if (endPage < totalPages - 1) {
            pageRange.push("...");
        }
        pageRange.push(totalPages);

        return pageRange.map((page, index) =>
            page === "..." ? (
                <span key={index}>...</span>
            ) : (
                <button
                    key={"btn-page-"+page}
                    onClick={() =>
                        typeof page === "number" && handlePageChange(page)
                    }
                    disabled={typeof page === "number" && page === currentPage}>
                    {page}
                </button>
            )
        );
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
            {/* Display the pagination controls */}
            <div className="pagination-container d-flex justify-content-center align-items-center">
                <span>
                    Page {pagination.page} of{" "}
                    {Math.ceil(pagination.total / pagination.limit)}
                </span>
                <button
                    disabled={pagination.page === 1}
                    onClick={() => handlePageChange(pagination.page - 1)}>
                    précedent
                </button>
                {renderPageButtons()}
                <button
                    disabled={
                        pagination.page >=
                        Math.ceil(pagination.total / pagination.limit)
                    }
                    onClick={() => handlePageChange(pagination.page + 1)}>
                    suivant
                </button>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(
                            e.target as HTMLFormElement
                        );
                        const page = parseInt(formData.get("page") as string);
                        if (
                            !isNaN(page) &&
                            page >= 1 &&
                            page <=
                                Math.ceil(pagination.total / pagination.limit)
                        ) {
                            handlePageChange(page);
                        }
                    }}>
                    <input
                        type="text"
                        name="page"
                        placeholder="Go to page..."
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
        </main>
    );
};

export default SearchPage;
