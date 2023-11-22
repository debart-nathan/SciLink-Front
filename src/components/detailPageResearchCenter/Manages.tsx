import JsonServerB from "../../services/jsonServerB";
import { useEffect, useState } from "react";
import DetailPersonels from "./Personel";
import ManageInterface from "../../interfaces/ManageInterface";
import UserLink from "./UserLink";

const Manages = ({
    id,
    users,
}: {
    id: string;
    users: number[] | undefined;
}) => {
    const [managesState, setManagesState] = useState<ManageInterface[]>();

    async function managesSelect(
        entityName: string,
        conditionName: string,
        condition: string
    ) {
        try {
            const response = await JsonServerB.EntitySelectWCondition(
                entityName,
                conditionName,
                condition
            );
            setManagesState(response);
        } catch (error) {
            console.error(
                `Erreur attrapée dans ${entityName}Select : ` + error
            );
        }
    }

    useEffect(() => {
        managesSelect("Manages", "researchCenter", id);
    }, []);

    return (
        <div className="col-12 col-md-4-5">
            <h3 className="text-dark text-center">Personel :</h3>
            {managesState ? (
                <>
                    <div className="row">
                        <div className="col-4">Nom :</div>
                        <div className="col-4">Prenom :</div>
                        <div className="col-4">Grade :</div>
                    </div>
                    {managesState.map((manages: any) => (
                        <DetailPersonels
                            key={manages.personnel_id}
                            id={manages.personnel_id}
                            grade={manages.grade}
                        />
                    ))}
                </>
            ) : null}
            <h4 className="text-dark text-center">Représentant :</h4>
            {users &&
                users.map((userId: number) => (
                    <UserLink key={userId} id={userId.toString()} />
                ))}
        </div>
    );
};

export default Manages;
