import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {

  return (

    <div className='home'>

        <h1>RICK AND MORTY </h1>

        <div className="enlaces">
        <NavLink to='/' className='link' > Home </NavLink>|
         <NavLink to='/character' className='link' > Characters </NavLink>|
         <NavLink to='/episodios'className='link' > Episodios</NavLink>

        </div>

    </div>
  )
}
