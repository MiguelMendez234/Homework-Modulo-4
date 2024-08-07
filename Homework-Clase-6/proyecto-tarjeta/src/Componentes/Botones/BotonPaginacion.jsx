import './BotonPaginacion.css'


function BotonPaginacion( prop ) {

    const incrementoBoton = () => {
        prop.setPage( prop.page +1)
    }

    const decrementoBoton = () => {
        prop.setPage( prop.page -1)
    }


  return (
    <div>
    <button className="boton" onClick={incrementoBoton}> Siguiente </button>
    <button  className="boton" onClick={decrementoBoton}> Anterior </button>

    </div>
  )
}

export default BotonPaginacion