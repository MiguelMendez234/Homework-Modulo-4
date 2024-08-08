import React from 'react'
import './CharacterCardEpisodio.css'

function CharacterCardEpisodio( prop ) {


  return (

    <>

    <div className="tarjeta-episodios">
        <h1> {prop.name} </h1>
        
        <div className="episodio">
        <h2> {prop.episode} </h2>
        </div>

        <h3> {prop.date} </h3>
    </div>

    </>


  )
}

export default CharacterCardEpisodio