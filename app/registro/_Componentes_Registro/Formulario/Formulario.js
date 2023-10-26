"use client";
import estilos from "./formulario.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Error from "../../_Error/Error";
export default function Formulario({correos,numeros}) {
  /** para prefijo de numeros */
  const [prefijo,Fprefijo]=useState("+51")
  const [imagen,Fimagen]=useState("/peru.png")
  const [maxNumero,FmaxNumero]=useState("9")
  const [placeholder,Fplaceholder]=useState("XXX XXX XXX") 
  const [error,Ferror]=useState(0)
  const [mesaje_error,Fmensaje_error]=useState("")
  const paises=[{valor:"+51",imagen:"/peru.png",place:"XXX XXX XXX",numMax:9},
  {valor:"+1",imagen:"/eu.png",place:"(XXX) XXX XXXX",numMax:11}]
  //**/ */
  /**para la contraseña */
  const [contraseña,Fcontraseña]=useState({uno:{estado:0},dos:{estado:0}})
  const [contraseña_texto,Fcontraseña_texto]=useState({uno:{contraseña:""},dos:{contraseña:""}})
  //** */
  /**para los imput tipo radio */
  const [radio,Fradio]=useState({uno:{input:false},dos:{input:false}})
  /*Formulario Link*/
  useEffect(()=>{
    const filtrado=paises.filter((a)=>a.valor===prefijo)
    Fimagen(filtrado[0].imagen)
    Fplaceholder(filtrado[0].place)
    FmaxNumero(filtrado[0].numMax)
  },[prefijo])
  function envio(){
    let error=Number;
    let datos={};
    return datos
  }
  return (
    <>
      <div className={estilos.formulario}>
        <Error mensaje={""} estado={error}></Error>
        <h1 className={estilos.titulo}>Formulario de Registro</h1>
        <form action={`${process.env.NEXT_PUBLIC_URL}validarRegistro`} method="POST">
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} htmlFor="nombre">
              Nombre:
            </label>
            <input
              className={estilos.input}
              type="text"
              id="nombre"
              name="nombre"
              required
            />
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} htmlFor="email">
              Correo Electrónico:
            </label>
            <input
              className={estilos.input}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} htmlFor="telefono">
              Teléfono:
            </label>
            <div className={estilos.telefono}>
              <div className={estilos.prefijo}>
                <Image className={estilos.prefijo_imagen} src={`${imagen}`} width={450} height={250}></Image>
                <select name="prefijo_n" id="prefijo" onClick={(a)=>Fprefijo(a.target.value)}>
                  <option key="+51" defaultValue={"+51"}>+51</option>
                  <option key="+1" defaultValue={"+1"} >+1</option>
                </select>
              </div>
              <input
                className={estilos.input_prefijo}
                placeholder={`${placeholder}`}
                type="tel"
                id="telefono"
                name="telefono"
                maxLength={`${maxNumero}`}
                pattern="[0-9]{9}"
              />
            </div>
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} htmlFor="contraseña">
              Contraseña:
            </label>
            <div className={estilos.contraseña}>
              <input
              className={estilos.input}
              onKeyUp={(a)=>Fcontraseña_texto({uno:{contraseña:a.target.value},dos:{contraseña:contraseña_texto.dos.contraseña}})}
              type={contraseña.uno.estado===true?`${"text"}`:`${"password"}`}
              id="contraseña"
              name="contraseña"
              required
              />
              {contraseña.uno.estado===true?
              <ion-icon name="eye-outline" onClick={()=>Fcontraseña({uno:{estado:false},dos:{estado:contraseña.dos.estado}})}></ion-icon>:
              <ion-icon name="eye-off-outline" onClick={()=>Fcontraseña({uno:{estado:true},dos:{estado:contraseña.dos.estado}})}></ion-icon>} 
            </div>
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} htmlFor="contraseñaP">
              Escribir Contraseña Nuevamente
            </label>
            <div className={estilos.contraseña}>
              <input
              onKeyUp={(a)=>Fcontraseña_texto({uno:{contraseña:contraseña_texto.uno.contraseña},dos:{contraseña:a.target.value}})}
              className={estilos.input}
              type={contraseña.dos.estado===true?`${"text"}`:`${"password"}`}
              id="contraseñaP"
              name="contraseñaP"
              required
              />
              {contraseña.dos.estado===true?
              <ion-icon name="eye-outline" onClick={()=>{Fcontraseña({uno:{estado:contraseña.uno.estado},dos:{estado:false}})}}></ion-icon>:
              <ion-icon name="eye-off-outline" onClick={()=>Fcontraseña({uno:{estado:contraseña.uno.estado},dos:{estado:true}})}></ion-icon>} 
            </div>
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label}>
              Tipo de cuenta:
            </label>
            <div className={estilos.input_radio}>
              <div className={radio.uno.input===1?estilos.input_radio_activado:estilos.input_radio_contenido}>
                <input onClick={()=>Fradio({uno:{input:1},dos:{input:radio.dos.input}})} type="radio" id="TipoEmpleadoA" name="TipoEmpleado" defaultValue={`Cliente`}/>
                <label htmlFor="TipoEmpleadoA">Cliente</label>
              </div>
              <div className={radio.uno.input===2?estilos.input_radio_activado:estilos.input_radio_contenido}>
                <input onClick={()=>Fradio({uno:{input:2},dos:{input:radio.dos.input}})} type="radio" id="TipoEmpleadoB" name="TipoEmpleado" defaultValue={`Trabajador`}/>
                <label htmlFor="TipoEmpleadoB">Trabajador</label>
              </div>
            </div>
          </div>
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label}>
              Genero
            </label>
            <div className={estilos.input_radio}>
              <div className={radio.dos.input===1?estilos.input_radio_activado:estilos.input_radio_contenido}>
                <input onClick={()=>Fradio({uno:{input:radio.uno.input},dos:{input:1}})} type="radio" id="GeneroA" name="Genero" defaultValue={`Femenino`}/>
                <label htmlFor="GeneroA">Femenino</label>
              </div>
              <div className={radio.dos.input===2?estilos.input_radio_activado:estilos.input_radio_contenido}>
                <input onClick={()=>Fradio({uno:{input:radio.uno.input},dos:{input:2}})} type="radio" id="GeneroB" name="Genero" defaultValue={`Masculino`}/>
                <label htmlFor="GeneroB">Masculino</label>
              </div>
            </div>
          </div>
          <div>
            Aceptar terminos de uso
          </div>
          <div className={estilos.formulario_grupo}>
            <button className={estilos.envio} onClick={envio}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}
