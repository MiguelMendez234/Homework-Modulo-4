import React from "react";
import '../styles/Imagen.css'
const Imagen = (props) => {
    return(
        <>
        <img className='imagen-tarjeta' src= {props.imagen} alt='Imagen de Rick And Morty' />
       </>
    )
}

export default Imagen