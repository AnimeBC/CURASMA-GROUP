import estilos from "./login.module.css";
import Imagenes_Registro from "@/Componentes_Registro/Imagenes_Animacion/Imagenes_Registro";
import Formulario from "@/Componentes_Registro/Formulario/Formulario";
export default function login() {
  return (
    <div className={estilos.todo}>
      <div className={estilos.uno}>
        <Formulario></Formulario>
      </div>
      <div className={estilos.dos}>
        <Imagenes_Registro></Imagenes_Registro>
      </div>
    </div>
  );
}
