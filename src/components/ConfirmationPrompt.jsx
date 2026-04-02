import { Link } from "react-router-dom";

export default function ConfirmationPrompt({ header, description, onAccept }) {

    return(
        <div className="flex flex-col gap-8 w-full">
            <h2 className="text-2xl text-center font-bold">{ header }</h2>
            <p>{ description }</p>
            <Link to={ onAccept } className="bg-green-400 p-2 text-white text-center">Aceptar</Link>
        </div>
    );
}