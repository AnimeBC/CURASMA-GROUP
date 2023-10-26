"use client";
import estilos from "./crear.module.css"
import { useState,useRef } from "react"
export default function crear({searchParams}) {
    const prefijo_n=searchParams.prefijo_n
    const email=searchParams.email
    const telefono=searchParams.telefono
    /**estado para el codigo de verificacion*/
    const [codigo,Fcodigo] = useState(false)
    /*referencias para recopila inputs u otros*/
    function envio(dato,estado){
        Fcodigo(true)
    }
    return (
        <div className={estilos.todo}>
            <div className={estilos.cuerpo}>
                <div method="POST" action={`${process.env.NEXT_PUBLIC_URL}confirmacion`}>
                    <div className={estilos.titulo}>
                        Elige el metodo de envio para tu codigo de verificacion ツ
                    </div>
                    <div className={estilos.cajas}>
                        <div className={estilos.iconos}>
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <input className={estilos.cajaA} type="text" defaultValue={email} disabled={true}/>
                        <div className={estilos.cajaB} onClick={()=>envio(email,1)}>
                            𝑬𝒏𝒗𝒊𝒂𝒓
                        </div>
                    </div>
                    <div className={estilos.cajas}>
                        <div className={estilos.iconos}>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <input className={estilos.cajaA} type="text" defaultValue={`${prefijo_n} ${telefono}`} disabled={true}/>
                        <div className={estilos.cajaB} onClick={()=>envio(`${prefijo_n} ${telefono}`,2)}>
                            𝑬𝒏𝒗𝒊𝒂𝒓
                        </div>
                    </div>
                    <div className={estilos.cajas}>
                        <div className={estilos.iconos}>
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <input className={estilos.cajaA} type="text" defaultValue={`${prefijo_n} ${telefono}`} disabled={true}/>
                        <div className={estilos.cajaB} onClick={()=>envio(`${prefijo_n} ${telefono}`,3)}>
                            𝑬𝒏𝒗𝒊𝒂𝒓
                        </div>
                    </div>
                </div>
                <div className={estilos.Code}>
                    {codigo===false?
                    <div>...</div>
                    :
                    <div>
                        <div className={estilos.CodeA}>
                            <VerificationInput maxLength={1}/>
                            <VerificationInput maxLength={1}/>
                            <VerificationInput maxLength={1}/>
                            <VerificationInput maxLength={1}/>
                            <VerificationInput maxLength={1}/>
                            <VerificationInput maxLength={1}/>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
      );
}

export function VerificationInput({ maxLength }) {
  const [value, setValue] = useState('');

  const adentro = (a) => {
    const inputValue = a.target.value;

    /**solo numeros if (/^\d*$/.test(inputValue) && inputValue.length <= maxLength) { */
    if (inputValue.length <= maxLength) {
        setValue(inputValue);
        if (!(/^\d*$/.test(inputValue))){
            setValue(inputValue.toUpperCase());
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
    if (a.key === 'Backspace' && value === '') {
      const prevInput = a.target.previousSibling;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <input
      type="text"
      value={value}
      className={estilos.Code_A}
      onChange={adentro}
      onKeyDown={afuera}
      maxLength={maxLength}
    />
  );
}