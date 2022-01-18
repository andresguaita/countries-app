import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar__content' >
          
           <Link 
            className='link'
             to="/"
            >
            Countries Proyect
            </Link>
          
           
           <input className='input' type='text' placeholder='Search a Country...'/>
          
        </div>
    )
}