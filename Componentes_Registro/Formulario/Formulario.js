"use client";
import estilos from "./formulario.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Formulario() {
  return (
    <>
      <div className={estilos.formulario}>
        <h1 className={estilos.titulo}>Formulario de Registro</h1>
        <form action="#" method="POST">
          <div className={estilos.formulario_grupo}>
            <label className={estilos.label} for="nombre">
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
            <label className={estilos.label} for="email">
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
            <label className={estilos.label} for="telefono">
              Teléfono:
            </label>
            <div className={estilos.telefono}>
              <div className={estilos.prefijo}>
                <Image className={estilos.prefijo_imagen} src={"/peru.png"} width={450} height={250}></Image>
                <select name="prefijo_n" id="prefijo">
                  <option defaultValue="+51" key="" selected="select">+51</option>
                  <option defaultValue="+1" key="">+1</option>
                </select>
              </div>
              <input
                className={estilos.input}
                type="tel"
                id="telefono"
                name="telefono"
                pattern="[0-9]{9}"
              />
            </div>
          </div>
          <div className={estilos.formulario_grupo}>
            <button className={estilos.envio}>Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}
