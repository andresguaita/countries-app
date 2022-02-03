import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { countriesGetById } from '../../actions/Actions'
import { ActivitiesScreen } from '../activities/ActivitiesScreen'
import { LoadingScreen } from '../Loading/LoadingScreen'

import './CountryDetail.css'

export const CountryDetail = () => {

    
    const dispatch = useDispatch()

    const { id } = useParams()

    const { countryDetail } = useSelector(state => state.country)

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
       
        setTimeout(()=>{
            dispatch(countriesGetById(id))
            setLoading(false)
            },2500)
    }, [dispatch,id])

    if(loading) return (<LoadingScreen/>)
    
    return (
        <section className='detail'>
           
           <div className='detail__contain'>
               <figure className='detail__picture'>
               <Link to='/home' className='Link__back--detail'><img src='assets/undo-icon.svg' alt='city'className='detail__icon--undo'/>  Back to home</Link>
                   <img src={countryDetail.flag} className='detail__img'alt='flag'/>
               </figure>
               <div className='detail__text'>
                   <h1 className='detail__title'>{countryDetail.name}</h1>
                   <h2 className='detail__subtitle'>{countryDetail.id}</h2>
                   <h2 className='detail__item'><img src='assets/city-icon.svg' alt='city'className='detail__icon'/>{`Capital: ${countryDetail.capital}`}</h2>
                   <h2 className='detail__item'><img src='assets/map-icon.svg' alt='map'className='detail__icon'/> {`Subregion: ${countryDetail.subregion}`}</h2>
                   <h2 className='detail__item'><img src='assets/ruler-icon.svg' alt='ruler' className='detail__icon'/> {`Area: ${countryDetail.area} Km2`}</h2>
                   <h2 className='detail__item'><img src='assets/people-icon.svg' alt='people' className='detail__icon'/> {`Population: ${countryDetail.population} inhabitants`}</h2>
                   <ActivitiesScreen/>
               </div>
               
           </div>
         
        </section>
    )
}
