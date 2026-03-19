import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faBagShopping, faTag, faReceipt, faCircleUser, faGear } from "@fortawesome/free-solid-svg-icons";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function ProfileMenu() {

    const opciones = [
        {
            text: "Compras",
            type: "button",
            icon: faBagShopping,
            options: [
                {
                    text: "Compras",
                    path: "compras/lista"
                },
                {
                    text: "Preguntas",
                    path: "compras/preguntas"
                },
                {
                    text: "Opiniones",
                    path: "compras/opiniones"
                },
                {
                    text: "Favoritos",
                    path: "compras/favoritos"
                }
            ]
        },
        {
            text: "Ventas",
            type: "button",
            icon: faTag,
            options: [
                {
                    text: "Ventas",
                    path: "ventas/resumen"
                },
                {
                    text: "Publicaciones",
                    path: "ventas/publicaciones"
                },
                {
                    text: "Preguntas",
                    path: "ventas/preguntas"
                }
            ]
        },
        {
            text: "Facturación",
            type: "link",
            icon: faReceipt,
            path: "facturas"
        },
        {
            text: "Mi perfil",
            type: "link",
            icon: faCircleUser,
            path: "perfil"
        },
        {
            text: "Ajustes",
            type: "link",
            icon: faGear,
            path: "ajustes"
        }
    ]

    const [ menus, setMenus ] = useState(
        {
            Compras: false,
            Ventas: false
        }
    );

    function openMenu(e) {
        const { name } = e.target;

        setMenus(prev => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    return (
        <nav className="w-2xs bg-zinc-100">
            <ul>
                <header className="flex items-center p-5 font-bold">
                    <FontAwesomeIcon icon={ faBars } className="pr-2 text-xl" />
                    <h1>Mi Cuenta</h1>
                </header>
                {
                    opciones.map((item) => {
                        return (
                            <li key={ item.text } className="w-full text-sm">
                                {item.type === "button" ? (
                                    <>
                                        <button
                                        className="flex justify-between items-center
                                                   w-full px-5 py-4 cursor-pointer
                                                   border-l-4 border-transparent
                                                   hover:border-amber-500"
                                        name={ item.text }
                                        onClick={ openMenu }
                                        >
                                            <span className="flex items-center">
                                                <FontAwesomeIcon icon={ item.icon } className="pr-2 text-xl" />
                                                <p>{ item.text }</p>
                                            </span>
                                            <FontAwesomeIcon icon={ faChevronDown } />
                                        </button>
                                        {
                                            menus[item.text] && (
                                                <ul className="pl-6" value={ menus[item.text] }>
                                                    {
                                                        item.options.map((option, index) => {
                                                            return (
                                                                <li className="w-full pl-8" key={ index }>
                                                                    <NavLink
                                                                    to={ option.path }
                                                                    className={({ isActive }) => {
                                                                        return(
                                                                            `block w-full py-2 hover:text-amber-500
                                                                             ${isActive ? "text-amber-500" : null}`
                                                                        );
                                                                    }}>
                                                                        { option.text }
                                                                    </NavLink>
                                                                    <Link to={ option.path } className=""></Link>
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </>
                                ) : (
                                    <NavLink
                                    to={ item.path }
                                    className={({ isActive }) => {
                                        return(
                                            `flex justify-between items-centerw-full
                                            px-5 py-4 border-l-4 border-transparent
                                            hover:border-amber-500 ${isActive ? "text-amber-500" : null}`
                                        );
                                    }}>
                                        <span className="flex items-center">
                                            <FontAwesomeIcon icon={ item.icon } className="pr-2 text-xl" />
                                            <p className="text-sm">{ item.text }</p>
                                        </span>
                                    </NavLink>
                                )}
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}