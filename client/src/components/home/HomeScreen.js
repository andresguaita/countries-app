import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {getAllActivities, getAllCountries } from '../../actions/Actions'
import { CountryCard } from '../countries/CountryCard'


import { Navbar } from '../ui/Navbar'
import { Filters } from './Filters'

import './Home.css'

export const HomeScreen = () => {

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(0)

    const [numberPage, setNumberPage] = useState(1)

    const  {countries} = useSelector(state => state.country)
    
    const [offset, setOffset] = useState(9)

   

    useEffect(() => {
        if(currentPage!==0){
            setOffset(10)
        }
        else if(currentPage===0){
            setOffset(9)
        }
        
    }, [currentPage,numberPage])

  
    const filteredCountries = () =>{
        
        return countries.slice(currentPage,currentPage+offset)
    }

    const handleNextPage = () =>{
        if(countries.length > currentPage + offset){
            setCurrentPage(currentPage+offset)
        }
        setNumberPage(numberPage+1)
    }

    const handlePrevPage= () =>{    
       if(currentPage>0){
           setCurrentPage(currentPage-offset)  
           setNumberPage(numberPage-1)      
       }  
       if(currentPage>0){
        setCurrentPage(currentPage-(offset-1))  
        setNumberPage(numberPage-1)      
    }
}

    const handleReload = () =>{
        dispatch(getAllCountries())
    }

    
    useEffect(() => {
        dispatch(getAllCountries())
        
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllActivities())   
    }, [dispatch])

    return (
        
      <div className='home__content'>
        <div className='home__item header'>
           <Navbar/>  
          
        </div>
        <div className='home__item home_item--filters'>
            <Filters/>
        </div>
        <div className='home__countries'>
        {
                
                countries.length? filteredCountries().map(country =>(
                <CountryCard
                key={country.id}
                id={country.id}
                flag={country.flag} 
                name = {country.name}
                continent = {country.continent}
                />

                )) :  <div>
                <h1>Country Not Found!</h1>
                
               <button onClick={handleReload}>RELOAD</button>
               </div> }   
              
        </div>

        <div>
        
       { countries.length && <div className='button'>
        <div className='button__item' onClick={handlePrevPage}><span>Previous</span></div>
        <div className='button__item--page' ><span>{numberPage}</span></div>
        <div className='button__item' onClick={handleNextPage}><span>Next</span> <i classname="fas fa-arrow-right"></i></div>
        </div>}
        
        </div>
           
        </div>
        
    
    )
}
