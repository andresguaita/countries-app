import { types } from "../../types/types"

const initialState = {
    countries : [],
    activities: [],
    countryDetail: {},
    allCountryContent: []
  
}



export const AppReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.countriesGetAll:
            return {
                ...state,
                countries: action.payload,
                allCountryContent: action.payload
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
        
        case types.countriesNotFound:
            return {
                ...state,
                countries: []
            }
        
        case types.countriesDetailEmpty:
            return {
                ...state,
                countryDetail : {}
            }

            case types.countriesGetByAct:
           
            return{
                ...state,
                countries: state.allCountryContent.filter(country => {
                    const activities = country.activities.map((activity) => (activity.name));
                    return activities.includes(action.payload);
                  })
                }
            
            case types.countriesGetByCont:
            
              return {
                ...state,
                countries : state.allCountryContent.filter(c => c.continent=== action.payload)
              }

            case types.countriesGetByPop:
            
              return{
                  ...state,
                  countries : action.payload === 'des'? 
                  state.allCountryContent.sort((a,b)=> a.population -b.population)
                  : state.allCountryContent.sort((a,b)=> a.population -b.population).reverse()
              }
            
            case types.countriesGetByLetter:
                return {
                    ...state,
                    countries : action.payload === 'A'? 
                  state.allCountryContent.sort((a,b)=> a.name.localeCompare(b.name))
                  : state.allCountryContent.sort((a,b)=> a.name.localeCompare(b.name)).reverse()
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
