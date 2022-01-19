import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../../actions/Actions'

export const AddActivity = () => {

   //const {countries} = useSelector(state => state.country)
   const dispatch = useDispatch()
  
   const {countries} = useSelector((state) => state.country)

   countries.sort((a,b) => a.name.localeCompare(b.name))

  
   
    useEffect(()=>{
            dispatch(getAllCountries())
    },[dispatch])

    const  validate= (input) => {
        let error={}
        if(!input.name){
          error.username= 'Name is required'
        }
        else if(!/(-?([A-Z].\s)?([A-Z][a-z]+)\s?)+([A-Z]'([A-Z][a-z]+))?/.test(input.name)){
          error.username= 'Name is invalid'
        }
      
      if(!input.duration){
        error.password= 'Duration is required'
      }
      
       else if((!/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/.test(input.duration))){
          error.password= 'Password is invalid'
        }
      return error
      
      }

    const [input, setInputChange]= useState({
        name:'',
        difficulty: '',
        duration:'',
        season: '',
        countriesS: []
        })

    const [error, setError]= useState({})
    
    const arrSeason = ["Spring", "Summer", "Autumn", "Winter"] 

    const arrDifficulty = ['1','2','3','4','5']


    const handleSelect = ({target}) => {
        setInputChange({
            ...input,
            countriesS:[...input.countriesS,target.value]}
        );
    }

    const handleInputChange = ({target}) => {
        setInputChange({
            ...input,
            [target.name]: target.value
        })
        setError(validate({input, [target.name]: target.value}))
    }


    return (
        <div className="container">  
  <form action="" method="post">
    <div>
    <div>
    <h3>Create Activity</h3>
    <h4>Create Awesome Activity!!!</h4>
    
    <input placeholder="name" 
    type="text" 
    value= {input.name} 
    name={'name'} 
    onChange={handleInputChange} /> 

      { <select name={'country'} 
      onChange={handleSelect} 
      required>
      <option value="">Country</option>
      {countries?.map(country => (<option value={country.id} key={country.id}>{country.name}</option>))}
                        
       </select>} 
       {input.countriesS?.map(c=>(<p key={c}>{c}</p>))}
       <input name={'duration'} onChange={handleInputChange}/><span>horas</span>

       { <select name={'difficulty'} 
       onChange={handleInputChange} 
       required>
        <option value="">Dificulty</option>
        {arrDifficulty.map(difficulty => (<option value={difficulty} key={difficulty}>{difficulty}</option>))}
       </select>} 

       { <select 
       name={'season'} 
       onChange={handleInputChange} 
       required>
       <option value="">Season</option>
        {arrSeason.map(season => (<option value={season} key={season}>{season}</option>))}
       </select>} 


    
    
    
    
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </div>
    <div>
        <h1>Description</h1>
    </div>
    </div>
    
    
  </form>
</div>
    )
}
