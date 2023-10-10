
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";


type DeleteProfileFormProps = {
    researchCenterProfiles: any[];
    searcherProfiles: any[];
    investorProfiles: any[];
    onSubmit: (data: any) => void;
};


const DeleteProfileForm: React.FC<DeleteProfileFormProps> = ({
    researchCenterProfiles,
    searcherProfiles,
    investorProfiles,
    onSubmit,
}) => {
    // Initialisation du formulaire
    const {control, register, handleSubmit, watch } = useForm();
    const profileType = watch("profileType");

    // Initialisation de l'état des profils
    const [profiles, setProfiles] = useState<any[]>([]);

    // Mise à jour de l'état des profils en fonction du type de profil sélectionné
    useEffect(() => {
        switch (profileType) {
            case "research-center":
                setProfiles(researchCenterProfiles);
                break;
            case "searcher":
                setProfiles(searcherProfiles);
                break;
            case "investor":
                setProfiles(investorProfiles);
                break;
            default:
                setProfiles([]);
        }
    }, [
        profileType,
        researchCenterProfiles,
        searcherProfiles,
        investorProfiles,
    ]);

    // Rendu du composant
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("profileType")}>
                <option value="research-center">Centre de Recherche</option>
                <option value="searcher">Chercheur</option>
                <option value="investor">Investisseur</option>
            </select>

            <Controller
    name="profileId"
    control={control}
    render={({ field }) => (
        <Select
            {...field}
            options={profiles.map((profile) => ({
                value: profile.id,
                label: profile.displayText,
            }))}
        />
    )}
/>

            <input type="submit" value="Supprimer le profil" />
        </form>
    );
};

// Exportation du composant
export default DeleteProfileForm;