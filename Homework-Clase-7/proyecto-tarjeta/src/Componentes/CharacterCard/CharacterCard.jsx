import React from 'react'
import Estado from '../Estado/Estado'
import Imagen from '../Imagen/Imagen'
import Details from '../Details/Details'
import '../Styles/CharacterCard.css/'


function CharacterCard(props) {


  return (
    <>
      
    <div className="tarjeta">
    <Imagen
      imagen={props.imagen} />

    <div className="estado">
      <Estado
        estado={props.estado} />
    </div>

    

    <Details 
    nombre={props.nombre}
    descripcion={props.descripcion} />

    </div>





    
    </>
  )
}

export default CharacterCard