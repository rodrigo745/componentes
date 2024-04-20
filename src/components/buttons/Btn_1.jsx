"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Btn_1(props){

    const coloresArray = props.colores;
    const base = props.base;
    const ejemplos = props.ejemplos;
    const [ color, setColor ] = useState(base);
    const opcionBase = "w-8 h-8 shadow-inner rounded-full";
    const bandera = [0,1,2,3];

    const cambioColor = (e)=>{
        if(coloresArray != undefined){
            e.target.id == "0" && setColor(ejemplos[0]);
            e.target.id == "1" && setColor(ejemplos[1]);
            e.target.id == "2" && setColor(ejemplos[2]);
            e.target.id == "3" && setColor(ejemplos[3]);
        }
    }

    // Cambiar el id del enlace para cada boton
    return(
    
        <div>
            <div className="contenedor-card-btn shadow-md flex flex-col items-end">
                <Link href="/pages/buttons/documentacion#asd" className="absolute text-sm mx-3 mt-3 border border-gray-300 text-gray-400 px-3 rounded-md shadow-sm hover:border-gray-500 hover:text-black">Ver</Link>
                <div className="flex justify-center content-center h-full w-full">
                    <button id="1" className={`transition delay-150 duration-300 ease-in-out ${props.estilo} ${color} m-auto`}> 
                    <p className="animate-spin">{props.spin}</p>
                     {props.texto}</button>
                </div>
            </div>
            <div className="contenedor-card-btn-sub shadow-md flex justify-around pt-2">
                    
                    {
                        bandera.map((e, index)=>(
                            <button key={index} id={index} onClick={cambioColor} className={`${opcionBase} ${coloresArray != undefined && coloresArray[index]}`}></button>
                        ))
                    }
                    
            </div>
        </div>
    )
}
