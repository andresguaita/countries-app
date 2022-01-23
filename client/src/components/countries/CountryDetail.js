import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { countriesGetById } from '../../actions/Actions'

import './CountryDetail.css'

export const CountryDetail = () => {

    
    const dispatch = useDispatch()

    const { id } = useParams()

   

    const { countryDetail } = useSelector(state => state.country)
    
    useEffect(() => {
        dispatch(countriesGetById(id))
        let body = document.getElementById('detail')
        body.style.backgroundImage =`url(${countryDetail.flag})`
    }, [dispatch, id,countryDetail.flag])

    

        // 

        
 
    
    
    return (
        <div id="detail" className='contain__detail'>
            <section className='card'>
            <img src={`${countryDetail.flag}`} alt='flag' className='card__img'/>
                <div className='card__content'>
                    <h1 className='card__title'>{countryDetail.name}</h1>
                    <h3 className='card__description'>{countryDetail.id}</h3>
                    <h4 className='card__description'>{countryDetail.capital}</h4>
                    <h4 className='card__description'>{countryDetail.subregion}</h4>
                    <h4 className='card__description'>{`${countryDetail.area} Km2`}</h4>
                    <h4 className='card__description'>{countryDetail.subregion}</h4>
                    <h4 className='card__description'>{countryDetail.population}</h4>
                    {countryDetail.activities?.map(a => (
                        <p>{`Name of Activity ${a.name.toUpperCase()}`}
                        </p>
                    ))}
                    <button className='card__button'>Back</button>
                </div>
            </section>
         
        </div>
    )
}
