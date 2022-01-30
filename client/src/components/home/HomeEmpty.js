import React from 'react';
import { useDispatch } from 'react-redux';

import { getAllCountries } from '../../actions/Actions';


import './HomeEmpty.css'

export const HomeEmpty = () => {

    const dispatch = useDispatch()

    const handleReload = () =>{
     
            dispatch(getAllCountries())
          
    }



  return (
      <div className='home__empty'>
          <div className='home__empty--items'>
          <p className='home__empty--text'>Sorry!<br/>Country not found</p>
          <img className='home__empty--img' alt='' src='/assets/face.svg'/>
          <button className='home__empty--button' onClick={handleReload}>Reload</button>
          </div>
          
      </div>
  )
};