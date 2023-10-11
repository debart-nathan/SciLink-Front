import React, { useEffect, useState } from "react";
import DeleteProfileForm from "./admin/DeleteProfileForm";
import LinkProfileForm from "./admin/LinkProfileForm";
import DeleteUserForm from "./admin/DeleteUserForm";
import UnlinkProfileForm from "./admin/UnlinkProfileForm";

const AdminPage = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([]);
    const [researchCenterProfiles, setResearchCenterProfiles] = useState([]);
    const [searcherProfiles, setSearcherProfiles] = useState([]);
    const [investorProfiles, setInvestorProfiles] = useState([]);
    const [deleteUserMessage, setDeleteUserMessage] = useState("");
    const [deleteProfileMessage, setDeleteProfileMessage] = useState("");
    const [linkProfileMessage, setLinkProfileMessage] = useState("");
    const [unlinkProfileMessage, setUnlinkProfileMessage] = useState("");

    useEffect(() => {
        //TODO fetch is connected user admin

        setIsAdmin(true);
    }, []);

    useEffect(() => {
        if (isAdmin) {
            // Fetch users
            fetch("/api/users")
                .then((response) => response.json())
                .then((data) => setUsers(data));

            // Fetch research center profiles
            fetch("/api/research-center-profiles")
                .then((response) => response.json())
                .then((data) => setResearchCenterProfiles(data));

            // Fetch searcher profiles
            fetch("/api/searcher-profiles")
                .then((response) => response.json())
                .then((data) => setSearcherProfiles(data));

            // Fetch investor profiles
            fetch("/api/investor-profiles")
                .then((response) => response.json())
                .then((data) => setInvestorProfiles(data));
        }
    }, []);

    // Lors de la soumission du formulaire de suppression d'utilisateur
    const onDeleteUserSubmit = async (data: { userId: string }) => {
        if (
            !window.confirm(
                "Êtes-vous sûr de vouloir supprimer cet utilisateur ?"
            )
        ) {
            return;
        }

        try {
            //TODO: Changer l'URL de l'API
            const response = await fetch(`/api/users/${data.userId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            setDeleteUserMessage("Suppression de l'utilisateur réussie !");
        } catch (error) {
            console.error("Échec de la suppression de l'utilisateur :", error);
            setDeleteUserMessage("Échec de la suppression de l'utilisateur !");
        }
    };

    // Lors de la soumission du formulaire de suppression de profil
    const onDeleteProfileSubmit = async (data: { profileId: string }) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce profil ?")) {
            return;
        }

        try {
            //TODO: Changer l'URL de l'API
            const response = await fetch(`/api/profiles/${data.profileId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            setDeleteProfileMessage("Suppression du profil réussie !");
        } catch (error) {
            console.error("Échec de la suppression du profil :", error);
            setDeleteProfileMessage("Échec de la suppression du profil !");
        }
    };
    // Lors de la soumission du formulaire de liaison de profil
    const onLinkProfileSubmit = async (data: {
        userId: string;
        profileId: string;
    }) => {
        if (!window.confirm("Êtes-vous sûr de vouloir lier ce profil ?")) {
            return;
        }

        try {
            //TODO: Changer l'URL de l'API
            const response = await fetch(`/api/profiles/link`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            setLinkProfileMessage("Liaison du profil réussie !");
        } catch (error) {
            console.error("Échec de la liaison du profil :", error);
            setLinkProfileMessage("Échec de la liaison du profil !");
        }
    };

    // Lors de la soumission du formulaire de délier de profil
    const onUnlinkProfileSubmit = async (data: {
        userId: string;
        profileId: string;
    }) => {
        if (!window.confirm("Êtes-vous sûr de vouloir délier ce profil ?")) {
            return;
        }

        try {
            //TODO: Changer l'URL de l'API
            const response = await fetch(`/api/profiles/unlink`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }

            setUnlinkProfileMessage("Déconnexion du profil réussie !");
        } catch (error) {
            console.error("Échec de la déconnexion du profil :", error);
            setUnlinkProfileMessage("Échec de la déconnexion du profil !");
        }
    };

    if (!isAdmin) {
        return <p>You must be an admin to view this page.</p>;
    }

    return (
        <main>
            <div>
                <h2>Delete User</h2>
                <DeleteUserForm users={users} onSubmit={onDeleteUserSubmit} />
                <p>{deleteUserMessage}</p>
            </div>
            <div>
                <h2>Link Profile</h2>
                <LinkProfileForm
                    users={users}
                    researchCenters={researchCenterProfiles}
                    searchers={searcherProfiles}
                    investors={investorProfiles}
                    onSubmit={onLinkProfileSubmit}
                />
                <p>{linkProfileMessage}</p>
            </div>
            <div>
                <h2>Delete Profile</h2>
                <DeleteProfileForm
                    researchCenterProfiles={researchCenterProfiles}
                    searcherProfiles={searcherProfiles}
                    investorProfiles={investorProfiles}
                    onSubmit={onDeleteProfileSubmit}
                />
                <p>{deleteProfileMessage}</p>
            </div>
            <div>
                <h2>Unlink Profile</h2>
                <UnlinkProfileForm
                    users={users}
                    onSubmit={onUnlinkProfileSubmit}
                />
                <p>{unlinkProfileMessage}</p>
            </div>
        </main>
    );
};

export default AdminPage;
