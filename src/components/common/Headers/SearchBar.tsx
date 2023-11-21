import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import SearchFilterBar from "../../filter/SearchFilterBar";

const SearchBar: React.FC = () => {
    // Récupération des méthode de manipulation de form.
    const methods = useForm({ defaultValues: "" as any });

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
        let cleanedData = cleanData(data);
        let queryString = new URLSearchParams(cleanedData).toString();

        // Change the location and force a full page reload
        window.location.href = `/recherche?${queryString}`;
    };

    /*FormProvider : Passe les variables dans tous les composent qui se trouve a l’intérieur de lui.
        Elles sont récupéré par l'appel de seFormContext() dans les dit composent
    */
    return (
      <FormProvider {...methods}>
        <form className="row" onSubmit={methods.handleSubmit(onFormSubmit)}>
          <SearchFilterBar
            searchCategoryClassName="col-5  form-select "
            searchClassName="col-5  form-Search "
          />
          <button type="submit" className="btnx col-2 ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Go
          </button>
        </form>
      </FormProvider>
    );
};

export default SearchBar;
