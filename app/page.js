import Image from "next/image";
import estilos from "./page.module.css";
import Link from "next/link";
import Targetas from "@/componentes_Inicio/targetas_mebre/targeta";
import Comunicaciones from "@/componentes_Inicio/Comunicaciones/Comunicaciones";
export default function Home() {
  const targetas=["uno.png","dos.png","tres.png","cuatro.png","cinco.png","seis.png"]
  return (
    <>
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
              <a href="/" target="_blank" >
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="empty"
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>
              <a href="/" target="_blank" >
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="empty"
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>              <a href="/" target="_blank" >
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="empty"
                  width="600"
                  height="400"
                  className={estilos.asociaciones_img}
                />
              </a>              <a href="/" target="_blank" >
                <Image
                  src="/ejemplo.png"
                  alt="logo de la empresa"
                  priority={true}
                  placeholder="empty"
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
      <Comunicaciones></Comunicaciones>
    </>
  );
}
