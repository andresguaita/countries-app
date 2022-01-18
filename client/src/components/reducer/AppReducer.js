import { types } from "../../types/types"

const initialState = {
    countries : [],
    activities: [],
    countryDetail: []
}


export const AppReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.countriesGetAll:
            return {
                ...state,
                countries: action.payload
            }

        case types.countriesGetById:
            return {
                ...state,
                countryDetail: action.payload
            }
            
           
    
        default:
            return state
    }
}
