import JsonServer from "../services/ResearchCentersJsonServer";
import { LoaderFunctionArgs } from 'react-router-dom';
const loader = async (arg: LoaderFunctionArgs) => {
  let ResearchCenter_id = arg.params.id as string;
  console.log(`arg: `, arg);
  return JsonServer.ResearchCenterSelect(ResearchCenter_id);
}
export default loader;