import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { countriesGetById } from '../../actions/Actions'

export const CountryDetail = () => {

    const dispatch = useDispatch()

    const {id} =useParams()
    const {countryDetail} = useSelector(state => state.country)
    console.log(countryDetail)

    useEffect(() => {
        dispatch(countriesGetById(id))
    }, [dispatch,id])
    return (
        <div>
            <div className='country__card mt-5' >
            
            <img src={ countryDetail.flag } className="country__flag-img mt-1 " alt='flag' />
        <div className='country__data'>
        <h3 className="card-title">{countryDetail.name}</h3>
            <p className="card-text">{countryDetail.continent}</p>    
                <Link to='/home'>
                Back
                </Link>

        </div>
            

    </div>
        </div>
    )
}
