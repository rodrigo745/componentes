"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from 'copy-to-clipboard';
import buttons from "../buttons.json";
import Link from 'next/link';

export default function Documentacion(){

    const handleCopy = (codigo)=>{
        copy(codigo);
    }
    
    return(
        <div className='p-10 mt-24 md:mt-0'>
            <h2 className='text-xl font-bold mb-3'>Documentación</h2>
            {
                buttons.docuFragmentada.map((e, index)=> (
                    <div key={index} className='mb-10'>
                        <h2 className='font-bold text-lg'>{e.titulo}</h2>
                        <h5 className='mb-5 mt-4'>{e.descripcion}</h5>
                        <h5>{e.otrosDatos}</h5>
                        <div className="flex flex-col mt-5 bg-black text-white rounded-lg">
                            <div className='flex justify-between text-sm px-4 py-2 pt-3'>
                                <p>JavaScript</p>
                                <button className='border px-3 mb-1 rounded-md hover:bg-gray-800' onClick={()=> handleCopy(e.codigo)}>Copiar</button>
                            </div>
                            <SyntaxHighlighter language="javascript" 
                                style={vscDarkPlus}
                                customStyle={{fontSize: "0px", padding: "16px", borderRadius: "10px"}}
                                showLineNumbers
                                >
                                {e.codigo}
                            </SyntaxHighlighter> 
                        </div>
                    </div>
                ))
            }
            <h2 id="asd">asdasd</h2>
            <div className='w-full mt-10 flex justify-between'>
                <Link className='border rounded-md shadow-sm px-4 py-2 hover:bg-slate-200' href="/pages/buttons">Anterior</Link>
                <Link className='border rounded-md shadow-sm px-4 py-2 hover:bg-slate-200' href="/pages/buttons/documentacion">Siguiente</Link>
            </div>
        </div>
    )
}