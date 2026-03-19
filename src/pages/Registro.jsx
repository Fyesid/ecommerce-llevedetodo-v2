import { useNavigate } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

export default function Registro() {
    const navigate = useNavigate();

    return(
        <main className="py-20 bg-amber-500">
            <div className="w-1/3 p-12 m-auto bg-white rounded-md">
                <RegisterForm onRegisterSuccess={ () => navigate("/") } />
            </div>
        </main>
    );
}