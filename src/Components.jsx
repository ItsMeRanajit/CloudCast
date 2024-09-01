import React,{useState,useEffect} from 'react'
import WeatherImage from './WeatheImage.jsx'
import WeatherDetails from './WeatherDetails.jsx'
import WeatherForcast from './WeatherForcast.jsx'
import getFormattedData from './services/weatherService.js'
import Loading from './loader.jsx'


const Components = () => {
  const [query , setQuery] = useState({q : "london"})
  const [units, setUnits] = useState("metric")
  const [weather, setWeather] = useState(null)
  const [bgColor, setBgColor] = useState("bg-gray-800")
  const [loader, setLoader] = useState(true);
  
  const getWeather = async () =>{
    console.log(weather)
    await getFormattedData({...query,units}).then((data) => {setWeather(data);  setBackGroundColor(data.main); setLoader(false); }).catch((error) => alert("location not found"));
    // setBackGroundColor(weather.main)
  }

  const setBackGroundColor = (status) => {
    switch(status){
      case 'Clear': setBgColor("bg-orange-900"); break;
      case 'Drizzle':
      case 'Rain': setBgColor("bg-blue-900"); break;
      case 'Clouds': 
      case 'Thunderstorm':
      case 'Tornado':   setBgColor("bg-gray-800"); break;
      case 'Haze': 
      case 'Smoke': 
      case 'Fog': 
      case 'Snow': setBgColor("bg-transparent"); break;
      case 'Sand': setBgColor("bg-orange-900"); break;
      default : setBgColor('bg-gray-800'); break;
    }
  }

  
  useEffect(() => {
    getWeather();
   
    // console.log(weather);
    // setBackGroundColor(weather.main)
  },[query,units])

  return (
    <div className={`grid items-center w-[900px] h-[650px] border-2 border-white backdrop-blur-sm ${bgColor}  bg-opacity-70 rounded-2xl shadow-lg shadow-black`}> 
    <Loading show={loader}/>
      {weather && (
        <>
          <div className='flex gap-3 mb-5'>
            <WeatherImage weather = {weather} setUnits={setUnits} units = {units}/>
            <WeatherDetails weather = {weather} setQuery = {setQuery} setUnits = {setUnits} />
          </div>
        <WeatherForcast title = "3 Hour Step Forecast" data = {weather.hourly}/>
        <WeatherForcast title = "Daily Forecast" data = {weather.daily} />
      </>
    )}
    </div>
  )
}

export default Components;