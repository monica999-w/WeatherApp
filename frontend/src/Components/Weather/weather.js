import { useEffect, useState } from "react";
import{Link } from "react-router-dom"
import "./weather.css"
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import logo from '../../Images/logo.png';
import WeatherCurrent from "./weatherCurrent";


const WeatherMain = () => {

    const localCity = localStorage.getItem('weatherCity');

    const [city, setCity] = useState( localCity && localCity !== '' ? localCity :  'Craiova')
    const [weatherInfo, setWeatherInfo]= useState({});
    const [loading, setLoading]= useState(true);


    const changeCity = (newCity) => {
        setCity(newCity)
        localStorage.setItem('weatherCity', newCity)
    }


    useEffect(()=>{
        handleFetch();
    },[])

    const API_URL=`http://api.weatherapi.com/v1/forecast.json?key=f3ccb1cf28744fea8bd143806223107&q=${city}&days=6&aqi=yes&alerts=yes`;

    const handleFetch = async() =>{
        await fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setWeatherInfo({
                name: data.location.name,
                country: data.location.country,
                temp_c: data.current.temp_c,
                temp_f: data.current.temp_f,
                feelslike_c: data.current.feelslike_c,
                feelslike_f: data.current.feelslike_f,
                humidity: data.current.humidity,
                windkph: data.current.windkph,
                icon: data.current.condition.icon,
                daycount: data.forecast.forecastday.length,
                getDay: function(days){
                    return{
                        id: data.forecast.forecastday[days].date_epoch,
                        temp: {
                            c: data.forecast.forecastday[days].day.avgtemp_c,
                            f: data.forecast.forecastday[days].day.avgtemp_f
                        },
                        icon: data.forecast.forecastday[days].day.condition.icon,
                        time: data.forecast.forecastday[days].date,
                        text: data.forecast.forecastday[days].day.condition.text,
                        max_temp: {
                            c: data.forecast.forecastday[days].day.maxtemp_c,
                            f: data.forecast.forecastday[days].day.maxtemp_f
                        },
                        min_temp: {
                            c: data.forecast.forecastday[days].day.mintemp_c,
                            f: data.forecast.forecastday[days].day.mintemp_f,
                        },
                        totalprec: data.forecast.forecastday[days].day.totalprecip_mm,
                        windkph: data.forecast.forecastday[days].day.maxwind_kph,
                        avghumidity: data.forecast.forecastday[days].day.avghumidity,
                        sunrise: data.forecast.forecastday[days].astro.sunrise,
                        sunset:data.forecast.forecastday[days].astro.sunset
                    }
                },
                date: data.location.localtime,
                text: data.current.condition.text
            }));
        setLoading(false);

    }

    return loading ? (<h3 className="loading"> Loading... </h3>):(

        <div className="all">

            <div className="navbar">
                <div className="weathericon">
                    <img className="Logo" src={logo}></img>
                    <p className="title">WeatherApp</p>
                </div>

                <div className="weather">
                    <input type="text" value={city} onChange={(e) => changeCity(e.target.value)}/>
                    <button className="searchbtn" onClick={handleFetch}>Search</button>
                </div>

                <div className="weatherLogout">
                  <Link to={"/login"} className="navlogo " >Logout</Link>
                  <MDBIcon fas icon="sign-out-alt light" size='1.5x'/>
                </div>

            </div>

            <WeatherCurrent weatherInfo={weatherInfo}/>

        </div>);

}

export default WeatherMain;