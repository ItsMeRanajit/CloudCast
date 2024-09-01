const API_KEY = import.meta.env.VITE_WEATHER_API; // your api key is here
const BASE_URL =   'https://api.openweathermap.org/data/2.5/'
import {DateTime} from 'luxon'
const getWeatherData = async (infotype, searchParams) => {
    const url = new URL(BASE_URL + infotype)
    url.search = new URLSearchParams({...searchParams, appid : API_KEY})

    return fetch(url).then((res) => res.json())
}

const formatToLocalTime = (secs, offset,) => {
    const offsetInMilliseconds = offset;
    const datetimeUTC = DateTime.fromSeconds(secs + offset, { zone: 'utc' });
    const datetime = datetimeUTC.plus({ milliseconds: offsetInMilliseconds });
    return {
        time: datetime.toFormat('hh:mm a'),
        day: datetime.toFormat('cccc'),
        date: datetime.toFormat('dd LLL yyyy')
    }
}
  
const iconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`
const formatCurrentData = (data) => {
    // console.log(data)
    const {
        coord : {lat,lon},
        main : {temp, feels_like,pressure, humidity},
        name,
        visibility,
        dt,
        sys : {country, sunrise, sunset},
        weather,
        wind :{speed},
        timezone,
    } = data;

    const {main, icon} = weather[0];
    const getTimeDate= formatToLocalTime(dt, timezone);
    // console.log(getTimeDate)
    // console.log(data)

    return {
        dt,
        timezone,
        lat,lon,
        temp,
        feels_like,
        pressure,
        visibility,
        humidity,
        name,
        country,
        sunrise : formatToLocalTime(sunrise, timezone, 'hh : mm a'),
        sunset : formatToLocalTime(sunset, timezone, 'hh : mm a'),
        speed,
        main,
        icon : iconUrl(icon),
        getTimeDate
    }
}
const formatForecastData = (secs,offset,data) => {
    const hourly = data.filter(f => f.dt > secs).slice(0,5).map((f) => ({
        temp : f.main.temp,
        title : formatToLocalTime(f.dt, offset,"hh : mm a"),
        icon : iconUrl(f.weather[0].icon),
        date: f.dt_txt
    }))
    // console.log(data)
    const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00" ).map((f)=> ({
        temp : f.main.temp,
        title : formatToLocalTime(f.dt, offset,"hh : mm a"),
        icon : iconUrl(f.weather[0].icon),
        date: f.dt_txt
    }))
    return {hourly,daily};
}
const getFormattedData =  async (searchParams) => {
    const formattedData = await getWeatherData("weather", searchParams).then((res) => formatCurrentData(res));

    const {dt, lat, lon, timezone} = formattedData;
    const forcastData = await getWeatherData("forecast", {lat,lon,units : searchParams.units}).then((d) => formatForecastData(dt,timezone,d.list))
    // console.log(forcastData)

    return {...formattedData, ...forcastData}
} 
export default getFormattedData