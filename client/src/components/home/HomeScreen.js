import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getAllCountries } from '../../actions/Actions'
import { CountryCard } from '../countries/CountryCard'


import { Navbar } from '../ui/Navbar'
import { Sidebar } from './Sidebar'

export const HomeScreen = () => {

    const [currentPage, setCurrentPage] = useState(0)

    const  {countries} = useSelector(state => state.country)
    
    let offset = 9

    const filteredCountries = () =>{
        
        return countries.slice(currentPage,currentPage+offset)
    }

    const handleNextPage = () =>{
        
        if(countries.length > currentPage + offset){
            setCurrentPage(currentPage+offset)
        }
    }

    const handlePrevPage= () =>{
        
       if(currentPage>1){
           setCurrentPage(currentPage-offset)
           
       }       
    }
    

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCountries())
        
    }, [dispatch])



    return (
        <div>
            <Navbar setCurrentPage= {setCurrentPage}/> 
            
        <div className='journal__main-content'>
        <Sidebar/>
        <div>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handlePrevPage}>Back</button>
        <main className='notes__content'>
        
            {

                countries
            
                ? filteredCountries().map(country =>(
                <CountryCard
                key={country.id}
                id={country.id}
                flag={country.flag} 
                name = {country.name}
                continent = {country.continent}
                />

                )) : <h1>No hay Countries</h1> }
                
                
            </main>
            <div></div>
        </div>
        
           
            
        </div>
                       
       </div>
    )
}
