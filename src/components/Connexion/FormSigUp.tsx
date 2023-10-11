import react from "@babel/types";

const FormSignUp = ({ onToggleForm }: { onToggleForm: any }) => {
  return (
    <div id="conect" className="container">
      <div className="formconect signup">
        <h2>Inscription</h2>
        <div className="inputBox">
          <input type="text" required={true} />
          <i className="bi bi-person-fill"></i>
          <span>Pseudo</span>
        </div>
        <div className="inputBox">
          <input type="mail" required={true} />
          <i className="bi bi-envelope-at"></i>
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="password" required={true} />
          <i className="bi bi-lock-fill"></i>
          <span>Mot de Passe</span>
        </div>
        <div className="inputBox">
          <input type="password" required={true} />
          <i className="bi bi-lock-fill"></i>
          <span>Confirme Mot de Passe</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Créer un Compte" />
        </div>
        <p>
          Déjà inscrit?{" "}
          <a href="#" onClick={() => onToggleForm("login")} className="login">
            Connection
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormSignUp;
