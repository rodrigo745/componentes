"use client";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copy from 'copy-to-clipboard';
import docu from "./docu.json";

export default function Documentation(){

    const handleCopy = (data: string)=>{
        copy(data)
    }

    return(
        <div className='p-10 xl:px-20 mt-20 md:mt-0 w-full'>
            {
                docu.map((e, index)=> (
                    <div key={index} className='mb-10'>
                        <h2 className='font-bold text-xl'>{e.titulo}</h2>
                        <h5 className='mb-5 mt-4'>{e.descripcion}</h5>
                        <h5>{e.otroDato}</h5>
                        {
                            e.codigo != "false" &&
                            <div className="flex flex-col mt-5 bg-black text-white rounded-lg">
                                <div className='flex justify-between text-sm px-4 py-2 pt-3'>
                                    <p>{e.lenguaje}</p>
                                    {
                                        e.codigo != "false" &&
                                    <button className='border px-3 mb-1 rounded-md hover:bg-gray-800' onClick={()=> handleCopy(e.codigo)}>Copiar</button>
                                    }
                                </div>
                                <SyntaxHighlighter language={e.lenguaje} 
                                    style={vscDarkPlus}
                                    customStyle={{fontSize: "0px", padding: "16px", borderRadius: "10px"}}
                                    showLineNumbers
                                    >
                                    {e.codigo}
                                </SyntaxHighlighter> 
                            </div>
                        }
                    </div>
                ))
            }                
        </div>
    )
}