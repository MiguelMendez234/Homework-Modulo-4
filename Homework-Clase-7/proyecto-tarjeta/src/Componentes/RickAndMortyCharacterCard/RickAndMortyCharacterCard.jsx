import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { useState} from 'react'
import { useEffect } from 'react'
import '../RickAndMortyCharacterCard/Styles/RickAndMortyCharacterCard.css'



function RickAndMortyCharacterCard(props) {
    const[imagen, setImagen] = useState('')
    const[estado, setEstado] = useState('')
    const[datails, setDetails] = useState('')
    const[descripcion, setDescripcion] = useState('')

    const RickAndMortyCharacterCard = props.id;

    useEffect(() => {
        const url = 'https://rickandmortyapi.com/api/character/';
        fetch(url + RickAndMortyCharacterCard)
        .then((result) => result.json())
        .then((result) => {
            setImagen(result.image)
            setDetails(result.name)
            setEstado(result.status)
            setDescripcion(result.species)
        })
      }, [])
    
  return (
    <>

<div className="tarjeta">

<CharacterCard
imagen={imagen}
estado = {estado}
nombre={datails}
descripcion= {descripcion}/ >
 
</div>
 
  
    </>
  )

}

export default RickAndMortyCharacterCard