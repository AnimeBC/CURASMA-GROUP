import Contenido from "./_extras/Contenido/page"
import Recarga from "./_extras/Recarga/page"
export default function Panel(){
    if("a"!=="a"){
        return(
            <>
                <Recarga></Recarga>
            </>
        )
    }else{
        return(
            <>
                <Contenido></Contenido>
            </>
        )
    }
}