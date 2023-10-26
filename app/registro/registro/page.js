import estilos from "./login.module.css";
import Imagenes_Registro from "../_Componentes_Registro/Imagenes_Animacion/Imagenes_Registro";
import Formulario from "../_Componentes_Registro/Formulario/Formulario";
export default async function login() {
  const correos= await fetch(`${process.env.Url_Conexion}correos`,{cache:"no-cache"}).then(a => a.json());
  const numeros= await fetch(`${process.env.Url_Conexion}numeros`,{cache:"no-cache"}).then(a => a.json());
  return (
    <div className={estilos.todo}>
      <div className={estilos.uno}>
        <Formulario correos={correos.length===0?[{correo:{}}]:correos} 
        numeros={numeros.length===0?[{numero:{}}]:numeros}></Formulario>
      </div>
      <div className={estilos.dos}>
        <Imagenes_Registro></Imagenes_Registro>
      </div>
    </div>
  );
}
