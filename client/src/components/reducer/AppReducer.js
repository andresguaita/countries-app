import { types } from "../../types/types"

const initialState = {
    countries : [],
    activities: [],
    countryDetail: [],
  
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
        
        case types.countriesGetByName:
            return{
                ...state,
                countries: action.payload
            }

            case types.countriesGetByAct:
           
            return{
                ...state,
                countries: state.countries.filter(country => {
                    const activities = country.activities.map((activity) => (activity.name));
                    return activities.includes(action.payload);
                  })
                }
            
            case types.countriesGetByCont:
              return {
                ...state,
                countries : state.countries.filter(c => c.continent=== action.payload)
              }
                        
            

        case types.activityGetAll:
            return{
                ...state,
                activities: action.payload
            }
        
        case types.activityNew:
            return {
                ...state,
                activities: action.payload
            }
            
           
    
        default:
            return state
    }
}
