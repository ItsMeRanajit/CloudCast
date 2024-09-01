import Clearsky from './assets/weatherimg.jpg'

const WeatherImage = ({weather, setUnits,units}) => {

    const {country,
           name,
           temp, 
           getTimeDate : {
            time,
            day,
            date,}} = weather
           
    return(
        <div style={{backgroundImage : `url(${Clearsky})`}} className='bg-cover bg-center w-[540px] h-[380px] rounded-tl-2xl flex flex-col justify-between rounded-br-md'>
         
            <div className='m-5 text-3xl text-right text-white opacity-100'>
                <p>{name}</p>
                <p>{country}</p>
            </div>
            <div className='flex items-end justify-between m-5 text-white'>
                <div className=''>
                    <p className='text-3xl'>{time}</p>
                    <p className='text-xl'>{day} , {date}</p>
                </div>
                <div className='flex flex-col items-end text-7xl'>
                    <span className='flex gap-5 m-5 mr-8 text-xl text-white'>
                        <span className="units" onClick={() => setUnits("metric")}> °C </span>
                        <span className="units" onClick={() => {setUnits("imperial"); }}> °F</span>
                    </span>
                    <p>{(temp).toFixed(1)}°
                    <span className='text-sm'>{units === "imperial" ? "F" : "C"}</span>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
export default WeatherImage