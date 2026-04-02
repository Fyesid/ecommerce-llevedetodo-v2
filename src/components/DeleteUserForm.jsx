import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { userService } from "../services/userService";
import { useAuth } from "../hooks/useAuth";

import TextInput from "../components/TextInput";
import Modal from "../components/Modal";
import ConfirmationPrompt from "./ConfirmationPrompt";

export default function DeleteUserForm() {

    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const { user, logout } = useAuth();
    const { formData, handleChange, handleSubmit } = useForm({ confirmPass: "" }, submitForm);

    async function submitForm(formData) {
        try {
            const token = localStorage.getItem('token');
            
            const response = await userService(`usuario/${user.id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.status === 204) {
               setOpen(true);
            }
            
        } catch(error) {
            console.log(error);
        }
    }

    function closeModal() {
        logout();
        navigate("/");
    }

    return (
        <>
            <form className="flex flex-col gap-8" autoComplete="off" onSubmit={ handleSubmit }>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirmPass">Digita tu contraseña para continuar con la eliminación de la cuenta:</label>
                    <TextInput className="p-2 bg-white" type="password" name="confirmPass" autoComplete="new-password" value={ formData.confirmPass } onChange={ handleChange } />
                </div>
                <button className="self-end w-40 p-2 bg-red-400 text-white rounded-sm cursor-pointer">Eliminar cuenta</button>
            </form>

            {isOpen && (
                <Modal onClose={ closeModal }>
                    <ConfirmationPrompt 
                    header="¡Hasta Pronto!" 
                    text="El Usuario se Eliminó correctamente. Gracias por elegirnos y esperamos Regreses!."
                    onAccept="/"
                    />
                </Modal>
            )}
        </>
    );
}