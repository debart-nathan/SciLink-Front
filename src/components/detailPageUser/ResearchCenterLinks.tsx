import JsonServerB from "../../services/jsonServerB";
import { useEffect , useState } from "react";
import ResearchCenterInterface from "../../interfaces/ResearchCenterInterface";
import ResearchCenter from './../detailPageInvestor/ResearchCenterLink';
import ResearchCenterLink from "../detailPageUser/ResearchCenterLink";

const ResearchCenterLinks = ({ id , researchCenters }: { id: string , researchCenters: string[] | undefined }) => {

  const [isConnectedUser, setIsConnectedUser] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const isConnected = await JsonServerB.IsConnectedUser(id);
      setIsConnectedUser(isConnected);
    };

    checkUser();
  }, [id]);


  return (
    <>
      {isConnectedUser && (
        <a className="btnx btn my-2 " href="/contact-us">
          <span></span>
          <span></span>
          <span></span>
          <span></span> contactez nous pour créer ou lier un centre
        </a>
      )}
      <div className="row border border-danger border-bottom-0 mt-2"></div>
      {researchCenters &&
                researchCenters.map((researchCenterId: string) => (
                    <ResearchCenterLink key={researchCenterId} id={researchCenterId} />
                ))}

    </>
  );
};

export default ResearchCenterLinks;