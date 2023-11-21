import React from "react";
import JsonServerB from "../../../services/jsonServerB";

const LogOut: React.FC = () => {
  const handleLogout = async () => {
    
       const response = await JsonServerB.PostRequest("logout", {});
      if (response) {
        // Gérer la déconnexion réussie (par exemple, mettre à jour l'état local ou rediriger)
        console.log("Déconnexion réussie");
        window.location.href = "/";
      } else {
        // Gérer l'échec de la déconnexion (par exemple, afficher un message d'erreur)
        console.error("Échec de la déconnexion");
      }
  
  };

  return (
    <div className="col-1 ">
      <button
        type="button"
        id=""
        className="bi bi-power btn btn-outline-danger "
        onClick={handleLogout}
      ></button>
    </div>
  );
};
export default LogOut;
