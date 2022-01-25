import React from 'react';
import { useSelector } from 'react-redux';

import './ActivitiesScreen.css'

export const ActivitiesScreen = () => {

    const { countryDetail } = useSelector(state => state.country)
  return (
            <div className='activities__contain'>
                <h1 className='activities__title'>{`${countryDetail.name} Activities`}</h1>
                {countryDetail.activities? countryDetail.activities.length? countryDetail.activities.map(a=>(
                    <div>
                        <section className='activities__item'>
                        <p>{`Name: ${a.name}`}</p>
                        <p>{`Duration: ${a.duration}`}</p>
                        <p>{`Difficulty:  ${a.difficulty}`}</p>
                        <p>{`Season: ${a.season}`}</p>
                    </section>
                    <hr></hr>
                    </div>
                    
                )): <div>
                    <h1 className='activities__notfount'>Activities not found</h1>
                    </div> : null}
            </div>
  )
};
