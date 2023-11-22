import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import FormModif from "./FormModif";

const ResearchCenter = ({
    id,
    researchCenterState,
    setResearchCenterState,
}: {
    id: string;
    researchCenterState: any;
    setResearchCenterState: Function;
}) => {
    const [refresh, setRefresh] = useState(false);
    const [isConnectedUser, setIsConnectedUser] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };
    useEffect(() => {
        researchCenterSelect("ResearchCenters", id);
    }, [refresh]);

    useEffect(() => {
      const checkUser = async () => {
        if (researchCenterState && researchCenterState.users.length > 0) {
          const isConnected = await JsonServerB.IsConnectedUsers(researchCenterState.users);
          setIsConnectedUser(isConnected);
        } else {
          setIsConnectedUser(false);
        }
      };
    
      checkUser();
    }, [researchCenterState]);

    async function researchCenterSelect(entityName: string, id: string) {
        try {
            const response = await JsonServerB.EntitySelect(entityName, id);
            setResearchCenterState(response);
        } catch (error) {
            console.error(
                `Erreur attrapée dans ${entityName}Select : ` + error
            );
        }
    }

    return (
        <>
            {researchCenterState ? (
                <section className="row mb-2">
                    <h1 className="fs-1 col-12 text-center bg-light bi bi-mortarboard-fill mb-5">
                        {researchCenterState.label}
                    </h1>
                    <div className="col-12 col-md-4 offset-md-1">
                        <div className="row">
                            <h4 className="col-12 col-md-5">acronyme :</h4>
                            <p className=" col-12 col-md-7">
                                {researchCenterState.sigle}
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-12 col-md-5">
                                Année de fondation :
                            </h5>
                            <p className=" col-12 col-md-7">
                                {researchCenterState.founding_year}
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="col-12 col-md-5">En activité :</h5>
                            <p className=" col-12 col-md-7">
                                {String(researchCenterState.is_active)}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 align-items-center ">
                        <div className="row wrap">
                            <h5 className="col-12 col-md-3">Site Web :</h5>
                            <p className=" col-12 col-md-9">
                                <a
                                    className="text-danger"
                                    href={researchCenterState.website}>
                                    {researchCenterState.website}
                                </a>
                            </p>
                        </div>
                        <div className="row wrap">
                            <h5 className="col-12 col-md-3">Fiche : </h5>{" "}
                            <p className=" col-12 col-md-9">
                                <a
                                    className="text-danger"
                                    href={researchCenterState.fiche_msr}>
                                    {researchCenterState.fiche_msr}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        {isConnectedUser && (
                            <FormModif
                                id={id}
                                entityName={"researchCenter"}
                                data={{
                                    libele: researchCenterState.libele,
                                    sigle: researchCenterState.sigle,
                                    founding_year:
                                        researchCenterState.founding_year,
                                    is_active: researchCenterState.is_active,
                                    website: researchCenterState.website,
                                    fiche_msr: researchCenterState.fiche_msr,
                                }}
                                handleRefresh={handleRefresh}
                            />
                        )}
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default ResearchCenter;
