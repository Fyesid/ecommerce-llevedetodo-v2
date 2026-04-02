import { Link } from "react-router-dom";

export default function UserDataCard({ name, value, path }) {
    return (
        <section className="flex flex-col gap-2 bg-white p-5 rounded-sm">
            <header>
                <h2 className="font-bold">{ name}</h2>
                <p className="text-amber-600">{ value}</p>
            </header>
            <Link to={ path } className="self-end w-1/7 bg-green-400 p-2 text-center text-white rounded-sm">Modificar</Link>
        </section>
    );
}