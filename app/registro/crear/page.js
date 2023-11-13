"use client";
import { useRouter  } from "next/navigation";
import estilos from "./crear.module.css";
import { useState, useRef, useEffect } from "react";
export default function crear({ searchParams }) {
  const prefijo_n = searchParams.prefijo_n;
  const email = searchParams.email;
  const telefono = searchParams.telefono;
  /**estado para el codigo de verificacion*/
  const [codigo, Fcodigo] = useState(false);
  const [verificador,Fvierficador] = useState("")
  const FcodigoC = ["", "", "", "", "", ""];
  /** */
  function Envio_datos(estado) {
    Fcodigo(true);
    // Realiza una solicitud POST a un servidor
    fetch(`${process.env.NEXT_PUBLIC_URL}codigo`, {
      method: "POST",
      body:  JSON.stringify({"correo":email,"numero":`${prefijo_n} ${telefono}`,"estado":estado}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((respuesta) => respuesta.json())
      .then((D_codigo) => {
        Fvierficador(D_codigo)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      event.preventDefault(); // Evita el envío por defecto del formulario
  }
  return (
    <div className={estilos.todo}>
      <div className={estilos.cuerpo}>
        <div>
          <div className={estilos.titulo}>
            Elige el metodo de envio para tu codigo de verificacion ツ
          </div>
          <form
            className={estilos.cajas}
            method="POST"
            action={`${process.env.NEXT_PUBLIC_URL}codigo`}
          >
            <div className={estilos.iconos}>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <input
              className={estilos.cajaA}
              type="text"
              defaultValue={email}
              disabled={true}
            />
            <button className={estilos.cajaB} onClick={() => Envio_datos(1)}>
              𝑬𝒏𝒗𝒊𝒂𝒓
            </button>
          </form>
          <form
            className={estilos.cajas}
            method="POST"
            action={`${process.env.NEXT_PUBLIC_URL}codigo`}
          >
            <div className={estilos.iconos}>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <input
              className={estilos.cajaA}
              type="text"
              defaultValue={`${prefijo_n} ${telefono}`}
              disabled={true}
            />
            <button className={estilos.cajaB} onClick={() => Envio_datos(2)}>
              𝑬𝒏𝒗𝒊𝒂𝒓
            </button>
          </form>
          <form
            className={estilos.cajas}
            method="POST"
            action={`${process.env.NEXT_PUBLIC_URL}codigo`}
          >
            <div className={estilos.iconos}>
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <input
              className={estilos.cajaA}
              type="text"
              defaultValue={`${prefijo_n} ${telefono}`}
              disabled={true}
            />
            <button className={estilos.cajaB} onClick={() => Envio_datos(3)}>
              𝑬𝒏𝒗𝒊𝒂𝒓
            </button>
          </form>
        </div>
        <div className={estilos.Code}>
          {codigo === false ? (
            <div>...</div>
          ) : (
            <div>
              <div className={estilos.CodeA}>
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={0}
                />
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={1}
                />
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={2}
                />
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={3}
                />
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={4}
                />
                <VerificationInput
                  maxLength={1}
                  verificador={verificador}
                  FcodigoC={FcodigoC}
                  posicion={5}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function VerificationInput({ maxLength, FcodigoC, posicion,verificador }) {
  const [valor, Fvalor] = useState("");
  const router=useRouter()
  const codigoNuevo=FcodigoC.join().toUpperCase().replace(/,/g,'')
  if (codigoNuevo.length === 6) {
    if(verificador===codigoNuevo){
      router.push("/panel")
    }else{
      console.log("cambios cuando no funciona");
    }
  } else {
  }
  const adentro = (a) => {
    const inputValue = a.target.value;
    /**solo numeros if (/^\d*$/.test(inputValue) && inputValue.length <= maxLength) { */
    if (inputValue.length <= maxLength) {
      Fvalor(inputValue);
      FcodigoC.splice(posicion, 1, inputValue.toString());
      if (!/^\d*$/.test(inputValue)) {
        Fvalor(inputValue.toUpperCase());
      }
      if (inputValue.length === maxLength) {
        const nextInput = a.target.nextSibling;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };
  const afuera = (a) => {
    if (a.key === "Backspace" && valor === "") {
      const prevInput = a.target.previousSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <input
      type="text"
      value={valor}
      className={estilos.Code_A}
      onChange={adentro}
      onKeyDown={afuera}
      maxLength={maxLength}
    />
  );
}
