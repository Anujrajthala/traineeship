import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayWeather(props) {
    // useState hook to manage the state of the weather data
    const [weatherData, setWeatherData] = useState({});
    
    // Destructure locationData from props
    let { locationData } = props;

    // useEffect hook to fetch weather data based on the location data from the parent component
    useEffect(() => {
        if (locationData) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0]?.lat}&lon=${locationData[0]?.lon}&appid=${props.apiKey}`)
                .then((response) => {
                    console.log(`WeatherData:`, response.data); // Log the weather data for debugging
                    setWeatherData(response.data); // Update the weatherData state with the API response
                })
                .catch((error) => console.error("There was an error fetching the weather data!", error)); // Log any errors during the API call
        }

        // Conditional logging to check if locationData is available
        if (locationData) {
            console.log("Data is available");
        } else {
            console.log("Data is not available");
        }
    }, [locationData]); // The effect will run whenever the locationData prop changes

    return (
        <div>
            {/* Conditionally render weather data if it's available, otherwise show a loading message */}
            {weatherData ? (
                <ul>
                    {/* Display the current weather and temperature */}
                    <li>Current Weather: {weatherData.weather ? weatherData.weather[0]?.main : 'N/A'}</li>
                    <li>Temperature : {weatherData.main?.temp}</li>
                </ul>
            ) : (
                <p>Loading Weather Data......</p> // Show loading message while waiting for the API response
            )}
        </div>
    );
}

export default DisplayWeather;
