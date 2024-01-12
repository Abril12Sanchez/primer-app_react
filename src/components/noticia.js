// propias funciones con MAYUS
export function Noticia(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <p>{props.cuerpo}</p>
        <p>{props.autor}</p>
        </>
    );
}
