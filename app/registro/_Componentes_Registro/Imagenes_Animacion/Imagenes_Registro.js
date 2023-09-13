"use client";
import estilos from "./imagene.module.css";
import Image from "next/image";
export default function Imagenes_Registro({ imagenes }) {
  return (
    <>
      <div className={estilos.todo}>
        <div className={estilos.imagenes}>
          <Image src="/meme.png" alt="" width={450} height={450} />
        </div>
        <div>
          <Image src="/meme.png" alt="" width={450} height={450} />
        </div>
      </div>
      <div className={estilos.numeros}></div>
    </>
  );
}
