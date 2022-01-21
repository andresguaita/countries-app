import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, newActivity } from '../../actions/Actions'

import './Acitvity.css'

export const AddActivity = () => {

  //const {countries} = useSelector(state => state.country)
  const dispatch = useDispatch()

  const { countries } = useSelector((state) => state.country)

  countries.sort((a, b) => a.name.localeCompare(b.name))



  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  const validate = (input) => {
    let error = {}
    if (!input.name) {
      error.name = 'Name is required'
    }
    else if (!/[a-zA-Z ]{2,254}/.test(input.name)) {
      error.name = 'Name is invalid'
    }

    if (!input.duration) {
      error.duration = 'Duration is required'
    }

    else if ((!/^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/.test(input.duration))) {
      error.duration = 'Duration is invalid'
    }
    return error

  }

  const [input, setInputChange] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countriesS: []
  })

  const [error, setError] = useState({})

  const arrSeason = ["Spring", "Summer", "Autumn", "Winter"]

  const arrDifficulty = ['1', '2', '3', '4', '5']


  const handleSelect = ({ target }) => {
    setInputChange({
      ...input,
      countriesS: [...input.countriesS, target.value]
    }
    );
  }

  const handleInputChange = ({ target }) => {
    setInputChange({
      ...input,
      [target.name]: target.value
    })

    let ObjError = validate({ ...input, [target.name]: target.value })
    setError(ObjError)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    dispatch(newActivity(input.name, input.difficulty, input.duration, input.season, input.countriesS))
    setInputChange({name: '',
    difficulty: '',
    duration: '',
    season: '',
    countriesS: []})

  }


  return (
    <section className="form">
      <figure className='form__picture'>
        <img src='/assets/form.svg' alt='form' className='form__img'/>
      </figure>
      <form onSubmit={handleSubmit} className='form__contain'>
        
            <h2 className='form__title'>Create Activity</h2>
            <h4 className='form__subtitle'>Create Awesome Activity!!!</h4>
            {error.name && (
              <p className="danger__text">{error.name}</p>
            )}
            <input placeholder="Name of Activity"
              type="text"
              className={error.name ? 'danger' : 'input'}
              value={input.name}
              name={'name'}
              autoComplete='off'
              onChange={handleInputChange} />

            <select
              className='select' 
              name={'country'}
              onChange={handleSelect}
              required>
              <option value="">Country</option>
              {countries?.map(country => (<option value={country.id} key={country.id}>{country.name}</option>))}

            </select>
            <div className='country__contain'>
            {input.countriesS?.map(c => (<p key={c} className='country__select'>{c}&nbsp;</p>))}
            </div>
            

            {error.duration && (
              <p className="danger__text">{error.duration}</p>
            )}
            <input
              name={'duration'}
              placeholder='Duration of activity in hours'
              autoComplete='off'
              value={input.duration}
              onChange={handleInputChange}
              className={error.duration? 'danger' : 'input'}
            />

            <select 
              className='select'
              name={'difficulty'}
              onChange={handleInputChange}
              required>
              <option value="">Dificulty</option>
              {arrDifficulty.map(difficulty => (<option value={difficulty} key={difficulty}>{difficulty}</option>))}
            </select>

            <select
              className='select'
              name={'season'}
              onChange={handleInputChange}
              required>
              <option value="">Season</option>
              {arrSeason.map(season => (<option value={season} key={season}>{season}</option>))}
            </select>
            {<button name="submit" type="submit" className='form__submit' >Submit</button>}
      </form>
    </section>
  )
}
