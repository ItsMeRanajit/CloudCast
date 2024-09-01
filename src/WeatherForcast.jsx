import React from "react";
import { iconMapping } from "./icons.jsx";

const WeatherForcast = ({title, data}) => {
    return(
        <div className="text-sm text-white ">
        <div className="flex items-center justify-start mx-5 mb-2">
            <p className="font-light uppercase">{title}</p>
        </div>
        <hr className="mx-5 mb-2"/>
        <div className="flex items-center justify-between mx-8 mb-5">
            {data.map((d,index) => (
                <div key = {index} className="flex flex-col items-center justify-center ">
                    <p>{title === "3 Hour Step Forecast" ? d.title.time : d.title.day}</p>
                    <img src={d.icon} className="size-8 transform-none"/>
                    {/* <IconComponent className="size-8"/> */}
                    <p className="text-[12px]">{(d.temp).toFixed(1)}°</p>
                </div>
            ))}
        </div>
    </div>
    )
}
export default WeatherForcast
