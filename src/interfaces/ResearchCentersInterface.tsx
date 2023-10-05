import JsonServer from "../services/jsonServer";
const loader = async ()=> {
  return JsonServer.ResearchCentersSelect();
}
export default loader;