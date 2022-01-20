import { types } from "../types/types";
import axios from 'axios'

export const getAllCountries = () =>{
    
    return async (dispatch) =>{
        const resp = await axios('http://localhost:3001/countries/',
        )
        
        return dispatch({type: types.countriesGetAll, payload: resp.data.countries})

    }
}



export const countriesGetById = (id) =>{

    return async (dispatch) =>{
        try {
            const resp = await axios(`http://localhost:3001/countries/${id}`)
        
            return dispatch({type: types.countriesGetById, payload: resp.data.country})
        } catch (error) {
            console.log(error)
        }
        

    }

}

export const countriesByName= (name) =>{
    return async (dispatch) =>{
        try {
            const resp = await axios(`http://localhost:3001/countries/`,{
            params:{
                name
            }
        })
        
        return dispatch({type: types.countriesGetByName, payload: resp.data.country})
        
        } catch (error) {
            dispatch(countryNotFound())
        }     

    }
}

export const countryNotFound = () => ({
    type: types.countriesNotFound
})


export const getAllActivities= () =>{
    return async (dispatch) =>{
        try {
            const resp = await axios(`http://localhost:3001/activity/`)
        return dispatch({type: types.activityGetAll, payload: resp.data.activities})
        
        } catch (error) {
            console.log(error)
        }     

    }
}


export const newActivity = (name, difficulty,duration,season,countries) =>{

    return async (dispatch) =>{
        try {
            const resp = await axios.post(`http://localhost:3001/activity`,{
                name, 
                difficulty,
                duration,
                season,
                countries
            })
        
            return dispatch({type: types.activityNew, payload: resp.data.activity})

        } catch (error) {
            console.log(error)
        }
 
    }
}

export const filterByAct = (name) =>(
    {
        type: types.countriesGetByAct,
        payload : name
    }
)

export const filterByContinent = (continent) =>(
    {
        type: types.countriesGetByCont,
        payload : continent
    }
)

export const filterByPopulation = (order) =>(
    {
        type: types.countriesGetByPop,
        payload : order
    }
)


export const filterByLetter = (letter) =>(
    {
        type: types.countriesGetByLetter,
        payload : letter
    }
)
