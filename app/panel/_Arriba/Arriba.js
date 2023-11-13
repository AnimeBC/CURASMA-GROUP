import estilos from "./arriba.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Arriba() {
  return (
    <div className={estilos.todo}>
      <div className={estilos.logo}>
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
      </div>
      <div className={estilos.opciones}>
        <div className={estilos.caja_opcion}>
          <ion-icon name="contrast-outline"></ion-icon>
        </div>
      </div>
      <div className={estilos.cerrar_sesion}>
        <div className={estilos.cerrar_sesionL}>
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
        <div className={estilos.cerrar_sesionT}>Cerrar Sesion</div>
      </div>
    </div>
  );
}
