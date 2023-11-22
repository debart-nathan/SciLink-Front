import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import ResearcherInterface from "../../interfaces/ResearcherInterface";
import FormModif from "./FormModif";

const Researcher = ({
    id,
    researcherState,
    setResearcherState,
}: {
    id: string;
    researcherState: ResearcherInterface | undefined;
    setResearcherState: Function;
}) => {
    const [refresh, setRefresh] = useState(false);
    const [isConnectedUser, setIsConnectedUser] = useState(false);

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        ResearcherSelect("Researchers", id);
    }, [refresh]);

    useEffect(() => {
        const checkUser = async () => {
            const id = researcherState?.user_id.toString();
            if (id) {
                const isConnected = await JsonServerB.IsConnectedUser(id);
                setIsConnectedUser(isConnected);
            }
        };

        checkUser();
    }, [researcherState]);

    async function ResearcherSelect(entityName: string, id: string) {
        try {
            const response = await JsonServerB.EntitySelect(entityName, id);
            setResearcherState(response);
        } catch (error) {
            console.error(
                `Erreur attrapée dans ${entityName}Select : ` + error
            );
        }
    }

    return (
        <>
            {researcherState ? (
                <section className="row mb-2">
                    <h1 className="fs-1 col-12 text-center bg-light  bi bi-piggy-bank-fill mb-5">
                        {" "}
                        {researcherState.id}{" "}
                    </h1>

                    <div className="col-12 col-md-9 offset-md-2 align-items-center ">
                        <div className="row">
                            <h4 className="col-12 col-md-4">Description:</h4>
                            <p className=" col-12 col-md-8">
                                {researcherState.description}
                            </p>
                        </div>
                        <div className="row">
                            {isConnectedUser && (
                                <FormModif
                                    id={researcherState.user_id.toString()}
                                    entityName={"Researchers"}
                                    data={{
                                        descriptions:
                                            researcherState.description,
                                    }}
                                    handleRefresh={handleRefresh}
                                />
                            )}
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    );
};

export default Researcher;
