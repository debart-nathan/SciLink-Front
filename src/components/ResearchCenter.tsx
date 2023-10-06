import {Link} from "react-router-dom";
const ResearchCenter = (props:any) => {
  return (
    <>
    <section className="col-2 text-center">
      <h4 className=""><Link to={`/ResearchCenters/ ${props.ResearchCenter.id}`}>{props.ResearchCenter.libele}</Link></h4>
    </section>
    
    </>
  );
}

export default ResearchCenter;