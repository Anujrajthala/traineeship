import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

function DisplayWeather(props){
    const [weatherData,setWeatherData] = useState({});
    let {locationData }= props;

    useEffect(()=>{
        if(locationData){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0]?.lat}&lon=${locationData[0]?.lon}&appid=365244e6b3b9d6005682def19c2f2bad`)
            .then((response)=> 
                {   console.log(`WeatherData:`, response.data)
                    setWeatherData(response.data)})
            .catch((error)=> console.error("There was an error fetching the weather data!",error))}
        if(locationData){
            console.log("Data is available")
        }
        else{
            console.log("Data is not available")
        }
      },[locationData])

    return(
        <>
        <div>
            {
                weatherData?
                    
                    <ul>
                    <li>Current Weather: {weatherData.weather?weatherData.weather[0]?.main:23}</li>
                    <li>Temperature : {weatherData.main?.temp}</li>
                    </ul>
                :
                
                 <p>Loading Weather Data......</p> 
        
            }
             
                
            
        </div>
        </>
    )

}
export default DisplayWeather;

