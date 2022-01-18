import * as React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { AddActivity } from "../components/activities/AddActivity";
import { CountryDetail } from "../components/countries/CountryDetail";
import { HomeScreen } from "../components/home/HomeScreen";
import { LandingScreen } from "../components/landing/LandingScreen";



export const AppRouter = () => {
    return (
        
        <BrowserRouter>
            
            <Routes>


                <Route exact path="/" element={<LandingScreen/>} /> 

                <Route exact path="/home" element={<HomeScreen/>} />

                <Route exact path="/:id" element={<CountryDetail/>} />

                <Route exact path="/activity" element={<AddActivity/>} />
    
            </Routes>
        
        </BrowserRouter>
    )
}
