import React from 'react'
import './App.css'
import Imagen from './Componentes/Imagen'
import Estado from './Componentes/Estado'
import Details from './Componentes/Details'

function App() {

  return (
    <>
      <div className="App">

        <div className="tarjeta">


          <Imagen
          imagen='https://i.pinimg.com/222x/ae/2a/f7/ae2af797468cff59d9e4c93b30cb31e8.jpg' />

          <div className="estado">
            <Estado
            estado='Alives' />
          </div>

          <div className="contenido">
            

            <Details
            nombre='Rick And Morty'
            descripcion='Human' />

          </div>


        </div>
        
      </div>
    </>
  )
}

export default App
