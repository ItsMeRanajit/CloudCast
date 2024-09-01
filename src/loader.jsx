import React from "react";
import WeatherIcons from "./assets/WeatherIcons.gif"; 
const Loading =({show}) => {
    return show && (
        <div className='flex justify-center '>
            <img src={WeatherIcons} alt="loading" className="size-24" />
        </div>
    )
}
export default Loading