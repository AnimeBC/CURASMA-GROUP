import estilos from "./error.module.css"
export default async function error({searchParams}) {
    if(searchParams.error==="existeC"){
        return <div>
            El Correo ya existe
        </div>
    }else if(searchParams.error==="existeN"){
        return <div>
        El Numero ya existe
    </div>
    }else{
        return (
            <div className={estilos.todo}>
                
            </div>
          );
    }
}