import React from 'react'
import { Link } from 'react-router-dom'



export const Sidebar = () => {

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
      {/* <div className='sidebar__option-item mt-1'>
      <p>Option 1</p>
      <select name="select1" value="1">
        <option value="value1" selected>Value 1</option>
        <option value="value2" >Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <p>Option 2</p>
      <select name="select2" value="2">
        <option value="value1" selected="selected">Value 1</option>
        <option value="value2" >Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      <p>Option 3</p>
      <select name="select3" value="3">
        <option value="value1" selected>Value 1</option>
        <option value="value2" >Value 2</option>
        <option value="value3">Value 3</option>
      </select>
      </div> */}

    </aside>
  )
}
