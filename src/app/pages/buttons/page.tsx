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
                        buttons.estilos.simples.map((e, index)=>
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
                        buttons.estilos.compuestos.map((e, index)=>
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
                        buttons.estilos.variados.map((e, index)=>
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