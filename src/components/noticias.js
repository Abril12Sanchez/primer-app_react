import { Noticia } from "./noticia";

export function Noticias(props){
    return(
        <>
        <Noticia titulo="ENTREGA DE BECAS"
        cuerpo="El estado de Queretaro entrega becas a todos los estudiantes universitarios" 
        autor="Autor: Abril Sanchez" />
    
        <Noticia titulo="INTERNET PARA TODOS"
        cuerpo="Los alumnos de la UTSJR exigen buen internet para sus actividades" 
        autor="Autor: Abril Sanchez" />
    
        <Noticia titulo="MARCIANOS EN LA TIERRA?"
        cuerpo="Varias investigaciones predicen una invacion de extraterrestres en el planeta tierra" 
        autor="Autor: Abril Sanchez" />
        </>
    );
}