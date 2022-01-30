import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, newActivity } from '../../actions/Actions'

import './Acitvity.css'
import { Modal } from './Modal'

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

  const [modalOpen, setModalOpen] = useState(false);

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

  const handleRemoveSelect = (indexItem) =>{
    setInputChange({
      ...input,
      countriesS: input.countriesS.filter((c, index) => index !== indexItem)
    }
    );
  }


  const handleInputChange = ( e ) => {
    setInputChange({
      ...input,
      [e.target.name]: e.target.value
    })

    let ObjError = validate({ ...input, [e.target.name]: e.target.value })
    setError(ObjError)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(input.name.trim().length>0 || input.duration.trim().length>0){
      dispatch(newActivity(input.name, input.difficulty, input.duration, input.season, input.countriesS))
    setInputChange({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countriesS: []
    })

    setModalOpen(true)
    }
  }

  


  return (

    <section className="form">
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      >
        <div className='modal__children'>
          <img src='/assets/check.gif' alt='check' />
          <h1>Activity has been successfully created</h1>
        </div>

      </Modal>
      <figure className='form__picture'>
        <img src='/assets/form.svg' alt='form' className='form__img' />
      </figure>
      <form onSubmit={handleSubmit} className='form__contain'>

        <h2 className='form__title'>Create Activity</h2>
        <h4 className='form__subtitle'>Create Awesome Activity!!!</h4>
        {error.name && (
          <p className="danger__text"><i className="fas fa-exclamation-triangle"></i> {error.name}</p>
        )}
        <input placeholder="Name of Activity"
          type="text"
          className={error.name ? 'danger' : 'input'}
          value={input.name}
          name={'name'}
          autoComplete='off'
          onChange={handleInputChange} />

        <input
          name={'duration'}
          placeholder='Duration of activity in hours'
          autoComplete='off'
          value={input.duration}
          onChange={handleInputChange}
          className={error.duration ? 'danger' : 'input'}
        />
        {error.duration && (
          <p className="danger__text"><i className="fas fa-exclamation-triangle"></i> {error.duration}</p>
        )}
        <div className='content__select'>
        <select
  
          name={'country'}
          onChange={handleSelect}
          >
          <option value="">Country</option>
          {countries?.map(country => (<option value={country.id} key={country.id}>{country.name}</option> ))}

        </select>

        <select
         
          name={'difficulty'}
          onChange={handleInputChange}
          >
          <option value="">Dificulty</option>
          {arrDifficulty.map(difficulty => (<option value={difficulty} key={difficulty}>{difficulty}</option>))}
        </select>

        <select
         
          name={'season'}
          onChange={handleInputChange}
          >
          <option value="">Season</option>
          {arrSeason.map(season => (<option value={season} key={season}>{season}</option>))}
        </select>
        {input.countriesS && <div className='country__contain'>
          {input.countriesS?.map((c,index) => (<p key={c} className='country__select' >{c}<i className="fas fa-times-circle" onClick={() => handleRemoveSelect(index)}></i></p>))}
        </div>}
        </div>
       
        <button name="submit" type="submit" className='form__submit' >Submit</button>
        <Link to='/home' className='Link__back'><i className="fas fa-undo"></i>   Back to home</Link>
      </form>

    </section>


  )
}
