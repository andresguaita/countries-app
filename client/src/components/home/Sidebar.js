import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByAct, filterByContinent, filterByLetter, filterByPopulation, getAllCountries } from '../../actions/Actions'

import './Sidebar.css'

export const Sidebar = () => {

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
    <aside className='sidebar__content'>

      <div className='journal__sidebar-navbar'>
        <h3 className='mt-5'>
          <i  className="fas fa-globe fa-3x" />
          <span> ---------------Countries----------------- </span>
        </h3>

        
      </div>

      <div
        className='journal__new-entry'
       
      >
        
        <i className='far fa-calendar-plus fa-4x' />
        <p className='mt-5'>
        <Link to='/activity' className='link'>
        Create Activity
        </Link>
        </p>
      </div>

      <select name={'activity'} 
       onChange={handleActivityChange} 
       required>
        <option value="default-activity">All</option>
        {activities?.map(act => (<option key={act.id} value={act.name}>{act.name}</option>))}
       </select>

       <select onChange={handleContinentChange}>
                    <option value='default-continent'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Antarctica'>Antarctica</option>
                </select>

        <select onChange={handlePopulationChange}>
                    <option value='default-population'>All</option>
                    <option value='des'>Desc</option>
                    <option value='asc'>Asc</option>
                </select>

         <select onChange={handleLetterChange}>
                    <option value='default-letter'>Order Alphabeth by</option>
                    <option value='A'>A-z</option>
                    <option value='Z'>Z-a</option>
                </select>
    </aside>
  )
  }
