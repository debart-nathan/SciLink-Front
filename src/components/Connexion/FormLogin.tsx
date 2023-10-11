import { useState } from "react";
const FormLogin = ({
  onSubmitLoginUser,
  inputNameRef,
  onToggleForm,
}: {
  onSubmitLoginUser: any;
  inputNameRef: any;
  onToggleForm: any;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="conect" className="container">
      <form
        className="form formconect signin"
        action="/login"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitLoginUser(event);
        }}
      >
        <h2>Connection</h2>
        <div className="inputBox">
          <input
            ref={inputNameRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)} type="text" required={true} />
          <i className="bi bi-envelope-at"></i>
          <span>Email</span>
        </div>
        
        <div className="inputBox">
          <input
            name="password"
            ref={inputNameRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <i className="bi bi-lock-fill"></i>
          <span>Mot de Passe</span>
        </div>
        <div className="inputBox">
          <input
            onClick={() => {
              onSubmitLoginUser();
            }}
            type="submit"
            value="Login"
          />
        </div>
        <p>
          Nouveau Membre?{" "}
          <a href="#" onClick={() => onToggleForm("signup")} className="create">
            Créer un Compte
          </a>
        </p>
      </form>
    </div>
  );
};
export default FormLogin;
