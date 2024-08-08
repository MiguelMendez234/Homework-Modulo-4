
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Componentes/HomePage/HomePage'
import CharacterPage from './Componentes/CharacterPage/CharacterPage'
import NotFoundPage from './Componentes/NotFoungPage/NotFoundPage'
import EpisodiosPage from './Componentes/EpisodiosPage/EpisodiosPage'

function App() {



  return (
    <>
    <div className='App'>
      
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<HomePage/>} >  </Route>
          <Route path='/character'element={<CharacterPage/>} >  </Route>
          <Route path='/episodios'element={<EpisodiosPage/>} >  </Route>
          <Route path='/*'element={<NotFoundPage/>} >  </Route>


        </Routes>

      </BrowserRouter>

    </div>
    
    </>
  )
}

export default App
