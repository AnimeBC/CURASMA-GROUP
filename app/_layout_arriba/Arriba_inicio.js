"use client";
import estilos from "./Arriba.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export function Arriba_inicio() {
  useEffect(() => {        
    const keyframes = document.styleSheets[0].insertRule(
      `
        @keyframes animacion_arriba_a{
          0%{top: -10%;}
        }
        `,0);
        const keyframesA = document.styleSheets[0].insertRule(
          `
          @keyframes animacion_arriba_b{
            0%{margin-top: -5%;}
          }
            `,0);
    const cabezera = document.getElementById("cabezera_A");
    //let scroll_top_anterior = window.pageYOffset;
    window.onscroll = function () {
      let scroll_top_ultimo = window.pageYOffset;
      if (scroll_top_ultimo > Number(cabezera.offsetHeight)/2) {
        cabezera.style ="position:fixed;top:0%;animation: animacion_arriba_a ease 0.3s;opacity:70%;";
      } else if(scroll_top_ultimo <= Number(cabezera.offsetHeight)/3){
        cabezera.style = "position: static;animation: animacion_arriba_b ease 0.3s;opacity:100%;";
      }
    };
  }, []);
  return (
    <div className={estilos.todo}>
      <header className={estilos.header} id="cabezera_A">
        <div className={estilos.imagen}>
          <Image
            src={"/ejemplo.png"}
            width={450}
            className={estilos.img}
            height={250}
            placeholder="blur"
            blurDataURL={"/ejemplo.png"}
          ></Image>
        </div>
        <nav className={estilos.contenido}>
          <div className={estilos.contenido_a}>
            <Link href="/" className={estilos.a}>
              Inicio
            </Link>
          </div>
          <div className={estilos.contenido_a}>
            <Link href="/registro/registro" className={estilos.a}>
              Registrarme
            </Link>
          </div>
          <div className={estilos.contenido_a}>
            <Link href="/registro/ingresar" className={estilos.a}>
              Iniciar sesion
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
