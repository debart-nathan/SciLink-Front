import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

// Définition des propriétés du composant
type DeleteUserFormProps = {
    users: any[];
    onSubmit: (data: any) => void;
};

// Composant pour le formulaire de suppression d'utilisateur
const DeleteUserForm: React.FC<DeleteUserFormProps> = ({ users, onSubmit }) => {
    // Utilisation du hook useForm pour gérer le formulaire
    const { control, handleSubmit } = useForm();

    // Rendu du composant
    // Lors de la soumission du formulaire, la fonction onSubmit est appelée
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Création d'un menu déroulant avec les utilisateurs */}
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
                            label: user.name,
                        }))}
                    />
                )}
            />

            {/* Bouton pour soumettre le formulaire */}
            <input type="submit" value="Supprimer l'utilisateur" />
        </form>
    );
};

// Export du composant pour pouvoir l'utiliser ailleurs
export default DeleteUserForm;
