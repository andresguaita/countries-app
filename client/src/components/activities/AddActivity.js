import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, newActivity } from '../../actions/Actions'

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
          error.name= 'Name is required'
        }
        else if(!/[a-zA-Z ]{2,254}/.test(input.name)){
          error.name= 'Name is invalid'
        }
      
      if(!input.duration){
        error.duration= 'Duration is required'
      }
      
       else if((!/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/.test(input.duration))){
          error.duration= 'Duration is invalid'
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
        
        let ObjError= validate({...input,[target.name]:target.value})
        setError(ObjError)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(newActivity(input.name,input.difficulty,input.duration,input.season,input.countriesS))
    }


    return (
        <div className="container">  
  <form onSubmit={handleSubmit}>
    <div>
    <div>
    <h3>Create Activity</h3>
    <h4>Create Awesome Activity!!!</h4>
    
    <input placeholder="name" 
    type="text" 
    className={error.name&& 'danger'}
    value= {input.name} 
    name={'name'} 
    onChange={handleInputChange} />
    {error.name && (
           <p className="danger">{error.name}</p>
    )}

      <select name={'country'} 
      onChange={handleSelect} 
      required>
      <option value="">Country</option>
      {countries?.map(country => (<option value={country.id} key={country.id}>{country.name}</option>))}
                        
       </select>
       {input.countriesS?.map(c=>(<p key={c}>{c}</p>))}

       <input 
       name={'duration'} 
       value={input.duration}
       onChange={handleInputChange}
       className={error.duration&& 'danger'}
       />
       <span>horas</span>
       {error.duration && (
           <p className="danger">{error.duration}</p>
    )}

        <select name={'difficulty'} 
       onChange={handleInputChange} 
       required>
        <option value="">Dificulty</option>
        {arrDifficulty.map(difficulty => (<option value={difficulty} key={difficulty}>{difficulty}</option>))}
       </select>

        <select 
       name={'season'} 
       onChange={handleInputChange} 
       required>
       <option value="">Season</option>
        {arrSeason.map(season => (<option value={season} key={season}>{season}</option>))}
       </select>
        {error.name || error.duration 
        ? null 
        : <button name="submit" type="submit">Submit</button> }
      
    </div>
    <div>
        <h1>Description</h1>
    </div>
    </div>
    
    
  </form>
</div>
    )
}
