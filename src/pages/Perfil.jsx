import UserPanelCard from "../components/UserPanelCard";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Perfil() {
    return (
        // Cambiar div según la necesidad
        <div className="w-full h-200 px-75 py-15">
            <div className="size-full">
                <header className="bg-amber-50 mb-10 p-3 rounded-sm">
                    <h1 className="text-xl font-bold">nombre_usuario</h1>
                    <p className="text-sm">usuario@gmail.com</p>
                </header>
                <div className="grid grid-cols-3 gap-5">
                    <UserPanelCard header="Dirección" description="Direcciones asignadas a tu cuenta" icon={ faLocationDot } ruta="direcciones" />
                    <UserPanelCard header="Dirección" description="Direcciones asignadas a tu cuenta" icon={ faLocationDot } ruta="direcciones" />
                    <UserPanelCard header="Dirección" description="Direcciones asignadas a tu cuenta" icon={ faLocationDot } ruta="direcciones" />
                    <UserPanelCard header="Dirección" description="Direcciones asignadas a tu cuenta" icon={ faLocationDot } ruta="direcciones" />
                </div>
            </div>
        </div>
    );
}