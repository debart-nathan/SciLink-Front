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
                <option value="">Tous</option>
                <option value="research-center">Centre de Recherche</option>
            </select>
            <input className={searchClassName} placeholder="rechercher"{...register("search")}/>
        </>
    );
};

export default SearchFilterBar;
