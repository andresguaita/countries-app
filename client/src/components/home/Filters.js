import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByAct, filterByContinent, filterByLetter, filterByPopulation, getAllCountries } from '../../actions/Actions'

import './Filters.css'

export const Filters = () => {

  const dispatch = useDispatch()

  const  {activities} = useSelector(state => state.country)


  const handleActivityChange =  ({target}) => {
  if(target.value ==='default-activity'){
    dispatch(getAllCountries())
  }
  
  dispatch(filterByAct(target.value))
} 

const handleContinentChange = ({target}) =>{
  if(target.value === "default-continent"){
    dispatch(getAllCountries())
}
else if(target.value !== "default-continent")(
  dispatch(filterByContinent(target.value))
)
}

const handlePopulationChange = ({target}) =>{
  if(target.value ==='default-population'){
    dispatch(getAllCountries())
  }
  
  dispatch(filterByPopulation(target.value))
} 

const handleLetterChange = ({target}) =>{
  if(target.value==='default-letter'){
    dispatch(getAllCountries())
  }
  dispatch(filterByLetter(target.value))
}

  

  return (
    <div className='filter__content'>
      <section className='content-select'>


<select name={'activity'} 
 onChange={handleActivityChange} 
 required>
  <option value="default-activity">Order Activity by</option>
  {activities?.map(act => (<option key={act.id} value={act.name}>{act.name}</option>))}
 </select>


 <select onChange={handleContinentChange}>
              <option value='default-continent'>Order Continent by</option>
              <option value='Africa'>Africa</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='North America'>North America</option>
              <option value='South America'>South America</option>
              <option value='Antarctica'>Antarctica</option>
          </select>
         

  <select onChange={handlePopulationChange}>
              <option value='default-population'>Order Population by</option>
              <option value='des'>Desc</option>
              <option value='asc'>Asc</option>
          </select>
         

   <select onChange={handleLetterChange}>
              <option value='default-letter'>Order Alphabeth by</option>
              <option value='A'>A-z</option>
              <option value='Z'>Z-a</option>
          </select>
         
</section>
    </div>
    
  )
  }
