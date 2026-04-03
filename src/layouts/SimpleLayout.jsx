import { Outlet } from 'react-router-dom';

import Header from '../components/SimpleHeader'
import Footer from '../components/Footer';

export default function SimpleLayout() {

    return(
         // Contenedor principal que ocupa toda la pantalla
          //  Header altura automática, contenido flexible, footer automático
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-zinc-50 overflow-hidden">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}