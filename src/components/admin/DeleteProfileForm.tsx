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
  const { control, register, handleSubmit, watch } = useForm();
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
  }, [profileType, researchCenterProfiles, searcherProfiles, investorProfiles]);

  // Rendu du composant
  return (
    <form
      className="form-group"
      onSubmit={handleSubmit(onSubmit)}
    >
      <select className="form-select" {...register("profileType")}>
        <option className="form-control" value="research-center">
          Centre de Recherche
        </option>
        <option className="form-control" value="searcher">
          Chercheur
        </option>
        <option className="form-control" value="investor">
          Investisseur
        </option>
      </select>

      <Controller
        name="profileId"
        control={control}
        render={({ field }) => (
          <Select
            classNamePrefix="form-select"
            {...field}
            options={profiles.map((profile) => ({
              value: profile.id,
              label: profile.displayText,
            }))}
          />
        )}
      />

      <button type="submit" className="btnx my-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Supprimer le profil
      </button>
    </form>
  );
};

// Exportation du composant
export default DeleteProfileForm;
