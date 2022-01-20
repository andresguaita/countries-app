import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getAllActivities, getAllCountries } from '../../actions/Actions'
import { CountryCard } from '../countries/CountryCard'


import { Navbar } from '../ui/Navbar'
import { Sidebar } from './Sidebar'

export const HomeScreen = () => {

    const dispatch = useDispatch()

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
        <div>
            <Navbar setCurrentPage= {setCurrentPage}/> 
            
        <div className='journal__main-content'>
        <Sidebar/>
        <div>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handlePrevPage}>Back</button>
        <main className='notes__content'>
        <div>
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
                
            </main>
            <div></div>
        </div>
        
           
            
        </div>
                       
       </div>
    )
}
