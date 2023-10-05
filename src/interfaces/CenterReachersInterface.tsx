import JsonServer from "../services/jsonServer";
const loader = async ()=> {
  return JsonServer.centerReachersSelect();
}
export default loader;