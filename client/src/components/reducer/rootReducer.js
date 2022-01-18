import {combineReducers} from 'redux'
import { AppReducer } from './AppReducer'



export const rootReducer = combineReducers({
    country: AppReducer
})