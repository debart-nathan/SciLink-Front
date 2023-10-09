import React from "react";
import { useFormContext } from "react-hook-form";

const SearchFilterBar: React.FC = () => {
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
            <select {...register("category")}>
                <option value="">Tous</option>
                <option value="research-center">Centre de Recherche</option>
            </select>
            <input {...register("search")}/>
        </>
    );
};

export default SearchFilterBar;
