import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface"; // Assurez-vous d'importer votre interface de centre de recherche si elle existe.

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

export default fakeData