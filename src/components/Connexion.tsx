
import { useState, useRef} from "react";
import JsonServer from "../services/jsonServerLogin";
import FormLogin from "./FormLogin";


function Connexion() {
  const [isLogin, setIsLogin] = useState(false);
  const inputNameRef= useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  async function isConnect(email:string,password:string) {
    const user_loaded = await JsonServer.loadUser(email,password);
    setIsLogin(user_loaded );

  }

  function handleSubmitLoginUser() {
  if(inputNameRef.current){
    console.log("Dans handleSubmitLoginUser");
    // Récupérer les données qui sont entrées par l'utilisateur dans le formulaire (email, pwd )
      isConnect(email,password);
      JsonServer.isLogin();
      setEmail('');
      setPassword('');

  }
  
  }

  return (
    <div className="Connexion_container">
      <h1>Claire</h1>
      {!isLogin && (<FormLogin inputNameRef={inputNameRef} onSubmitLoginUser={handleSubmitLoginUser}/>)}    
      </div>
  );

  


}
export default Connexion;

