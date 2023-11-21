import { useState } from "react";

const FormSignUp = ({ onToggleForm, onSubmit }: { onToggleForm: any, onSubmit: (username: string, email: string, lastName: string, firstName: string, password: string) => void }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onSubmit(username, email, lastName, firstName, password);
  };

  return (
    <div id="conect" className="">
      <form onSubmit={handleSubmit} className="formconect signup">
        <h2>Inscription</h2>
        <div className="inputBox">
          <input type="text" required={true} value={username} onChange={(e) => setUsername(e.target.value)} />
          <i className="bi bi-person-fill"></i>
          <span>Pseudo</span>
        </div>
        <div className="inputBox">
          <input type="text" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
          <i className="bi bi-envelope-at"></i>
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input type="text" required={true} />
          <i className="bi bi-person-vcard"></i>
          <span>Nom</span>
        </div>
        <div className="inputBox">
          <input type="text" required={true} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <i className="bi bi-person-vcard-fill"></i>
          <span>Prénom</span>

        </div>
        <div className="inputBox">
          <input type="password" required={true} value={password} onChange={(e) => setPassword(e.target.value)} />
          <i className="bi bi-lock-fill"></i>
          <span>Mot de Passe</span>
        </div>
        <div className="inputBox">
          <input type="password" required={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <i className="bi bi-lock-fill"></i>
          <span>Confirme Mot de Passe</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Créer un Compte" />
        </div>
        <p>
          Déjà inscrit?{" "}
          <a
            href="#"
            onClick={() => onToggleForm("login")}
            className="login text-danger"
          >
            Connectez-vous
          </a>
        </p>
      </form>
    </div>
  );
};

export default FormSignUp;
