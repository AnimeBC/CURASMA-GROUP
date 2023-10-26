import estilos from "./error.module.css";
import { useEffect, useState } from "react";
export default function Error({ mensaje, estado }) {
  const [clase, Fclase] = useState(estilos.todo);
  switch (estado) {
    case 1:
      <div className={clase}>Error: {mensaje}</div>;
      break;
    case 0:
      <></>;
      break;
    default:
    <></>;
      break;
  }
}
