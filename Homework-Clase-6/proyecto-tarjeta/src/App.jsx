
import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './Componentes/CharacterCard/CharacterCard'
import BotonPaginacion from './Componentes/Botones/BotonPaginacion';

function App() {
  const [ characterList, setCharacterList ] = useState([]); 
  const [ page, setPage ]=useState(1)

  const url ='https://rickandmortyapi.com/api/character/?page='

  
  useEffect(( ) => {
     
    fetch( url + page)
    .then(( response ) => response.json())
    .then (( data ) => {
      setCharacterList(data.results)
    })
  }, [page])


  return (
    <>
      <h1>Personajes de Rick And Morty</h1>

      <div className="App">
        {
          characterList.map( ( character ) => {
            return(
              <CharacterCard
              imagen={character.image}
              estado={character.status}
              nombre={character.name}
              descripcion={character.species}  />

            )})}
      </div>

      <div className="contenedor-botones">
            <BotonPaginacion 
            setPage={setPage} 
            page={page}/>

      </div>


    </>
  )
}

export default App
