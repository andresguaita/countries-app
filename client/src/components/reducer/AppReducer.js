import { types } from "../../types/types"

const initialState = {
    countries : [],
    activities: [],
    countryDetail: [],
    countriesPag : []
}


export const AppReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.countriesGetAll:
            return {
                ...state,
                countries: action.payload
            }

        case types.countriesGetByPag:
            return {
                ...state,
                countriesPag: action.payload
            }

        case types.countriesGetById:
            return {
                ...state,
                countryDetail: action.payload
            }
        
        case types.countriesGetByName:
            return{
                ...state,
                countries: action.payload
            }
            
           
    
        default:
            return state
    }
}
