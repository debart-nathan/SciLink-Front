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
    <form
      className="form-group"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Création d'un menu déroulant avec les utilisateurs */}
      <Controller
        name="userId"
        control={control}
        render={({ field }) => (
          <Select
            className=""
            classNamePrefix="form-select"
            {...field}
            options={users.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
          />
        )}
      />

      {/* Bouton pour soumettre le formulaire */}
      <button type="submit" className="btnx my-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>Supprimer l'utilisateur
      </button>
    </form>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs
export default DeleteUserForm;
