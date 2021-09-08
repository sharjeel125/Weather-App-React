
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";




function App() {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    
    var location = prompt("Enter City Name")
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1d0329a9cf37be737aedaf5d50dddd68&units=metric`)
      .then(res => {
        const newWeather = res.data;
        setWeather(newWeather);
      });


    return () => {
      console.log("Unloaded")
    };
  },
    []);

  return (
    <div className="main">
    {/* <img src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" class="img-fluid" alt="..."/> */}
      
      <h1 id="name">{weather?.name}</h1>
      <h1 id="temp">{weather?.main?.temp}<sup>o</sup>C</h1>
      <h1 id="humi">Humidity :{weather?.main?.humidity}</h1>
      <h1 id="press">Pressure :{weather?.main?.pressure}</h1>
      {/* <input type="text" placeholder="Enter Your City"/> */}

    </div>
  )
}




export default App;
