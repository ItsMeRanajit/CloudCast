import { IoSearchCircleOutline } from "react-icons/io5";
import React,{useState,useEffect} from "react";
import { MdOutlineMyLocation } from "react-icons/md";
import { iconMapping } from "./icons.jsx";
const WeatherDetails = ({weather , setQuery , setUnits}) => {
    const [city, setCity] = useState("");
    
    const {
        main,
        humidity,
        speed,
        pressure,
        visibility,
        feels_like,
        icon
    } = weather
    const IconComponent = iconMapping[main];

    const handleSearchClick = () => {
        console.log('Searching for city:', city);
        if(city !== "") setQuery({q:city});
        else alert("enter a value")
    }
    const handleLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords;
                setQuery({lat:latitude , lon: longitude})
            })
        }
    }
    return(
        <div className="flex flex-col items-center w-[400px]h-[380px]">
            {/* <img src = {icon} className="m-3 size-24 "/> */}
            <IconComponent className="m-3 size-24 invert"/>
            <div className=" text-center relative text-4xl text-white after:content-[''] after:block after:w-80 after:h-[2px] after:bg-white after:m-2">
                {main}

            </div>
            
           
            <div className="relative flex flex-col items-center justify-center gap-2 w-72">
                <input type="text" placeholder="search by city..." className="p-2 text-center text-white capitalize bg-transparent border-b-2 border-white w-52 focus:outline-none"
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}/>
                 <MdOutlineMyLocation className="cursor-pointer absolute top-[10px] left-1 size-7 transition-all hover:scale-110 invert" onClick={handleLocation}/>
                <IoSearchCircleOutline 
                className="absolute right-0 transition-all cursor-pointer size-8 invert hover:scale-110 top-2" 
                onClick={handleSearchClick} onKeyDown={handleSearchClick}/>
                <div className="bars">Humidity - <span className="font-bold">{humidity}</span></div>
                <div className="bars">Speed - <span className="font-bold">{speed} km/h</span></div>
                <div className="bars">Visibility - <span className="font-bold">{visibility/1000} km</span></div>
                <div className="bars">Feels Like - <span className="font-bold">{(feels_like).toFixed(1)}</span></div>
            </div>
            
        </div>
    )

}
export default WeatherDetails