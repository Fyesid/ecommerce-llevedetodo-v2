import ordenes from '../assets/icons/order.svg';
import mensajes from '../assets/icons/messages.svg';
import pagos from '../assets/icons/pagos.svg';
import cupones from '../assets/icons/cupon.svg';
import favoritos from '../assets/icons/favoritos.svg';
import logoutIcon from '../assets/icons/logout.svg';

import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export default function UserMenu() {

    const { logout } = useAuth();

    const submenu1 = [
        {
            name: 'Mis Órdenes',
            icon: ordenes,
            path: "cuenta/compras/lista"
        },
        {
            name: 'Centro de Mensajes',
            icon: mensajes,
            path: "cuenta/compras/opiniones"
        },
        {
            name: 'Pagos',
            icon: pagos,
            path: "cuenta/facturas"
        },
        {
            name: 'Cupones',
            icon: cupones
        },
        {
            name: 'Favoritos',
            icon: favoritos,
            path: "cuenta/compras/favoritos"
        },
    ]

    const submenu2 = [
        {
            name: 'Configuración',
            path: "cuenta/ajustes"
        },
        {
            name: 'Centro de Ayuda',
            path: ""
        },
        {
            name: 'Reportes',
            path: ""
        },
        {
            name: 'Negocios',
            path: ""
        }
    ];

    return (
        <div className="absolute top-full pt-5 right-1/2 translate-x-1/2 drop-shadow-xl z-50">
            <div
            className="
                    w-70 px-5
                    bg-white
                    rounded-md z-100
                    before:block before:bg-white
                    before:z-0 before:absolute
                    before:w-5 before:h-5
                    before:transform before:rotate-45
                    before:top-0 before:right-1/2
                    before:translate-1/2
                    "
            >
                {
                    <>
                        <ul className='flex flex-col py-6 gap-3 border-b-1'>
                            {
                                submenu1.map((option) => {
                                    return (
                                    <li className="pl-2 hover:bg-orange-300/70 rounded-sm" key={option.name}>
                                        <Link to={ option.path } className="flex items-center gap-3 block p-2 w-full h-full text-md">
                                            <img src={ option.icon } alt={ option.name } className='size-6' />
                                            <p>{ option.name }</p>
                                        </Link>
                                    </li>);
                                })
                            }
                        </ul>
                        <ul className='flex flex-col py-6 gap-3'>
                            {
                                submenu2.map((option) => {
                                    return (
                                    <li className="pl-3 hover:bg-orange-300/70 rounded-sm" key={option.name}>
                                        <Link to={ option.path } className="block p-2 w-full h-full text-sm">{ option.name }</Link>
                                    </li>
                                    );
                                })
                            }
                            <li className="pl-3 hover:bg-orange-300/70 rounded-sm">
                                <button onClick={ logout } className="flex items-center block p-2 w-full h-full text-sm text-red-500 cursor-pointer">
                                    <img src={ logoutIcon } alt="Cerrar sesión" className='size-6 ' />
                                    <p>Cerrar sesión</p>
                                </button>
                            </li>
                        </ul>
                    </>
                }
            </div>

        </div>
    );
}