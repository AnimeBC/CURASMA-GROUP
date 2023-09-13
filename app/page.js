import Image from "next/image";
import estilos from "./page.module.css";
import Link from "next/link";
import Targetas from "./_componentes_Inicio/targetas_mebre/targeta";
import Comunicaciones from "./_componentes_Inicio/Comunicaciones/Comunicaciones";
import { Arriba_inicio } from "./_layout_arriba/Arriba_inicio";
export default function Home({}) {
  const targetas = [
    "uno.png",
    "dos.png",
    "tres.png",
    "cuatro.png",
    "cinco.png",
    "seis.png",
  ];
  const targetasA = [
    {
      url: "http://localhost:3000/#aun%20nada",
      imagen: "/dos.png",
      informacion:
        "Este registro te ayudara a mejorar la calidad de la conexiones",
      enlace_nombre: "Saber Más",
      titulo: "Ayuda al cliente",
    },
    {
      url: "http://localhost:3000/#aun%20nada",
      imagen: "/uno.png",
      informacion:
        "Este registro te ayudara a mejorar la calidad de la conexiones",
      enlace_nombre: "ver",
      titulo: "Ayuda al cliente",
    },
    {
      url: "http://localhost:3000/#aun%20nada",
      imagen: "/uno.png",
      informacion:
        "Este registro te ayudara a mejorar la calidad de la conexiones",
      enlace_nombre: "Saber Más",
      titulo: "Ayuda al cliente",
    },
  ];
  return (
    <>
      <Arriba_inicio></Arriba_inicio>
      <div className={estilos.todo}>
        <div className={estilos.todoA}>
          <div className={estilos.logo}>
            <Image
              src="/ejemplo.png"
              alt="logo de la empresa"
              priority={true}
              placeholder="empty"
              width="600"
              height="400"
              className={estilos.img}
            />
          </div>
          <header className={estilos.titulos}>
            <h1>CURASMA GROUP</h1>
            <h2>Descripcion</h2>
          </header>
          <div>
            <div className={estilos.asociaciones}>
              <a href="/" target="_blank">
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  width="600"
                  height="400"
                  placeholder="blur"
                  blurDataURL={"/ejemplo.png"}
                  className={estilos.asociaciones_img}
                />
              </a>
              <a href="/" target="_blank">
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={"/ejemplo.png"}
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>{" "}
              <a href="/" target="_blank">
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={"/ejemplo.png"}
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>{" "}
              <a href="/" target="_blank">
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="blur"
                  blurDataURL={"/uno.png"}
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={estilos.todoB}>
          <div className={estilos.todoB_R}>
            <Targetas targetas={targetas}></Targetas>
          </div>
        </div>
      </div>
      <Comunicaciones targetas={targetasA}></Comunicaciones>
    </>
  );
}
