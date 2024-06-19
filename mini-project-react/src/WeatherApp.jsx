import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

import "./WeatherApp.css"
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Shimla",   
        feelslike : 47, 
        temp : 45,
        tempMin : 40,
        tempMax : 48,
        humidity : 14,
        weather : "haze"
    });

    let updateInfo = ((result) => {
        setWeatherInfo(result);

    });
    return (
        <div style = {{textAlign : "center"}}>
            <h2>Weather App By Nitin Sharma</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}