import React, { useState } from "react";
import SearchFilterMain from "./SearchFilterMain";

const SearchPage = () => {
    const [cards, setCards] = useState([]);

    const onSearch = async (data: any) => {
        let url = "/cards/all";
        let body = { search: data.search };

        if (data.category !== "") {
            url = `/cards/${data.category}`;
            body = { search: data.search, ...data[data.category] };
        }

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
    };
    return (
        <main>
            <SearchFilterMain onSubmit={onSearch} />
            {cards.length > 0 ? (
                cards.map((card, index) => <div key={index}>Card</div>)
            ) : (
                <div>
                    Nous sommes désolé, mais nous avons trouvé aucun résultat
                    pour votre recherche
                </div>
            )}
        </main>
    );
};

export default SearchPage;
