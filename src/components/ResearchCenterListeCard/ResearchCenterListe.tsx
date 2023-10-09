import React, { useState, useEffect } from "react";
import ResearchCenterInterface from "./../detailPageResearchCenter/interfaces/ResearchCenterInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.

const ResearchCenterListe: React.FC = () => {
  // Initialisez un état pour stocker la liste des centres de recherche.
  const [researchCenters, setResearchCenters] = useState<
    ResearchCenterInterface[]
  >([]);

  const [displayMode, setDisplayMode] = useState<"list" | "card">("list"); // État du mode d'affichage

  // Utilisez useEffect pour charger les données des centres de recherche.
  useEffect(() => {
    // Vous devrez remplacer cette partie par la logique de récupération de données réelles (par exemple, une requête API).
    // Ici, nous utilisons des données fictives à titre d'exemple.
    const fakeData: ResearchCenterInterface[] = [
      {
        id: 1,
        libele: "Centre de recherche 1",
        sigle: "CR1",
        founding_year: "1990",
        is_active: true,
        website: "https://www.example.com/cr1",
        fiche_msr: "https://www.example.com/cr1-info",
      },
      {
        id: 2,
        libele: "Centre de recherche 2",
        sigle: "CR2",
        founding_year: "2005",
        is_active: false,
        website: "https://www.example.com/cr2",
        fiche_msr: "https://www.example.com/cr2-info",
      },
      // Ajoutez d'autres centres de recherche ici.
    ];

    // Mettez à jour l'état avec les données fictives (ou réelles).
    setResearchCenters(fakeData);
  }, []);

  return (
    <div className="row">
      <h1>Liste des Centres de Recherche</h1>
      <button
        className="btn btn-outline-primary col-1 offset-10"
        onClick={() => setDisplayMode("list")}
      >
        Afficher en Liste
      </button>
      <button
        className="btn btn-outline-primary col-1"
        onClick={() => setDisplayMode("card")}
      >
        Afficher en Carte
      </button>

      {displayMode === "list" && (
        <ul>
          {researchCenters.map((center) => (
            <li key={center.id} className="list-group-item col-12 border border-underline">
              <h2>{center.libele}</h2>
              <p className="col-6">Sigle: {center.sigle}</p>
              <p className="col-6">Année de fondation: {center.founding_year}</p>
              <p className="col-6">Statut: {center.is_active ? "Actif" : "Inactif"}</p>
              <p className="col-6">
                Site Web:{" "}
                <a
                  href={center.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {center.website}
                </a>
              </p>
              <p className="col-6">
                Fiche d'information:{" "}
                <a
                  href={center.fiche_msr}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {center.fiche_msr}
                </a>
              </p>
              <a className="btn " href="">
                  voir plus
                </a>
            </li>
          ))}
        </ul>
      )}
      {displayMode === "card" && (
        <div className="row ">
          {researchCenters.map((center) => (
            <div key={center.id} className="card col-4">
              <div className="content">
                <h2>{center.founding_year}</h2>
                <h3>{center.libele}</h3>
                <p>
                  {" "}
                  <i>Sigle: {center.sigle}</i>
                </p>
                <a className="btn " href="">
                  voir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResearchCenterListe;
