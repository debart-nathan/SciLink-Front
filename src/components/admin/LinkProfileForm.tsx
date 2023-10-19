import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import UserInterface from "../../interfaces/UserInterface";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import InvestorInterface from "../../interfaces/InvestorInterface";

// Définition des propriétés attendues par le composant LinkProfileForm
interface LinkProfileFormProps {
  users: UserInterface[];
  researchCenters: ResearchCenterInterface[];
  searchers: ResearcherInterface[];
  investors: InvestorInterface[];
  onSubmit: (data: any) => void;
}

// Composant LinkProfileForm pour lier un profil à un utilisateur
const LinkProfileForm: React.FC<LinkProfileFormProps> = ({
  users,
  researchCenters,
  searchers,
  investors,
  onSubmit,
}) => {
  // Utilisation du hook useForm pour gérer les données du formulaire
  const { register, handleSubmit, control, watch } = useForm();
  const profileType = watch("profileType");

  // Initialisation des états pour stocker les profils
  const [profiles, setProfiles] = useState<
    { id: number; displayText: string }[]
  >([]);
  const [researchCenterProfiles, setResearchCenterProfiles] = useState<
    { id: number; displayText: string }[]
  >([]);
  const [searcherProfiles, setSearcherProfiles] = useState<
    { id: number; displayText: string }[]
  >([]);
  const [investorProfiles, setInvestorProfiles] = useState<
    { id: number; displayText: string }[]
  >([]);

  // Utilisation du hook useEffect pour créer les profils lors du chargement du composant
  useEffect(() => {
    const rcProfiles = researchCenters.map((profile) => ({
      id: profile.id,
      displayText: `${profile.id} - ${profile.sigle}`,
    }));
    const sProfiles = searchers.map((profile) => ({
      id: profile.id,
      displayText: `${profile.id}`,
    }));
    const iProfiles = investors.map((profile) => ({
      id: profile.id,
      displayText: `${profile.id} - ${profile.label}`,
    }));

    setResearchCenterProfiles(rcProfiles);
    setSearcherProfiles(sProfiles);
    setInvestorProfiles(iProfiles);
  }, [researchCenters, searchers, investors]);

  // Utilisation du hook useEffect pour mettre à jour l'état des profils en fonction du type de profil sélectionné
  useEffect(() => {
    let profiles: { id: number; displayText: string }[];
    switch (profileType) {
      case "research-center":
        profiles = researchCenterProfiles;
        break;
      case "searcher":
        profiles = searcherProfiles;
        break;
      case "investor":
        profiles = investorProfiles;
        break;
      default:
        profiles = [];
    }
    setProfiles(profiles);
  }, [profileType, researchCenterProfiles, searcherProfiles, investorProfiles]);

  // Rendu du formulaire avec les champs nécessaires
  return (
    <form
      className="form-group"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="userId"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={users.map((user) => ({
              value: user.id,
              label: user.first_name,
            }))}
          />
        )}
      />

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
            className=""
            classNamePrefix=""
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
        <span></span>Lier
      </button>
    </form>
  );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default LinkProfileForm;
