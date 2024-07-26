import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">

    <div className='contenedor-tarjeta'>
      <div className="contenedor-imagen">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg" 
      alt="Foto de Cristiano Ronaldo " />
      </div>

      <h1>Cristiano Ronaldo </h1>

      <p>
      Cristiano Ronaldo dos Santos Aveiro Considerado con frecuencia el mejor y más completo futbolista,21​ así como el mayor goleador del mundo,22​ además de uno de los mejores de todos los tiempos;n 3​23​ es uno de los futbolistas más laureados de la historia, habiendo ganado, entre otras distinciones, cinco veces el Balón de Oro, cinco premios de la FIFA al mejor jugador del mundo y cuatro Botas de Oro. Ganador del Premio The Best FIFA de 2016 y Premio The Best FIFA de 2016.24​25​ En 2020, tuvo el honor de ser elegido el mejor Jugador del Siglo xxi en la gala de los Globe Soccer Awards,26​27​ convirtiéndose en el primer futbolista europeo y el primer portugués en recibirlo, además de ser incluido en el Dream Team del Balón de Oro.28​Fue ganador del premio Premio Puskás.29​
      </p>
    </div>

    </div>

    </>
  )
}

export default App
