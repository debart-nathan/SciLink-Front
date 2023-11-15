import { useState, useRef } from "react";
import JsonServer from "../../services/jsonServerLogin";
import FormLogin from "./FormLogin";
import FormSignUp from "./FormSigUp";

function Connexion() {
  const [isLogin, setIsLogin] = useState(false);
  const inputNameRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeForm, setActiveForm] = useState("login");

  const toggleForm = (formType: any) => {
    setActiveForm(formType);
  };
  

  async function isConnect(email: string, password: string) {
    const user_loaded = await JsonServer.loadUser(email, password);
    setIsLogin(user_loaded);
  }

  function handleSubmitLoginUser() {
    if (inputNameRef.current) {
      console.log("Dans handleSubmitLoginUser");
      // Récupérer les données qui sont entrées par l'utilisateur dans le formulaire (email, pwd )
      isConnect(email, password);
      JsonServer.isLogin();
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="Connexion_container ">

      {!isLogin && (
        <>
           {activeForm === "login" ? (
        <FormLogin onToggleForm={toggleForm} onSubmitLoginUser={handleSubmitLoginUser} inputNameRef={inputNameRef} />
      ) : (
        <FormSignUp onToggleForm={toggleForm} />
      )}
        </>
      )}
    </div>
  );
}
export default Connexion;
