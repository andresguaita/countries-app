import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { countriesGetById } from '../../actions/Actions'
import { ActivitiesScreen } from '../activities/ActivitiesScreen'

import './CountryDetail.css'

export const CountryDetail = () => {

    
    const dispatch = useDispatch()

    const { id } = useParams()

   

    const { countryDetail } = useSelector(state => state.country)
    
    useEffect(() => {
        dispatch(countriesGetById(id))
    }, [dispatch, id,countryDetail.flag])


    
    return (
        <section className='detail'>
           
           <div className='detail__contain'>
               <figure className='detail__picture'>
               <Link to='/home' className='Link__back--detail'><i className="fas fa-undo"></i>   Back to home</Link>
                   <img src={countryDetail.flag} className='detail__img'alt='flag'/>
               </figure>
               <div className='detail__text'>
                   <h1 className='detail__title'>{countryDetail.name}</h1>
                   <h2 className='detail__subtitle'>{countryDetail.id}</h2>
                   <h2 className='detail__item'><i className="fas fa-city"></i> {`Capital: ${countryDetail.capital}`}</h2>
                   <h2 className='detail__item'><i className="fas fa-map"></i> {`Subregion: ${countryDetail.subregion}`}</h2>
                   <h2 className='detail__item'><i className="fas fa-ruler"></i> {`Area: ${countryDetail.area} Km2`}</h2>
                   <h2 className='detail__item'><i className="fas fa-user-friends"></i> {`Population: ${countryDetail.population} inhabitants`}</h2>
                   <ActivitiesScreen/>
               </div>
               
           </div>
         
        </section>
    )
}
