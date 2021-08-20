import React, { useEffect, useState } from "react";
import Axios from 'axios';
import "./App.css";

import PhotoOfTheDay from "./components/PhotoOfTheDay";

function App() {

  const [nasaPhotoOfTheDay, setNasaPhotoOfTheDay] = useState({})

  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=iLjEw6E6svOSytOTfHEoDYExz27njt6F45ZsYHeo')
    .then(resp => {
      console.log(resp.data)
      setNasaPhotoOfTheDay(resp.data)
    }).catch(err => {

    })
  }, [])

  return (
    <div className="App">
      <PhotoOfTheDay photoURL={nasaPhotoOfTheDay.hdurl}/>
    </div>
  );
}

export default App;
