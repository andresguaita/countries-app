import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link,NavLink } from 'react-router-dom'
import { countriesByName, getAllCountries } from '../../actions/Actions';

import './Navbar.css'

export const Navbar = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState('')

    const handleSearch = ({ target }) => {
        setSearch(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length !== 0) {
            dispatch(countriesByName(search))
            setSearch('')
        }
        else {
            dispatch(getAllCountries())
        }

    }

    return (
        <div className='navbar__container'  >

            <div className='navbar__items'>

                <Link to='/'><img className='navbar__icon--world' src='/assets/world.svg' alt='world' /></Link>
                <form onSubmit={handleSubmit}>
                    <input className='navbar__input'
                        type='text' name='search'
                        placeholder='Search a Country...'
                        autoComplete='off'
                        value={search}
                        onChange={handleSearch} />
                    <button className='navbar__btn' type='submit'><img src='assets/search-icon.svg' alt='city'className='navbar__icon'/></button>
                </form>

                <Link className= 'navbar__link' to='/activity'><img src='assets/plus-icon.svg' alt='city'className='navbar__icon--plus'/>Create Activity</Link>
            </div>

        </div>
    )
}