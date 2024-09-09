import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';
import axios from 'axios';

function SetLocation() {
    // useState hook to manage the state of the location input by the user
    const [location, setLocation] = useState('Kathmandu');
    
    // useState hook to store the data returned from the API call for location data
    const [locationData, setLocationData] = useState({});
    
    // API key for accessing OpenWeatherMap API
    const apiKey = '365244e6b3b9d6005682def19c2f2bad';
    
    // useEffect hook to fetch location data from the API when the location state changes
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},np&limit=1&appid=${apiKey}`)
            .then((response) => {
                console.log(`LocationData: `, response.data); // Log the response data for debugging
                setLocationData(response.data); // Update the locationData state with the API response
            })
            .catch((error) => console.error("There was an error fetching the location data.", error)); // Log any errors during the API call
    }, [location]); // The effect will run whenever the location state changes

    return (
        <>
            {/* Input field for the user to enter the location */}
            <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
            
            {/* Conditionally render the DisplayWeather component if locationData is available */}
            {locationData ? 
                <DisplayWeather locationData={locationData} apiKey={apiKey} /> 
                : 
                <p>Error fetching data</p> /* Display error message if no data is available */
            }
        </>
    );
}

export default SetLocation;
