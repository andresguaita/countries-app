import { types } from "../types/types";
import axios from 'axios'

export const getAllCountries = (page,size=10) =>{
    if(page===0){
        size = 9
    }
    return async (dispatch) =>{
        const resp = await axios('http://localhost:3001/countries/',{
            params:{
                page: page,
                size: size
            }
        })
        
        return dispatch({type: types.countriesGetAll, payload: resp.data.countries.rows})

    }
}

export const countriesGetById = (id) =>{

    return async (dispatch) =>{
        const resp = await axios(`http://localhost:3001/countries/${id}`)
        
        return dispatch({type: types.countriesGetById, payload: resp.data.country})

    }

}