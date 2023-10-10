import React, { useEffect, useCallback, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import SearchFilterBar from "./SearchFilterBar";
import SearchFilterResearchCenter from "./SearchFIlterResearchCenter";
import SearchFilterSearcher from "./SearchFilterSearcher";
import SearchFilterInvestor from "./SearchFilterInvestor";

interface FormProps {
    onSubmit: (data: any) => void;
}

const SearchFilterMain: React.FC<FormProps> = ({ onSubmit }) => {
    // Utilisation de l'objet location pour récupéré l'url actuel
    const location = useLocation();
    // Utilisation de l'objet navigate pour changer l'url
    const navigate = useNavigate();
    // récupère les valeurs dans l'url
    const currentQuery = queryString.parse(location.search);
    // Récupération des méthode de manipulation de form.
    const methods = useForm({ defaultValues: currentQuery as any });
    // Ajout d'un événement onChange pour tous les futures field.
    const category = methods.watch("category");

    // Utiliser une référence pour stocker la valeur précédente de "category"
    const prevCategoryRef = useRef();

    // Utilisation de l'effet pour soumettre le formulaire avec les données initiales au chargement de la page
    useEffect(() => {
        // Récupérer les données initiales du formulaire
        const initialData = methods.getValues();
        // Soumettre le formulaire avec les données initiales
        onSubmit(initialData);
    }, []); // Un tableau de dépendances vide signifie que cet effet s'exécute une fois au montage

    // Mettre à jour la référence avec la valeur actuelle de "category"
    useEffect(() => {
        prevCategoryRef.current = category;
    });
    const prevCategory = prevCategoryRef.current; // Récupérer la valeur précédente de "category"

    /**
     * prépare les valeur par default de ResearchCenterFields
     * placés dans un call back pour qu'il ne soit généré que une seule fois
     * et non pas a chaque rendus.
     * @returns les valeurs des field avec ResearchCenterFields reset
     */
    const resetResearchCenterFields = useCallback(() => {
        const values = methods.getValues();
        values["research-center"] = {
            is_active: "",
            domain: "",
            date_start: "",
            date_end: "",
        };

        return values;
    }, [methods]);

    /**
     * prépare les valeur par default de SearcherFields
     * placés dans un call back pour qu'il ne soit généré que une seule fois
     * et non pas a chaque rendus.
     * @returns les valeurs des field avec SearcherFields reset
     */
    const resetSearcherFields = useCallback(() => {
        const values = methods.getValues();
        values["searcher"] = {
            domain: "",
        };

        return values;
    }, [methods]);

    /**
     * prépare les valeur par default de SearcherFields
     * placés dans un call back pour qu'il ne soit généré que une seule fois
     * et non pas a chaque rendus.
     * @returns les valeurs des field avec SearcherFields reset
     */
    const resetInvestorFields = useCallback(() => {
        const values = methods.getValues();
        values["investor"] = {
            domain: "",
        };

        return values;
    }, [methods]);

    // Effet pour gérer le changement de "category"
    useEffect(() => {
        if (prevCategory !== category) {
            switch (category) {
                case "research-center":
                    methods.reset(resetResearchCenterFields());
                    break;
                case "searcher":
                    methods.reset(resetSearcherFields());
                    break;
                case "investor":
                    methods.reset(resetInvestorFields());
                    break;
                default:
                    return;
            }
        }
    }, [category]);

    // Cette fonction prend un objet de données et le "aplatit", c'est-à-dire qu'elle transforme les structures de données imbriquées en une structure de niveau supérieur.
    const flattenData = (data: any, path: string = ""): any => {
        let flattened: any = {};

        for (let prop in data) {
            let newPath = path ? `${path}.${prop}` : prop;

            if (typeof data[prop] === "object" && data[prop] !== null) {
                flattened = {
                    ...flattened,
                    ...flattenData(data[prop], newPath),
                };
            } else {
                flattened[newPath] = data[prop];
            }
        }

        return flattened;
    };

    // Cette fonction prend un objet de données et le "nettoie", c'est-à-dire qu'elle supprime toutes les propriétés dont la valeur est une chaîne vide.
    const cleanData = (data: any): any => {
        let cleaned: any = {};

        for (let prop in data) {
            if (data[prop] !== "") {
                cleaned[prop] = data[prop];
            }
        }

        return cleaned;
    };

    const onFormSubmit = (data: any) => {
        let flattenedData = flattenData(data);
        let cleanedData = cleanData(flattenedData);
        let queryString = new URLSearchParams(cleanedData).toString();

        navigate(`?${queryString}`);
    };

    /*FormProvider : Passe les variables dans tous les composent qui se trouve a l’intérieur de lui.
        Elles sont récupéré par l'appel de seFormContext() dans les dit composent
    */
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onFormSubmit)}>
                <SearchFilterBar
                    searchCategoryClassName=""
                    searchClassName=""
                />
                {category === "research-center" && (
                    <SearchFilterResearchCenter
                        resetResearchCenterFields={resetResearchCenterFields}
                    />
                )}
                {category === "searcher" && (
                    <SearchFilterSearcher
                        resetSearcherFields={resetSearcherFields}
                    />
                )}
                {category === "investor" && (
                    <SearchFilterInvestor
                        resetInvestorFields={resetInvestorFields}
                    />
                )}
                <button type="submit">rechercher</button>
            </form>
        </FormProvider>
    );
};

export default SearchFilterMain;
