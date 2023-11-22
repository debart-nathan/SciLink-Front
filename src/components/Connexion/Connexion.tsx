import { useState, useRef } from "react";

import FormLogin from "./FormLogin";
import FormSignUp from "./FormSigUp";
import JsonServerB from "../../services/jsonServerB";
import { useNavigate } from 'react-router-dom';

function Connexion() {
    const [activeForm, setActiveForm] = useState("login");

    const toggleForm = (formType: any) => {
        setActiveForm(formType);
    };

    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await JsonServerB.PostRequest("login", {
                username: email,
                password,
            });
            if (response.status === "ok") {
                navigate('/'); // Redirect to home
            } else {
                alert(response.message); // Show the message from the response
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegister = async (
        username: string,
        email: string,
        lastName: string,
        firstName: string,
        password: string
    ) => {
        try {
            const response = await JsonServerB.PostRequest("register", {
                user_name: username,
                email,
                first_name: firstName,
                last_name: lastName,
                password,
            });
            if (response.status === "ok") {
                console.log("Request successful", response);
                navigate('/'); // Redirect to home
            } else {
                console.log(response)
                alert(response.message); // Show the message from the response
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="Connexion_container ">
            <>
                {activeForm === "login" ? (
                    <FormLogin
                        onToggleForm={toggleForm}
                        onSubmit={handleLogin}
                    />
                ) : (
                    <FormSignUp
                        onToggleForm={toggleForm}
                        onSubmit={handleRegister}
                    />
                )}
            </>
        </div>
    );
}
export default Connexion;
