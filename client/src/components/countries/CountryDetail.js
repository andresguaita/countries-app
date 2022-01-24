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

    

  

        
 
    
    
    return (
        <div id="detail" className='contain__detail'>
           
         
        </div>
    )
}
