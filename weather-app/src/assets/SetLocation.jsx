import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';
import axios from 'axios';

function SetLocation(){
    const [location,setLocation] = useState('Kathmandu');
    const [locationData,setLocationData] = useState({});
    const apiKey = '365244e6b3b9d6005682def19c2f2bad'
    useEffect(()=> {
            axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},np&limit=1&appid=365244e6b3b9d6005682def19c2f2bad`)
            .then((response)=> 
                {   console.log(`LocationData: `,response.data)
                    setLocationData(response.data)})
            .catch((error)=>console.error("There was an error fetching the location data.", error))
        
       
      }, [location]
    )

    return(
            <>
            <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} />
            {locationData?
            <DisplayWeather locationData = {locationData} apiKey = {apiKey} />
            :<p>Error fetching data</p>}
            
            </>
            )
    }

  


export default SetLocation;