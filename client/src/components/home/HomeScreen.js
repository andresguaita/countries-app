import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {getAllCountries } from '../../actions/Actions'
import { CountryCard } from '../countries/CountryCard'


import { Navbar } from '../ui/Navbar'
import { Sidebar } from './Sidebar'

export const HomeScreen = () => {

    const [currentPage, setCurrentPage] = useState(0)

    

   
    const  {countries} = useSelector(state => state.country)

    const handleNextPage = () =>{
        if(countries.length){
            setCurrentPage(currentPage+1)
        }
       
       
    }

    const handlePrevPage= () =>{
        
       if(currentPage>0){
           setCurrentPage(currentPage-1)
           
       }       
    }
    

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCountries(currentPage))
        
    }, [dispatch,currentPage])

    



   
    return (
        <div>
            <Navbar /> 
            
        <div className='journal__main-content'>
        <Sidebar/>
        <div>
        <button onClick={handleNextPage}>Next</button>
        <button onClick={handlePrevPage}>Back</button>
        <main className='notes__content'>
        
            {

                countries? 
            
             countries.map(country =>(
                <CountryCard
                key={country.id}
                id={country.id}
                flag={country.flag} 
                name = {country.name}
                continent = {country.continent}
                />

                ))
                : <h1>There are not country to show</h1>
                }
            </main>
        </div>
        
           
            
        </div>
                       
       </div>
    )
}
