import JsonServer from "../services/jsonServer";
import { LoaderFunctionArgs } from 'react-router-dom';
const loader = async (arg: LoaderFunctionArgs) => {
  let centerReacher_id = arg.params.id as string;
  console.log(`arg: `, arg);
  return JsonServer.centerReacherSelect(centerReacher_id);
}
export default loader;