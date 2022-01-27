import React from 'react';

import './LoadingScreen.css'

export const LoadingScreen = () => {
  return (
      <div className='loading'>
          <div className='loading__items'>
          <p className='loading__text'>Loading...</p>
          <img className='loading__img' alt='' src='/assets/loading2.gif'/>
          </div>
          
      </div>
  )
};
