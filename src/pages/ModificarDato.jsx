import { useParams } from "react-router-dom";

import ModifyForm from "../components/ModifyForm";

export default function ModificarDato() {

    const { tipo } = useParams();

    return (
        <div className="flex justify-center items-center w-full min-h-195 px-140">
            <div className="w-full p-6 bg-amber-50 rounded-sm">
                <ModifyForm type={ tipo } />
            </div>
        </div>
    );
}