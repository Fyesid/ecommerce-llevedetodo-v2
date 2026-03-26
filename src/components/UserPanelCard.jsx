import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserPanelCard({ header, description, icon, ruta }) {
    return (
        <Link to={ ruta }>
            <section className="flex flex-col gap-5 h-35 bg-amber-50 p-4 rounded-sm">
                <div>
                    <FontAwesomeIcon icon={ icon } size="lg" />
                </div>
                <header>
                    <h2>{ header }</h2>
                    <p className="text-sm text-zinc-600">{ description }</p>
                </header>
            </section>
        </Link>
    );
}