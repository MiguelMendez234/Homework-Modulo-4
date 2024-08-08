import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CharacterCardEpisodio from '../CharacterCardEpisodio/CharacterCardEpisodio'
import './EpisodiosPage.css'
import { NavLink } from 'react-router-dom'
import BotonPaginacion from '../Botones/BotonPaginacion'

function EpisodiosPage() {

    const [ episodios, setEpisodios ]=useState([])
    const [ page, setPage ]=useState(1)

    const  url = 'https://rickandmortyapi.com/api/episode?page='

    useEffect(() => {
        fetch(url + page)
        .then(( respuesta )=> respuesta.json())
        .then(( data ) => {
            setEpisodios( data.results)
        })
    }, [page])


  return (
    <>
    <div className="contenedor-episodios-page">
        <h1 className='titulo-episodios-page' >RICK AND MORTY</h1>

     <div className="enlaces">
        <NavLink to='/' className='link' > Home </NavLink>|
         <NavLink to='/character' className='link' > Characters </NavLink>|
         <NavLink to='/episodios'className='link' > Episodios</NavLink>

        </div>
    <div className='episodios-page' >
        {episodios.map(( character) =>{
            return(

                <CharacterCardEpisodio
                name={character.name}
                episode={character.episode}
                date={character.air_date}/>) } )}
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

export default EpisodiosPage