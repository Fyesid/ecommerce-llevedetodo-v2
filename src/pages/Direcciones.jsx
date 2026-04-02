import { Link } from "react-router-dom";

export default function Direcciones() {
    return (
        <div className="w-full min-h-195 px-100 py-15">
            <div className="p-6 bg-amber-50 rounded-sm">
                <div className="flex flex-col gap-4">
                    <header className="p-3">
                        <h1 className="text-2xl font-bold">Direcciones</h1>
                    </header>
                    <Link to="agregar" className="w-full py-2 bg-yellow-200 text-orange-500 text-center font-bold cursor-pointer rounded-sm">
                        + Agregar nueva dirección
                    </Link>
                </div>
            </div>
        </div>
    );
}