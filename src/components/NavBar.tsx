"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar(){

    const [ mostrar, setMostrar ] = useState(false);
    const [ contMenu, setContMenu ] = useState(contenedorStyle);

    const mostrarMenu = ()=>{
        mostrar ? setContMenu(contenedorStyleDos) : setContMenu(contenedorStyle);
        mostrar ? setMostrar(false) : setMostrar(true);
    }

    return(
        <div className={contMenu}>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h1 className="text-2xl ">Componentes</h1>
                    <button onClick={mostrarMenu} className="block md:hidden rotate-90 text-2xl">|||</button>
                </div>
                <hr className="mt-7 border-slate-400"/>
                <div className="flex flex-col mt-6 rounded-tr-xl">
                    <Link href="/" onClick={mostrarMenu} className={pStyle}>- Inicio</Link>
                    <Link href="/pages/buttons" onClick={mostrarMenu} className={pStyle}>- Botones</Link>
                    <Link href="/pages/forms" onClick={mostrarMenu} className={pStyle}>- Formularios</Link>
                    <p className={pStyle}>- Componente</p>
                    <Link href="/pages/documentation" onClick={mostrarMenu} className={pStyle}>- Documentación</Link>
                </div>
            </div>
        </div>
    )
}
const contenedorStyle = "contNav flex flex-col justify-between bg-slate-700 overflow-hidden md:min-w-80 w-screen md:w-80 h-20 md:h-screen text-white  p-9 pt-6 text-lg md:rounded-tr-3xl";
const contenedorStyleDos = "contNav bg-slate-700 w-screen md:w-80 md:min-w-80 h-96 md:h-screen text-white p-9 text-lg pt-6 md:rounded-tr-3xl";
const pStyle = "mt-4";