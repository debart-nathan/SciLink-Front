import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";
import UserInterface from "../../interfaces/UserInterface";
import InvestorInterface from "../../interfaces/InvestorInterface";
import ResearcherInterface from "../../interfaces/ResearcherInterface";

// Propriétés du formulaire
interface UnlinkProfileFormProps {
    users: UserInterface[];
    onSubmit: (data: any) => void;
}

const UnlinkProfileForm: React.FC<UnlinkProfileFormProps> = ({
    users,
    onSubmit,
}) => {
    const { register, handleSubmit, watch, control } = useForm();
    const userId = watch("userId");
    const profileType = watch("profileType");

    // États des profils
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

    // Récupération des profils
    async function fetchProfils(userId: string, profileType: string) {
        const response = await fetch(`/api/${profileType}/${userId}`);

        if (!response.ok) {
            throw new Error(`Erreur HTTP! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    }

    // Construction des profils
    useEffect(() => {
        (async () => {
            try {
                let researchCenters: ResearchCenterInterface[] = [];
                let searchers: ResearcherInterface[] = [];
                let investors: InvestorInterface[] = [];
                researchCenters = await fetchProfils(userId, "research-center");
                searchers = await fetchProfils(userId, "searcher");
                investors = await fetchProfils(userId, "investor");

                // Mapping des profils
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

                // Mise à jour des états
                setResearchCenterProfiles(rcProfiles);
                setSearcherProfiles(sProfiles);
                setInvestorProfiles(iProfiles);
            } catch (error) {
                console.error("Échec de la récupération des profils:", error);
                setResearchCenterProfiles([]);
                setSearcherProfiles([]);
                setInvestorProfiles([]);
            }
        })();
    }, [userId]);

    // Mise à jour des profils
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
    }, [
        profileType,
        researchCenterProfiles,
        searcherProfiles,
        investorProfiles,
    ]);

    // Rendu du formulaire
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="userId"
                control={control}
                render={({ field }) => (
                    <Select
                        className=""
                        classNamePrefix=""
                        {...field}
                        options={users.map((user) => ({
                            value: user.id,
                            label: user.first_name,
                        }))}
                    />
                )}
            />

            <select {...register("profileType")}>
                <option value="research-center">Centre de recherche</option>
                <option value="searcher">Chercheur</option>
                <option value="investor">Investisseur</option>
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

            <input type="submit" />
        </form>
    );
};

export default UnlinkProfileForm;
