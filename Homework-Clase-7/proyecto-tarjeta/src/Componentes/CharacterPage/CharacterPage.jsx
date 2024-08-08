import React from 'react'
import './CharacterPage.css'
import { useState,useEffect } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'
import BotonPaginacion from '../Botones/BotonPaginacion'
import { NavLink } from 'react-router-dom';

export default function CharacterPage() {

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
          <div className="contenedor-character-page">
          <h1 className='titulo-character-page' >  RICK AND MORTY </h1>

          <div className="enlaces">
          <NavLink to='/' className='link' > Home </NavLink>|
          <NavLink to='/character' className='link' > Characters </NavLink>|
          <NavLink to='/episodios'className='link' > Episodios</NavLink>

         </div>
          
          <div className="character-page">
          { characterList.map( ( character ) => {
              return(
                  <CharacterCard
                  imagen={character.image}
                  estado={character.status}
                  nombre={character.name}
                  descripcion={character.species}  />)})}
          </div>



        <div className="contenedor-boton">
        <BotonPaginacion 
            setPage={setPage} 
            page={page}/>
        </div>

          </div>


    </>




  )
}
