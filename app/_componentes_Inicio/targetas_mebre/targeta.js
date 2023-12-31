"use client";
import estilos from "./targeta.module.css";
import Image from "react-cool-img";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Targetas({ targetas }) {
    const [mostrar_imagen,Fmostrar_imagen] = useState(false)
    const [posicion_imagen,Fposicion_imagen] = useState("")
    useEffect(()=>{

    },[mostrar_imagen])
    if (targetas !== undefined || targetas !== null || targetas.length !== 0) {
    return (
      <div>
        {
            mostrar_imagen===false?<></>:<div className={estilos.extra_efecto}>
                <img
                  src={`/${posicion_imagen}`}
                  alt={`${posicion_imagen}`}
                  priority="true"
                  className={estilos.extra}
                />
                <div className={estilos.salir} onClick={()=>Fmostrar_imagen(false)}>
                    volver
                </div>
            </div>
        }
        <div className={estilos.todo}>
          <div className={estilos.imagen_comportamiento}>
            {targetas.map((a, b) => (
              <div className={estilos.imagenes} key={b}>
                <Image
                  src={`/${a}`}
                  onClick={()=>{Fmostrar_imagen(true);Fposicion_imagen(`${a}`);      window.scrollTo({
                    top: Number(Math.floor(0)),
                    behavior: 'smooth',
                  });}}
                  alt="logo de la empresa"
                  placeHolder={`/${a}`}
                  className={estilos.img}
                />
              </div>
            ))}
          </div>
          <div className={estilos.registro}>
            <Link href="/registro/login" className={estilos.registro_A}>
              
            </Link>
            <Link href="/registro/signup" className={estilos.registro_B}>
              
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
