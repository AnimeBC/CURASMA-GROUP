"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import estilos from "./contenido.module.css";
import { useRouter } from "next/navigation";
export default function Contenido() {
  let pocicion = 0;
  return (
    <div className={estilos.todo}>
      <Lateral pocicion={pocicion}></Lateral>
      <Central pocicion={pocicion}></Central>
    </div>
  );
}
function Lateral(pocicicion) {
  return (
    <div className={estilos.Ltodo}>
      <div className={estilos.perfil}>
      <Image
          src="/ejemplo.png"
          alt="logo de la empresa"
          priority={true}
          width="100"
          height="200"
          placeholder="blur"
          blurDataURL={"/ejemplo.png"}
          className={estilos.img}
        />
        <p>Brayan Jhoan Curasma Espinoza</p>
      </div>
      <div>Progresos</div>
      <div>Tienda</div>
      <div>Mensajes</div>
      <div>Cuenta</div>
    </div>
  );
}
function Central(pocicicion) {
  return <div></div>;
}
