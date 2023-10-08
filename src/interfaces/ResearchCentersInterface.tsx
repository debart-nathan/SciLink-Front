import JsonServer from "../services/ResearchCentersJsonServer";
const loader = async ()=> {
  return JsonServer.ResearchCentersSelect();
}
export default loader;