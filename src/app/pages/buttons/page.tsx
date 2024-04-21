import Btn_1 from "../../../components/buttons/Btn_1";
import buttons from "./buttons.json";
import Link from 'next/link';

export default function Buttons(){

    return(
        <div className="p-10 xl:px-20 mt-20 md:mt-0">
            <h2 className="text-xl font-bold mb-4">¡Botones!</h2>
            <h5>{buttons.descripcion}</h5> <br />
            <h5>{buttons.sub}</h5>
            <h4 className="font-bold text-xl mt-10">Simples</h4>
            <div className='border flex justify-center shadow-inner rounded-lg mt-6 py-10'>
                <div className="cuadriculaBtn grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 2xl:gap-16 2xl:grid-cols-3 gap-y-10">
                     {
                        datos[0].simples.map((e, index)=>
                         (   
                                <Btn_1 key={index} base={e.base} estilo={e.estilo} ejemplos={e.colores}  colores={e.colores} texto={e.texto}/>
                        )
                        )
                    }
                </div>
            </div>
            <h4 className="font-bold text-xl mt-10">Compuestos</h4>
            <div className='border flex justify-center shadow-inner rounded-lg mt-6 py-10'>
                <div className="cuadriculaBtn grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 2xl:gap-16 2xl:grid-cols-3 gap-y-10">
                    
                    {
                        datos[1].compuestos.map((e, index)=>
                         (   
                                <Btn_1 key={index} base={e.base} estilo={e.estilo} ejemplos={e.ejemplos} colores={e.colores} spin={e.spin} texto={e.texto}/>
                        )
                        )
                    }
                    
                </div>
            </div>
            <h4 className="font-bold text-xl mt-10">Variados</h4>
            <div className='border flex justify-center shadow-inner rounded-lg mt-6 py-10'>
                <div className="cuadriculaBtn grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 2xl:gap-16 2xl:grid-cols-3 gap-y-10">
                    {
                        datos[2].variados.map((e, index)=>
                         (   
                                <Btn_1 key={index} base={e.base} estilo={e.estilo} ejemplos={e.ejemplos} colores={e.colores} spin={e.spin} texto={e.texto}/>
                        )
                        )
                    }
                    
                </div>
            </div>
            <div className='w-full mt-10 flex justify-end'>
                <Link className='border rounded-md shadow-sm px-4 py-2 hover:bg-slate-200' href="/pages/buttons/documentacion">Siguiente</Link>
            </div>
        </div>
    )
}

const datos =  [
    {
        "simples": [
            {
                "base": "bg-orange-300",
                "estilo": "text-white py-2 px-5 shadow-md",
                "colores": ["bg-gray-300" ,"bg-blue-300","bg-red-300","bg-green-300"],
                "texto": "Botón"
            },
            {
                "base": "bg-orange-300",
                "estilo": "text-white py-2 px-5 rounded-md",
                "colores": ["bg-slate-300" ,"bg-yellow-300","bg-cyan-300","bg-orange-300"],
                "texto": "Botón"
            },
            {
                "base": "bg-orange-500",
                "estilo": "border-double border-8 border-black px-8 py-1",
                "colores": ["bg-gray-300" ,"bg-blue-300","bg-red-300","bg-green-300"],
                "texto": "Botón"
            }
        ]
    },
    {
        "compuestos": [
            {
            "base": "bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white",
            "estilo": "border px-5 py-1  rounded-md shadow-md",
            "ejemplos": [
                "bg-transparent text-slate-500 border-slate-500 hover:bg-slate-500 hover:text-white",
                "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white",
                "bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white",
                "bg-transparent text-green-500 border-green-500 hover:bg-green-500 hover:text-white"
            ],
            "colores": [
                "bg-slate-500",
                "bg-blue-500",
                "bg-red-500",
                "bg-green-500"],
            "texto": "Botón"
        },
        {
            "base":"bg-gradient-to-r from-indigo-700 to-indigo-400",
            "estilo":"bg-gradient-to-r border border-white rounded-md shadow-lg from-indigo-700 to-indigo-400 text-white px-8 py-1 animate-pulse",
            "ejemplos": [
                "bg-gradient-to-r from-pink-800 via-red-700 to-pink-800 ",
                "bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800",
                "bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800",
                "bg-gradient-to-r from-green-800 via-green-700 to-green-800"
            ],
            "colores": [
                "bg-gradient-to-r from-pink-800 via-red-700 to-pink-800 ",
                "bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800",
                "bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800",
                "bg-gradient-to-r from-green-800 via-green-700 to-green-800"
            ],
            "texto": "Botón"
        },
        {
            "base": "",
            "estilo":"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 text-white rounded-md",
            "ejemplos": [],
            "colores": ["bg-gray-300" ,"bg-blue-300","bg-red-300",      "bg-green-300"],
            "texto": "Botón"
        },
        {
            "base": "bg-gradient-to-r from-pink-800 via-red-700 to-pink-800",
            "estilo":"pr-6 py-2 pl-4 text-white rounded-md flex w-28 justify-between",
            "ejemplos": [
                "bg-gradient-to-r from-pink-800 via-red-700 to-pink-800 ",
                "bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800",
                "bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800",
                "bg-gradient-to-r from-green-800 via-green-700 to-green-800"
            ],
            "colores": [
                "bg-gradient-to-r from-pink-800 via-red-700 to-pink-800 ",
                "bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800",
                "bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-800",
                "bg-gradient-to-r from-green-800 via-green-700 to-green-800"
            ],
            "spin": "(||)",
            "texto": "Botón"
        }
        ]
    },
    {
        "variados": [
            {
                "base": "",
                "estilo":" w-16 h-16 border-double border-4 text-5xl pb-1 rounded-full shadow-lg bg-cyan-800 text-white",
                "ejemplos": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-white text-black",
                    "bg-slate-800"
                ],
                "colores": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-white",
                    "bg-slate-800"],
                "texto": "+"
            },
            {
                "base": "",
                "estilo":"px-8 py-1 border-double border-4 text-xl rounded-full shadow-lg bg-cyan-800 text-white",
                "ejemplos": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-white text-black",
                    "bg-slate-800"
                ],
                "colores": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-white",
                    "bg-slate-800"],
                "texto": "==>"
            },
            {
                "base": "",
                "estilo": "px-3 py-3 bg-cyan-800 rotate-90 rounded-md shadow-md text-white text-2xl",
                "ejemplos": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-green-800",
                    "bg-slate-800"
                ],
                "colores": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-green-800",
                    "bg-slate-800"],
                "texto": "|||"
            },
            {
                "base": "",
                "estilo":"px-4 py-1 border-white border border-b-double border-x-8 rounded-r-full shadow-lg bg-cyan-800 text-white border-double",
                "ejemplos": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-green-800",
                    "bg-slate-800"
                ],
                "colores": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-green-800",
                    "bg-slate-800"],
                "texto": "Siguiente =>"
            },
            {
                "base": "bg-cyan-800",
                "estilo": "w-16 h-16 font-bold text-4xl border border-8 border-white text-white rounded-full animate-spin shadow-xl",
                "ejemplos": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-amber-800",
                    "bg-slate-800"
                ],
                "colores": [
                    "bg-cyan-800",
                    "bg-pink-800",
                    "bg-amber-800",
                    "bg-slate-800"],
                "spin": "+",
                "texto": "(*)"
            }
        ]
    }
]