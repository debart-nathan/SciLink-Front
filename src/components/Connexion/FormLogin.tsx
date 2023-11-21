import { useState } from "react";

const FormLogin = ({
    onSubmit,
    onToggleForm,
}: {
    onSubmit: (email: string, password: string) => void;
    onToggleForm: any;
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(email, password);
    };

    return (
        <div id="conect" className="">
            <form
                className="form formconect signin"
                action="/login"
                onSubmit={handleSubmit}>
                <h2>Connection</h2>
                <div className="inputBox">
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        required={true}
                    />
                    <i className="bi bi-envelope-at"></i>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}
                    />
                    <i className="bi bi-lock-fill"></i>
                    <span>Mot de Passe</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Login" />
                </div>
                <p>
                    Nouveau Membre?{" "}
                    <a
                        href="#"
                        onClick={() => onToggleForm("signup")}
                        className="create text-danger">
                        Créer un Compte
                    </a>
                </p>
            </form>
        </div>
    );
};

export default FormLogin;
