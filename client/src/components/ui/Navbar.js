import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,NavLink } from 'react-router-dom'
import { countriesByName, getAllCountries } from '../../actions/Actions';

import './Navbar.css'

export const Navbar = () => {

    const dispatch = useDispatch()

    const [input, setSearch] = useState({
        search: '',
    });

    const handleSearch = ({ target }) => {
        setSearch({
            ...input,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.search.length !== 0) {
            dispatch(countriesByName(input.search))
        }
        else {
            dispatch(getAllCountries())
        }

    }

    return (
        <div className='navbar__container'  >

            <div className='navbar__items'>

                <img className='navbar__icon' src='/assets/world.svg' alt='world' />
                <form onSubmit={handleSubmit}>
                    <input className='navbar__input'
                        type='text' name='search'
                        placeholder='Search a Country...'
                        autoComplete='off'
                        value={input.search}
                        onChange={handleSearch} />
                    <button className='navbar__btn' type='submit'><i className="fas fa-search" ></i></button>
                </form>

                <NavLink clasName= '__link' to='/activity'>Create Activity   <i className="fas fa-plus-square fa-x2"></i></NavLink>
            </div>

        </div>
    )
}