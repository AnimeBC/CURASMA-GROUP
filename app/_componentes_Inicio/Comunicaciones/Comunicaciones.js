"use client";
import estilos from "./comunicaciones.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Comunicaciones({ targetas }) {
  return (
    <div className={estilos.todo}>
      <div>
        {targetas.length !== 0 ? (
          targetas.map((a, b) =>
            b % 2 === 0 ? (
              <div key={b}>
                <DiseñoA objeto={a}></DiseñoA>
              </div>
            ) : (
              <div key={b}>
                <DiseñoB objeto={a}></DiseñoB>
              </div>
            )
          )
        ) : (
          <div>a</div>
        )}
      </div>
    </div>
  );
}
function Separador() {
  return <div className={estilos.separador}></div>;
}
function DiseñoA({ objeto }) {
  return (
    <div className={estilos.uno}>
      <div className={estilos.uno_imagen}>
        <Image
          src={`${objeto.imagen}`}
          alt={`${objeto.titulo}`}
          priority={true}
          placeholder="empty"
          width="600"
          height="400"
          className={estilos.uno_img}
        />
        <Link href="/#sdasd" className={estilos.uno_imagen_efecto}>
            <div className={estilos.uno_imagen_efecto_texto}><ion-icon name="open-outline"></ion-icon>{objeto.enlace_nombre}<ion-icon name="open-outline"></ion-icon></div>
        </Link>
      </div>
      <div className={estilos.uno_informacion}>
        <div className={estilos.uno_titulo}>{objeto.titulo}</div>
        <div className={estilos.uno_informacion_A}>
          <div className={estilos.uno_informacion_A_a}>{objeto.informacion}</div>
          <Link href={objeto.url} className={estilos.uno_informacion_A_b}><ion-icon name="open-outline"></ion-icon></Link>
        </div>
      </div>
    </div>
  );
}
function DiseñoB({ objeto }) {
  return (
    <div className={estilos.dos}>
      <div className={estilos.dos_informacion}>
        <div className={estilos.dos_titulo}>{objeto.titulo}</div>
        <div className={estilos.dos_informacion_A}>
          <div className={estilos.uno_informacion_A_a}>{objeto.informacion}</div>
          <Link href={objeto.url} className={estilos.uno_informacion_A_b}><ion-icon name="open-outline"></ion-icon></Link>
        </div>
      </div>
      <div className={estilos.uno_imagen}>
      <Image
          src={`${objeto.imagen}`}
          alt={`${objeto.titulo}`}
          priority={true}
          placeholder="empty"
          width="600"
          height="400"
          className={estilos.uno_img}
        />
        <Link href="/#sdasd" className={estilos.uno_imagen_efecto}>
            <div className={estilos.uno_imagen_efecto_texto}><ion-icon name="open-outline"></ion-icon>{objeto.enlace_nombre}<ion-icon name="open-outline"></ion-icon></div>
        </Link>
      </div>
    </div>
  );
}
