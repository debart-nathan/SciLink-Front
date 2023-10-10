import React from "react";
import { useFormContext } from "react-hook-form";

interface SearchFilterBarInterface{
    searchCategoryClassName:string,
    searchClassName:string
}

const SearchFilterBar: React.FC<SearchFilterBarInterface>= ({searchCategoryClassName,searchClassName}) => {
    // recuperation de register des variables passé par FormProvider
    const { register } = useFormContext();


    /*register : ajoute le field au formData du form.
        sont argument devient le nom du field.
        on peut mettre un . pour créer des sous clé.
        ex: la data de patate.field1
        seras ajouté come suivant au fromData

        {
            "patate": [
                {"field1" : value}
            ]
        }
    */
    return (
        <>
            <select className={searchCategoryClassName} {...register("category")}>
                <option className="form-check" value="">Tous</option>
                <option className="form-check" value="research-center">Centre de Recherche</option>
                <option className="form-check" value="searcher">Chercheur</option>
                <option className="form-check" value="investor">Investisseur</option>
            </select>
            <input type="search" className={searchClassName} placeholder="rechercher"{...register("search")}/>
        </>
    );
};

export default SearchFilterBar;
