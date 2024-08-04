
import './App.css'
import RickAndMortyCharacterCard from './Componentes/RickAndMortyCharacterCard/RickAndMortyCharacterCard'

function App() {


  return (
    <>
      <h1>Personajes de Rick And Morty</h1>

      <div className="App">
      <RickAndMortyCharacterCard id= {90}/>
      <RickAndMortyCharacterCard id= {99}/>
      <RickAndMortyCharacterCard id= {200}/>
      <RickAndMortyCharacterCard id= {300}/>
      <RickAndMortyCharacterCard id= {2}/>
      <RickAndMortyCharacterCard id= {1}/>



      </div>

    </>
  )
}

export default App
