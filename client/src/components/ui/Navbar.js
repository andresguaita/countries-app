import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { countriesByName, getAllCountries } from '../../actions/Actions';

export const Navbar = ({setCurrentPage}) => {

    const dispatch = useDispatch()

    const [input, setSearch] = useState({
        search: '',
    });

    const handleSearch = ({target}) =>{
        setSearch({
            ...input,
            [ target.name ]: target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(input.search.length!==0) {
            dispatch(countriesByName(input.search))
        }
        else{
            dispatch(getAllCountries())
        }
       
    }

    return (
        <div className='navbar__content' >
          
           <Link 
            className='link'
             to="/"
            >
            Countries Proyect
            </Link>
          <form onSubmit={handleSubmit} >

          <input className='input' 
          type='text' name='search' 
          placeholder='Search a Country...' 
          autoComplete='off'
          value= {input.search}
          onChange={handleSearch}/>
          <button className='btn btn-primary' type='submit'>Search</button>
          </form>
           
           
          
        </div>
    )
}