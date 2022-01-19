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
            console.log(error)
        }     

    }
}

export const countriesPAg = (data) =>({
    tyes: types.countriesGetByPag, payload: data
})