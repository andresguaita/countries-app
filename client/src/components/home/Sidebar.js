import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterByAct, getAllCountries } from '../../actions/Actions'



export const Sidebar = () => {

  const dispatch = useDispatch()

  const  {activities} = useSelector(state => state.country)


 

  const handleActivityChange =  ({target}) => {
    
    if(target.value === "default-activity"){
      dispatch(getAllCountries())
  }
  dispatch(filterByAct(target.value))
} 

const handleContinentChange = ({target}) =>{

}
  

  
  

  return (
    <aside className='journal__sidebar'>

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


    </aside>
  )
}
