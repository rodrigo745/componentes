"use client";
import { useRouter } from 'next/navigation';

export default function Aside(){
    const router = useRouter();

    return(
        <div className="min-w-80 border-l-2 my-10 p-10 hidden xl:block">
            <div className="contNav">
              <h2>En esta sección</h2>
              <p>- Botones</p>
              <p>- Descripción</p>
              <p>- Vista de componentes</p>
              <p>- Boton uno</p>
              <p>- Boton dos</p>
              <p>- Boton tres</p>
              <p>- Boton cuatro</p>
            </div>
          </div>
    )
}